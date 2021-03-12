import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {mainContext} from '../../context'

export default function Cart() {
    const context = useContext(mainContext)
    let {cart,removeFromCart, subtotal,tax,total} = context
    let cartItem = cart.map((item, index) =>{
        let size = item.orderSize ? item.orderSize : ''
        let crust = item.orderCrust ? ` - ${item.orderCrust}` : ''
        return(
            <div className="cart-item" key={index}>
                <span className="delete-btn" onClick={()=> removeFromCart(item)}><b>X</b></span>
                <img className="cart-item-image" src={item.image[0]} alt={item.name} />
                <div className="cart-item-detail">
                    <span><b>{item.name}</b></span>
                    <span><b>{size}{crust}</b></span>
                    <span>{item.orderNo} x ${item.price}</span>
                </div>
            </div>
        )
    })
    const totalSection = subtotal !=0 ?
    <div>
        <p><b>Subtotal:</b> ${subtotal}</p>
        <p><b>Tax:</b> ${tax}</p>
        <p><b>Total:</b> ${total}</p>
        <div>
            <Link to='/cart'><button className="cart-btn view-cart-btn">View Cart</button></Link>
            <Link to='/checkout'><button className="cart-btn checkout-btn">Checkout</button></Link>
        </div>
    </div> :
    <div>
        <p>You'r cart is empty!</p>
    </div>
    
    return (
        <div>
            <h3>Cart</h3>
            <div className="cart-wrapper">
                {cartItem}
            </div>
            {totalSection}
        </div>
    )
}
