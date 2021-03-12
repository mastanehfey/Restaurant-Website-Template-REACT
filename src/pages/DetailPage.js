import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {mainContext} from '../context'
import vegIcon from '../images/makerveg.svg'
import spicyIcon from '../images/makerspicy.svg'
import defaultImage from '../images/pizza/pizza-bianca-1.jpg'
import {FaInfoCircle, FaHeart} from 'react-icons/fa'
import AdditionalInformation from '../components/AdditionalInformation'
import Reviews from '../components/Reviews'
import InDeOrder from '../components/InDeOrder'
import AddToCartBtn from '../components/cart/AddToCartBtn'

export default class DetailPage extends Component {
    static contextType = mainContext
    constructor(){
        super()
        this.varsize=''
        this.varcrust=''
        this.priceState = ''
        this.singleProduct = ''
        this.price =''

        this.state={
            varsize:'',
            varcrust:'',
            price:'',
            size:'',
            crust:'',
            singleProduct:'',
            defaultImage: defaultImage
        }
    }

    componentDidMount = ()=>{
        let {menu} = this.context
        const newName = this.props.match.params.name
        const singleProduct = menu.find(item => item.name === newName)
        var {variables} = singleProduct
        var size= this.props.match.params.size
        var crust= this.props.match.params.crust
        var varsize
        var varcrust
        if(variables){
            if(variables.size && variables.crust){
                varsize = variables.size
                varcrust = variables.crust
            }
            else if(variables.size && !variables.crust){
                varsize = variables.size
                varcrust = ''
            }
        }
        else{
            size = 'standard'
        }
        let price = singleProduct.price[size]
        this.setState({
            size,crust,singleProduct,varsize,varcrust,price
        })
    }

    handleVariable = (e) =>{
        const clickedItem = e.target
        const allBtns = e.target.parentNode.getElementsByTagName('button')
        const allBtnsArray = [...allBtns]
        allBtnsArray.map(item=>{
            item.classList.remove('active')
            return true
        })
        clickedItem.classList.add('active')

        let key = e.target.parentNode.classList.value
        let val = clickedItem.innerText
        if(key === 'varsize'){
        let price = this.state.singleProduct.price[val]
        this.setState({
            size: val,price
        })
        }
        else if(key === 'varcrust'){
            this.setState({
                crust: val
            })
        }
    }
    handleExtraInfo = (e,tabname) =>{
        let allBtns = document.querySelectorAll('.extra-info-btns h1')
        allBtns = [...allBtns]
        allBtns.map(btn =>{
            btn.classList.remove('active-btn')
            return true
        })
        e.target.classList.add('active-btn')
        
        const alltabs = document.querySelectorAll('.tab')
        const tabs = [...alltabs]
        tabs.map(item =>{
            item.classList.add('hidden')
            return true
        })
        const selectedTab = document.querySelector(`.${tabname}`)
        selectedTab.classList.remove('hidden')
    }
    toggleNutri = () =>{
        const chevron = document.querySelector('.chevron-home')       

        const list = document.querySelector('.nutri-list')
        if(list.classList.contains('hidden')){
            list.classList.remove('hidden')
            document.querySelector('.nutri-btn').style.paddingBottom = '1em'
            chevron.innerHTML = `&#8249;`
        }
        else{
            list.classList.add('hidden')
            document.querySelector('.nutri-btn').style.paddingBottom = 0
            chevron.innerHTML = `&#8250;`
        }
    }

