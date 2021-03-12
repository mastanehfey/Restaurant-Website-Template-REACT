import React from 'react'
import {MdShoppingBasket} from 'react-icons/md'
export default function AddToCartBtn({addToCart,item,price,size,crust}) {
    return (
        <div>
            <button className="btn add-to-cart-btn" onClick={()=> addToCart(item,size,crust,price)}><MdShoppingBasket className="icon-add-to-cart-btn"/>Add to cart</button>
        </div>
    )
}
