import React from 'react'
import {useContext} from 'react'
import {mainContext} from '../context'
import {FaHeart} from 'react-icons/fa'
import emptyBox from '../images/empty-box.png'
export default function Wishlist() {
    const myContext = useContext(mainContext)
    let{menu,toggleWishlist} = myContext
    let favItems = menu.filter((item)=> item.liked === true)
    var singleFavItem = favItems.map((item ,index)=>{
        return(
        <div key={index} className="wishlist-item">
            <img src={item.image[0]} alt={item.name} className="tmb-image"/>
            <h3>{item.name}</h3>
            <button className="remove-btn" onClick={()=> toggleWishlist(item.name)}>X</button>
        </div>)
    })
    return (
        <div className="container wishlist-container">
        <h1>Wishlist</h1>
        <div className="fav-items-container">
        {favItems.length === 0 ? 
        <div className="notFound-page">
            <img src={emptyBox} alt='empty box' />
            <h3>The Wishlist is currently empty</h3>
            <p>Click the <FaHeart /> icons to add products</p>
        </div> 
        : <div className="wishlist-item-container">{singleFavItem}</div>
        }
            
        </div>
        </div>
    )
}
