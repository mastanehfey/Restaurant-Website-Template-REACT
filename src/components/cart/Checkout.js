import React, { Component } from 'react'
import {mainContext} from '../../context'
export default class Checkout extends Component {
    static contextType = mainContext
    render() {
        const{total, subtotal, tax, cart} = this.context
        const cartItems = cart.map((item,index)=>{
            return(<tr key={index}>
                        <td><span><h4>{item.name} x {item.orderNo}</h4></span><span><h4>${(item.price*item.orderNo).toFixed(2)}</h4></span></td>
                    </tr>)
        })
        const handlePaymentMethod = (e) =>{
            const radioBtns = document.querySelectorAll('input.radiobtns-checkout')
            let targets = [...radioBtns]
            targets.map(item=>{
                item.checked = false
                let descDiv = item.nextElementSibling
                // descDiv.classList.add('height0')
                // descDiv.classList.remove('height100')
                return true
            })
            e.target.checked = true
            // e.target.nextElementSibling.classList.add('height100')
        }
        return (
            <div className="container checkout-page">
                <h1>CHECKOUT</h1>
                <div className="table-wrapper checkout-page-container">
                    <div className="checkout-form-container">
                        <h3 className="margin-bottom-3">BILLING DETAILS</h3>
                        <form className="checkout-form">
                            <div className="flexbox-input">
                                <div className="input-group firstname-input">
                                    <label htmlFor="firstname">First name*</label>
                                    <input type="text" name="firstname" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="lastname">Last name*</label>
                                    <input type="text" name="lastname" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="companyname">Company name (optional)</label>
                                <input type="text" name="companyname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="address1">Street address*</label>
                                <input type="text" name="address1" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="unitno">Apartment, suite, unit, etc. (optional) (optional)</label>
                                <input type="text" name="unitno" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="city">Town / City *</label>
                                <input type="text" name="city" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="province">Province *</label>
                                <select name="province">
                                    <option value="AB">Alberta</option>
                                    <option value="BC">British Columbia</option>
                                    <option value="MB">Manitoba</option>
                                    <option value="NB">New Brunswick</option>
                                    <option value="NL">Newfoundland and Labrador</option>
                                    <option value="NS">Nova Scotia</option>
                                    <option value="ON">Ontario</option>
                                    <option value="PE">Prince Edward Island</option>
                                    <option value="QC">Quebec</option>
                                    <option value="SK">Saskatchewan</option>
                                    <option value="NT">Northwest Territories</option>
                                    <option value="NU">Nunavut</option>
                                    <option value="YT">Yukon</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="postalcode">Postal code*</label>
                                <input type="text" name="postalcode" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phonenumber">Phone*</label>
                                <input type="phone" name="phonenumber" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email address*</label>
                                <input type="email" name="email" />
                            </div>
                            <h3 className="margin-bottom-3">ADDITIONAL INFORMATION</h3>
                            <div className="input-group">
                                <label htmlFor="notes">Order notes (optional)*</label>
                                <textarea type="text" name="notes" rows="2" placeholder="Notes about your order, e.g. special notes for delivery"/>
                            </div>
                        </form>
                    </div>
                    <div className="checkout-summary">
                    <table className="recipt-checkout-page">
                        <tbody>
                        <tr>
                            <td><h3>YOUR ORDER</h3></td>
                        </tr>
                        <tr>
                            <td className="border-bottom"><span>Product</span><span>Subtotal</span></td>
                        </tr>
                        {cartItems}
                        <tr>
                            <td className="border-top"><h3>Subtotal</h3><h3>${subtotal}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Tax</h3><h3>${tax}</h3></td>
                        </tr>
                        <tr>
                            <td  className="border-bottom"><h3>Total</h3><h3>${total}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>PAYMENT METHOD</h3></td>
                        </tr>
                        <tr>
                            <td>
                               <div className="payment-method">
                                <ul>
                                    <li className="rightlabel">
                                        <label htmlFor="payment-direct-transfer">Direct bank transfer</label>
                                        <input className="radiobtns-checkout" type="radio" name="payment-direct-transfer" id="payment-direct-transfer" onClick={(e)=>handlePaymentMethod(e)}/>
                                        <div className="payment-method-select height0">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </li>
                                    <li className="rightlabel">
                                        <label htmlFor="payment-cash-delivery">Cash on delivery</label>
                                        <input className="radiobtns-checkout" type="radio" name="payment-cash-delivery" id="payment-cash-delivery" onClick={(e)=>handlePaymentMethod(e)}/>
                                        <div className="payment-method-select">
                                            <p>Pay with cash upon delivery.</p>
                                        </div>
                                    </li>
                                </ul>   
                                <p><b>
                                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                </b></p>
                                <div>
                                    <input type="checkbox" name="payment-direct-transfer" />
                                    <label htmlFor="terms-conditions"><b>I have read and agree to the website terms and conditions *</b></label>
                                </div>
                                </div> 
                            </td>
                        </tr>
                        
                        <tr className="align-center">
                            <td className="align-center"><button className="cart-btn checkout-btn-cart-page">Place Order</button></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}