    render() {
        let{description,image,name,maker,shortdesc,variables,nutritional} = this.state.singleProduct
        let productImage = image ? image[0] : null

        let {addToCart, cart,changeOrderNo,toggleWishlist,menu} = this.context

        let forFav = menu.find(item=> item.name === name)
        let isFav
        if(forFav){
            isFav = forFav.liked ? true : false
        }

        //if item is in cart hide the ADD TO CART btn
        let isInCart = cart.find(cartItem => {
            if(!cartItem.orderSize && !cartItem.orderCrust){
                return cartItem.name === name
            }else if(cartItem.orderSize && !cartItem.orderCrust){
                return cartItem.name === name && cartItem.orderSize === this.state.size
            }
            else if(cartItem.orderSize && cartItem.orderCrust){
            return cartItem.name === name && cartItem.orderSize === this.state.size && cartItem.orderCrust === this.state.crust
            }
            return true
        })
        var hideAddBtn = false   
        if(isInCart){
            hideAddBtn = true
        }else{
            hideAddBtn = false
        }

        const nutriList = nutritional ? nutritional.map((item,index)=>{
            return <span key={index} className="nutri-item">{item}</span>
        }) :  null

        const makerLits = maker ? maker.map((item,index)=>{
            let icon =''
            switch (item) {
                case 'spicy':
                    icon = spicyIcon
                    break;
                case 'vegeterian':
                    icon = vegIcon
                    break;
                default:
                    icon=''
                    break;
            }
            return <span key={index} className="maker-icon">
                <img src={icon} alt={`icon${icon}`}/> 
                </span>
        }) : null

        var shortDescription =''
        if(shortdesc){
            shortdesc.map((item,index)=>{
                shortDescription += item
                if(index < shortdesc.length-1){
                    shortDescription += ', '
                }
                return true
            })
        }else{
            return null
        }

        let allVariables = variables ? Object.entries(variables):null
        
        const vari = allVariables ? allVariables.map((item,index) =>{
            let name = item[0]
            let val = item[1]
            return (<div className={`var${name}`} key={index}>
                {val.map((item,index)=>{
                    if(name==='size'){
                        var activateBtn = item === this.state.size ? 'active' : ''
                    }else if(name==='crust'){
                        var activateBtn = item === this.state.crust ? 'active' : ''
                    }
                    return <button className={`btn variable-btn ${activateBtn}`} key={index} onClick={(e)=> this.handleVariable(e)}>{item}</button>
                })}
            </div>)
        }) : null

        return (
            <div className="container">
                <div className="single-food-wrapper">
                    <img src={productImage} alt={name}/>
                    <div className="single-food-detail">
                        <h1>{name}</h1>
                        <div className="maker-icon-container align-center">{makerLits}</div>
                        <div className="menu-item-shortdesc">
                            {shortDescription}
                        </div>
                        <div className={nutritional ? `nutri-btn-wrapper` : `hidden`} onClick={(e)=>this.toggleNutri(e)}>
                        <span className={`nutri-btn`}><FaInfoCircle className="color-gray"/>Nutritional Facts<span className="chevron-home">&#8250;</span>
                        </span>
                        <span className="nutri-list hidden">{nutriList}</span>
                        </div>
                        <div>{vari}</div>
                        <div className="price-holder p-0">
                            <h2>${this.state.price}</h2>
                        </div>    
                        <div className="add-to-cart-wrapper">
                            <div className="inside-wrapper">
                            {hideAddBtn ? 
                            <InDeOrder 
                            item={isInCart} 
                            changeOrderNo={changeOrderNo}/>:
                            <div className="add-to-cart-btn-wrapper">
                            <AddToCartBtn 
                            addToCart={addToCart} 
                            item={this.state.singleProduct} 
                            price={this.state.price}
                            size={this.state.size}
                            crust={this.state.crust}/>
                            </div>}  
                                
                            </div>
                            <Link to='/cart'><button className="cart-btn view-cart-btn-detail-page">View Cart</button></Link>
                            <div className={isFav ? 'wishlist-round-btn red' : 'wishlist-round-btn'} onClick={()=> toggleWishlist(name)}><FaHeart /></div>
                        </div>
                    </div>
                </div>
                <div className="single-food-bottom-wrapper">
                    <div className="extra-info-btns">
                        <h1 className="active-btn" onClick={(e)=> this.handleExtraInfo(e, 'desc-tab')}>Description</h1>
                        <h1 className={variables ? '' : 'hidden'} onClick={(e)=> this.handleExtraInfo(e,'additio-tab')}>Additional Information</h1>
                        <h1 onClick={(e)=> this.handleExtraInfo(e,'reviews-tab')}>Reviews</h1>
                    </div>
                    <div className="extra-info-container">
                        <div className="tab description-content desc-tab">{description}</div>
                        <div className="tab additional-info-content hidden additio-tab"><AdditionalInformation product={this.state.singleProduct}/></div>
                        <div className="tab reviews-content hidden reviews-tab"><Reviews /></div>
                    </div>
                </div>
            </div>
        )
    }
}


