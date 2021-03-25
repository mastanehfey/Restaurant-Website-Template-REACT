import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {mainContext} from '../../context'
import InDeOrder from '../InDeOrder'
import emptyBox from '../../images/empty-box.png'

export default function CartPage() {
    const myContext = useContext(mainContext)
    let{cart, total,tax,subtotal,removeFromCart,changeOrderNo} = myContext
    const cartItems = cart.map((item,index)=>{
        return(
            <tr key={index}>
                <td className="cart-item-td">
                    <span className="delete-btn" onClick={()=> removeFromCart(item)}><b>X</b></span>
                    <img className="cart-item-image" src={item.image[0]} alt={item.name} />
                    <h3>{item.name}</h3>
                </td>
                <td><h3>${item.price}</h3></td>
                <td><InDeOrder item={item} changeOrderNo={changeOrderNo}/></td>
                <td><h3>${item.total}</h3></td>
            </tr>
        )
    })
    return (
        <div className="container cart-page">
            <h1>CART</h1>
            {cart.length !== 0 ? 
            <div className="table-wrapper">
            <table className="table-cart-page">
                <thead>
                <tr className="borders cart-header">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody className="break-table">
                {cartItems}
                </tbody>
            </table>
            <table className="recipt-cart-page">
                <tbody>
                <tr>
                    <td><h3>Subtotal</h3></td>
                    <td><h3>${subtotal}</h3></td>
                </tr>
                <tr>
                    <td><h3>Tax</h3></td>
                    <td><h3>${tax}</h3></td>
                </tr>
                <tr>
                    <td><h3>Total</h3></td>
                    <td><h3>${total}</h3></td>
                </tr>
                <tr className="align-center">
                    <td><Link to='/checkout'><button className="cart-btn checkout-btn-cart-page">Checkout</button></Link></td>
                </tr>
                </tbody>
            </table>
        </div>:
        <div className="margin-b">
            <h3>You'r cart is empty!</h3>
            <img src={emptyBox} alt='empty box' />
        </div>    
        }
            
        </div>
    )
}
