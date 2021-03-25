import React , {Component} from 'react'
import{Link} from 'react-router-dom'
import {mainContext} from '../context'
import {MdPerson , MdSearch , MdShoppingBasket} from 'react-icons/md'
import {FaHeart , FaBars , FaHome , FaChevronUp} from 'react-icons/fa'
import FoodMenu from './FoodMenu'
import Menu from './Menu'
import Logo from './Logo'
import SearchResult from './SearchResult'
export default class Navbar extends Component {
    static contextType = mainContext
    constructor(){
        super()
        this.state={
            isMenuOpen:false,
            needScroll:false
        }
    }
    toggleMenu = () =>{
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }
    checkPageHeight =()=>{
        let windowHeight = document.documentElement.clientHeight
        let rootHeight = document.getElementById('root').clientHeight
        var needScroll = false
        rootHeight - windowHeight >0 ? needScroll = true : needScroll = false
        this.setState({
            needScroll
            })
        
    }
    componentDidMount(){
        this.checkPageHeight()
        // window.addEventListener('click',()=>this.checkPageHeight())
        // const allLinks = document.querySelectorAll('a')
        // allLinks.forEach(item=>{
        //     item.addEventListener('click', ()=>this.checkPageHeight())
        // })
        var docWidth = document.documentElement.offsetWidth;
        console.log('docWidth',docWidth);
        [].forEach.call(
            document.querySelectorAll('*'),
            function(el) {
              if (el.offsetWidth > docWidth) {
                console.log(el,el.offsetWidth);
              }
            }
          );
    }
    openModal = () =>{
        const holder = document.querySelector('.search-container')
        holder.classList.add('height100')
        holder.classList.remove('height0')
        // When the modal is shown, we want a fixed body
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    }
    closeModal = () =>{
        const holder = document.querySelector('.search-container')
        holder.classList.remove('height100')
        holder.classList.add('height0')
        document.body.style.position = ''  
        const input = document.querySelector('.search-input')
        input.value = ''
    }
    render(){
        let myContext = this.context
        let {cart,total,searchKeyword,menu} = myContext
        const likedItems = menu.filter(item=> item.liked === true)
        const likedItemNo = likedItems.length
        return (
            <>
                <div className="search-container height0 search-overlay">
                    <button onClick={()=> {
                        searchKeyword('')
                        this.closeModal()
                        }} 
                        className="close-modal-btn">X</button>
                    <div className="search-box">
                    <p>What you are looking for?</p>
                    <input type="text" name="search" id="search" className="search-input" placeholder="Start typing..." onKeyUp={(e)=> searchKeyword(e.target.value)}/>
                    </div>
                    <SearchResult closeModal={this.closeModal}/>
                </div>
                <div className='navbar'>
                    <div className="bg-dark">
                        <div className='container top-menu'>
                            <button className='btn burger-menu' onClick={this.toggleMenu}><FaBars className='bar-icon'/></button>
                            <span className="menu-large-screen hidden"><Menu/></span>
                            <span className="logo-small-screen logo"><Link to='/'><Logo/></Link></span>
                            <span className="search-small-screen" onClick={()=>this.openModal()}><MdSearch className='icon'/></span>
                            <span className="login-large-screen hidden"><MdPerson className='icon'/>Login</span>
                        </div>
                    </div>
                    <div className='container second-menu hidden'>
                        <span className="logo"><Link to='/'><Logo/></Link></span>
                        <div className="second-menu-inner">
                            <span onClick={()=>this.openModal()}><MdSearch className='icon'/></span>
                            <span className="position-relative">
                                <Link to="/wishlist"><FaHeart className='icon icon-fa'/></Link>{likedItemNo !== 0 ? <span className="cart-items-number">{likedItemNo}</span> : null}
                            </span>
                            <span className="position-relative">
                                <Link to="/cart"><MdShoppingBasket className='icon'/></Link>{cart.length !== 0 ? <span><span className="cart-items-number">{cart.length}</span><span className="cart-items-total">${total}</span></span> : null}
                            </span>
                        </div>
                    </div>
                    <div className="container food-menu-large-screen hidden">
                        <FoodMenu closeMenu={this.toggleMenu}/>
                    </div>
                    <div className='container sticky-bottom-menu'>
                    <span className="sticky-bottom-menu-item"><FaHome className='icon icon-fa'/><span>Home</span></span>
                        <span className="sticky-bottom-menu-item"><MdPerson className='icon'/><span>Login</span></span>
                        <span className="sticky-bottom-menu-item position-relative">
                            <Link to="/wishlist"><FaHeart className='icon icon-fa'/></Link>{likedItemNo !== 0 ? <span className="cart-items-number">{likedItemNo}</span> : null}
                            <span>Wishlist</span>
                        </span>
                        <span className="sticky-bottom-menu-item position-relative">
                        <Link to="/cart"><MdShoppingBasket className='icon'/></Link>{cart.length !== 0 ? <span className="cart-items-number">{cart.length}</span> : null}
                            <span>Cart</span>
                        </span>
                    </div>
                    <div className={this.state.isMenuOpen ? 'collapse-menu show-menu' : 'collapse-menu'}>
                        <button className='btn close-btn-menu' onClick={this.toggleMenu}>X</button>
                        <FoodMenu closeMenu={this.toggleMenu}/>
                        <Menu closeMenu={this.toggleMenu}/>
                    </div>
                </div>
            </>
        )
    }
    
}
