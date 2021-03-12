import React , {Component} from 'react'
import {mainContext} from '../context'
import {Link} from 'react-router-dom'
import { FaInfoCircle, FaWindowClose, FaHeart, FaChevronLeft, FaChevronRight ,FaTimes,FaSearch} from 'react-icons/fa'
import vegIcon from '../images/makerveg.svg'
import spicyIcon from '../images/makerspicy.svg'
import {MdSearch} from 'react-icons/md'
import defaultImage from '../images/pizza/pizza-bianca-1.jpg'
import InDeOrder from './InDeOrder'
import AddToCartBtn from '../components/cart/AddToCartBtn'
export default class MenuItem extends Component {
    static contextType= mainContext
    constructor(props){
        super(props)
        this.state={
            varsize:'',
            varcrust:'',
            price:'',
            size:[],
            images:[],
            defaultImage: defaultImage
        }
    }
    componentDidMount(){
        const newlyContext = this.context
        var {updateLocalStorage} = newlyContext
        //set default var size and var crust
        var defaultPrice
        var defaultCrust
        var defaultSize
        if(this.props.item.variables){
            defaultCrust = this.props.item.variables.crust? this.props.item.variables.crust[0] : ' '
            defaultSize = this.props.item.variables.size ? this.props.item.variables.size[0] : ' '
            defaultPrice = this.props.item.price[defaultSize]
        }
        else{
            defaultPrice = this.props.item.price['standard']
            defaultCrust =' '
            defaultSize= ' '
        }
        this.setState({
            varsize: defaultSize,
            varcrust: defaultCrust,
            price: defaultPrice
        },updateLocalStorage('varsize',defaultSize),
        updateLocalStorage('varcrust',defaultCrust),
        updateLocalStorage('price',defaultPrice))
    }
    handleVariable = (e) =>{
        const newContext = this.context
        var {updateLocalStorage} = newContext
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
        //change the price base on the size
        if(key === 'varsize'){
        var price = this.props.item.price[val]
        updateLocalStorage('price',price)
        this.setState({
            price
        })
        }
        this.setState({
            [key]:val
        },updateLocalStorage(key,val))
    }
    toggleNutritionalFact = (e) =>{
        const target = e.target
        const parent = target.closest('.maker-icon-container')
        const box = parent.querySelector('.nutritionalFact-container')
        
        if(box.classList.contains('hidden')){
            box.classList.remove('hidden')
            box.classList.add('flex')
        }
        else if(box.classList.contains('flex')){
            box.classList.remove('flex')
            box.classList.add('hidden')
        }
    }
    openOverlay = ()=>{
        let overlay = document.querySelector('.overlay')
        overlay.classList.remove('hidden')
        
    }
    closeOverlay = () =>{
        let overlay = document.querySelector('.overlay')
        overlay.classList.add('hidden')
    }
    toggleZoom = () =>{
        let image = document.querySelector('.food-large-image')
        if(image.classList.contains('zoomIn')){
            image.classList.remove('zoomIn')
            image.style.transform = 'scale(1)'
        }else{
            image.classList.add('zoomIn')
            image.style.transform = 'scale(1.3)'
        }
    }
    nextImage = (images) =>{
        let currentImage = document.querySelector('.food-large-image').src
        let imgSrc = currentImage.substr(5,currentImage.length)
        let currentIndex = images.findIndex(src => src === imgSrc)
        if(images[currentIndex+1]){
        let newSrc = images[currentIndex+1]
        document.querySelector('.food-large-image').src = newSrc
        }
        else{
            return null
        }
    }
    prevImage = (images) =>{
        let currentImage = document.querySelector('.food-large-image').src
        let imgSrc = currentImage.substr(5,currentImage.length)
        let currentIndex = images.findIndex(src => src === imgSrc)
        if(images[currentIndex-1]){
        let newSrc = images[currentIndex-1]
        document.querySelector('.food-large-image').src = newSrc
        }
        else{
            return null
        }
    }
    render(){
        const myContext = this.context
        let {currentProduct, updateState, addToCart,cart,changeOrderNo, toggleWishlist,menu} = myContext
        let{name,maker, image, shortdesc,variables,nutritional} = this.props.item
        let forFav = menu.find(item=> item.name === name)
        let isFav
        if(forFav){
            isFav = forFav.liked ? true : false
        }
        //if item is in cart hide the ADD TO CART btn
        let isInCart = cart.find(cartItem => {
            if(!cartItem.orderSize && !cartItem.orderCrust){
                return cartItem.name === this.props.item.name
            }else if(cartItem.orderSize && !cartItem.orderCrust){
                return cartItem.name === this.props.item.name && cartItem.orderSize === this.state.varsize
            }
            else{
            return cartItem.name === this.props.item.name && cartItem.orderSize === this.state.varsize && cartItem.orderCrust === this.state.varcrust
            }
        }) 
         
        var hideAddBtn = '' 
             
        if(isInCart){
            hideAddBtn = true
        }else{
            hideAddBtn = false
        }

        const nutriList = nutritional ? nutritional.map((item,index)=>{
            return <span key={index}>{item}</span>
        }) :  null
        
        const productImage = currentProduct.image ?currentProduct.image[0] : this.state.defaultImage
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
        shortdesc.map((item,index)=>{
            shortDescription += item
            if(index < shortdesc.length-1){
                shortDescription += ', '
            }
            return true
        })
        let allVariables = variables ? Object.entries(variables):null
        const vari = allVariables ? allVariables.map((item,index) =>{
            let name = item[0]
            let val = item[1]
            return (<div className={`var${name}`} key={index}>
                {val.map((item,index)=>{
                    return <button className={index === 0 ? "btn variable-btn active" : "btn variable-btn"} key={index} onClick={(e)=> this.handleVariable(e)}>{item}</button>
                })}
            </div>)
        }) : null
        return (
            <>
                <div className="overlay hidden">
                    <div className="overlay-icons-container">
                        <span className="overlay-icon" onClick={()=> this.toggleZoom()}><FaSearch /></span>
                        <span className="overlay-icon" onClick={()=> this.closeOverlay()}><FaTimes /></span>
                    </div>
                    <div className="product-image-center" >
                    <img className="food-large-image" src={productImage} alt={name} />
                    </div>
                    <span className="overlay-icon left-icon"><FaChevronLeft onClick={()=> this.prevImage(currentProduct.image)}/></span>
                    <span className="overlay-icon right-icon"><FaChevronRight onClick={()=> this.nextImage(currentProduct.image)}/></span>
                </div>
                
                <div className="menu-item-container">
                <Link to={`/detail/${name}/${this.state.varsize}/${this.state.varcrust}`}><img src={image[0]} alt={name} onClick={this.props.closeModal ? this.props.closeModal : null}/></Link>
                <div className="image-hover-icon zoom-like-package">
                    <span><MdSearch className='icon' onClick={()=> {updateState('currentProduct',this.props.item)
                this.openOverlay()}}/>
                        </span>
                    <span onClick={()=>toggleWishlist(name)}><FaHeart className={isFav ? 'icon red' : 'icon'}/></span>
                </div>
                <h3 className="menu-item-title">{name}</h3>
                <div className="maker-icon-container">
                    {makerLits}
                    <FaInfoCircle className={nutritional ? "info-icon" : 'hidden'} onClick={(e)=>this.toggleNutritionalFact(e)}/>
                    <div className="nutritionalFact-container hidden">
                        <div className='span-box'>
                            <button className="btn close-nutri-btn" onClick={this.toggleNutritionalFact}>
                                <FaWindowClose />
                            </button>
                            <span className="nutri-title">Nutritional Facts</span>
                            {nutriList}
                        </div>
                    </div>
                </div>
                <div className="menu-item-shortdesc">
                    {shortDescription}
                </div>
                <div>{vari}</div>
                <div className="price-holder">
                    <span>${this.state.price}</span>
                </div>
                <div className="btn-holder">
                    {hideAddBtn ? 
                    <InDeOrder 
                    item={isInCart} 
                    changeOrderNo={changeOrderNo}/> :
                    <AddToCartBtn 
                    addToCart={addToCart} 
                    item={this.props.item}
                    price={this.state.price}
                    size={this.state.varsize}
                    crust={this.state.varcrust}/>
                    }                    
                </div>
            </div>
            </>
        )
    }
   
}
