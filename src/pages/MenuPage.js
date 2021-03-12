import React, { Component } from 'react'
import {mainContext} from '../context'
import Cart from '../components/cart/Cart'
import MenuItem from '../components/MenuItem'
export default class MenuPage extends Component {
    static contextType= mainContext
    
    render() {
        const myContext = this.context
        let {filteredMenu} = myContext
        const menuListItem = filteredMenu.map(item=>{
            return <MenuItem key={item.id} item={item}/>
        })
        return (
            <div className="page">
                <section>
                    <div className="inner-page-menu">
                        <div className="menu-page-cart">
                            <Cart />
                        </div>
                        <div className="menu-list-container">
                            {menuListItem}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}