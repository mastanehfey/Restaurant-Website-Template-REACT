import React, { Component , createContext } from 'react'
import client from './Contentful'
const mainContext = createContext()

class ContextProvider extends Component {
    constructor(){
        super()        
        this.state={
            menu:[],
            filteredMenu:JSON.parse(localStorage.getItem('filteredMenu')) || [],
            currentProduct:'',
            categories:[],
            cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
            subtotal: JSON.parse(localStorage.getItem('subtotal')) ? JSON.parse(localStorage.getItem('subtotal')) :0,
            tax: JSON.parse(localStorage.getItem('tax')) ? JSON.parse(localStorage.getItem('tax')) :0,
            total: JSON.parse(localStorage.getItem('total')) ? JSON.parse(localStorage.getItem('total')) :0,
            pizzaList:[],
            searchResult:[],
            varsize : JSON.parse(localStorage.getItem('varsize')) ? JSON.parse(localStorage.getItem('varsize')) :'',
            varcrust : JSON.parse(localStorage.getItem('varcrust')) ? JSON.parse(localStorage.getItem('varcrust')) :'',
            price : JSON.parse(localStorage.getItem('price')) ? JSON.parse(localStorage.getItem('price')) :''
        }
    }
    componentDidMount(){
        this.getData()
    }

    getData = async()=>{
        try{
            const response = await client.getEntries({'content_type':'foodWebsite'})
            this.formatData(response.items)
        }
        catch(error){
            console.log('error detected:',error);
        }
    }
    formatData = (items) =>{
        const menu = items.map(item=>{
            const id = item.sys.id
            const image = item.fields.image.map(img =>{
                return img.fields.file.url
            })
            const food = {...item.fields, id, image}
            return food
        })
        JSON.parse(localStorage.getItem('menu')) ? console.log('') : localStorage.setItem('menu',JSON.stringify(menu))
        const categories = []
        menu.map(item=>{
            categories.push(item.category)
            return true
        })
        let pizzaList = menu.filter(item=> item.category === 'pizza')
        let uniqueCategories  = [...new Set(categories)]
        this.setState({
            menu: JSON.parse(localStorage.getItem('menu')) ? JSON.parse(localStorage.getItem('menu')) : menu,
            categories:uniqueCategories,
            pizzaList
        })
    }
    filterList = (category) =>{
        let menu = JSON.parse(localStorage.getItem('menu'))
        // let menu = this.state.menu
        let filteredMenu = menu.filter(item=> item.category === category)
        // console.log(filteredMenu);
        localStorage.setItem('filteredMenu',JSON.stringify(filteredMenu))
        this.setState({
            filteredMenu
        })
    }
    updateState = (key,value) =>{
        this.setState({
            [key]:value
        })
    }
    addToCart = (selectedItem,varsize,varcrust,itemprice) =>{
        //make a copy of selectedItem, so we wont change the value of source item
        let item = Object.assign({},selectedItem)
        let cart = this.state.cart
        item.price = itemprice
        item.orderNo = 1
        item.total = item.price * item.orderNo
        if(varsize){
            item.orderSize = varsize
        }
        if(varcrust){            
            item.orderCrust = varcrust
        }
        cart.push(item)
        localStorage.setItem('cart',JSON.stringify(cart))
        this.setState({
            cart
        },
        // console.log(this.state.cart)
        )
        this.countTotal()
    }
    removeFromCart = (item) =>{
        let cart = this.state.cart
        let newCart = cart.filter(itemList => itemList !== item)
        localStorage.setItem('cart',JSON.stringify(newCart))
        
        this.setState({
            cart:newCart
        },
        this.countTotal())
    }
    changeOrderNo =(direction , item)=>{
        let cart = this.state.cart
        let itemToChange = cart.find(itemList => itemList === item)
        itemToChange.orderNo += direction
        itemToChange.total = itemToChange.price * itemToChange.orderNo
        if(itemToChange.orderNo === 0){
            //should remove item from cart
            this.removeFromCart(itemToChange)
        }else{
            localStorage.setItem('cart',JSON.stringify(cart))
            this.setState({
                cart
            },
            this.countTotal())
        }
    }
    countTotal = ()=>{
        let cart = JSON.parse(localStorage.getItem('cart'))
        let subtotal = 0
        cart.map(item=>{
            subtotal += item.total
            return subtotal
        })
        let tax = Number(subtotal) * 0.05
        let subtotalFix = subtotal.toFixed(2)
        let total = (tax + subtotal).toFixed(2)
        localStorage.setItem('subtotal',JSON.stringify(subtotal))
        localStorage.setItem('total',JSON.stringify(total))
        localStorage.setItem('tax',JSON.stringify(tax.toFixed(2)))

        this.setState({
            subtotal:subtotalFix, tax: tax.toFixed(2), total
        })
    }
    searchKeyword = (searchedWord) =>{
        let menu = JSON.parse(localStorage.getItem('menu'))
        // let menu = this.state.menu
        var searchResult=[]
        if(searchedWord !== ''){
            searchResult = menu.filter(item=> 
            item.category.toLowerCase().includes(searchedWord.toLowerCase()) ||
            item.name.toLowerCase().includes(searchedWord.toLowerCase())
            )
        }
        this.setState({
            searchResult
        })
    }
    updateLocalStorage = (key,val) =>{
        localStorage.setItem(key,JSON.stringify(val))
        this.setState({
            [key]:val
        })
    }
    toggleWishlist = (name) =>{
        let menu = this.state.menu
        let clickedItem = menu.find(item => item.name === name)
        clickedItem.liked ? clickedItem.liked =false : clickedItem.liked = true
        localStorage.setItem('menu',JSON.stringify(menu))
        this.setState({
            menu
        })
    }
    render() {
        return (
            <mainContext.Provider value={{...this.state,
            filterList:this.filterList,
            updateState:this.updateState,
            addToCart:this.addToCart,
            removeFromCart:this.removeFromCart,
            changeOrderNo:this.changeOrderNo,
            searchKeyword: this.searchKeyword,
            updateLocalStorage:this.updateLocalStorage,
            toggleWishlist:this.toggleWishlist}}>
                {this.props.children}
            </mainContext.Provider>
        )
    }
}
export {ContextProvider , mainContext}
