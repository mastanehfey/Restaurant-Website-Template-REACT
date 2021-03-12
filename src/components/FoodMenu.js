import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {mainContext} from '../context'
import Pizza from '../icons/pizza-slice.svg'
import Burger from '../icons/burger.svg'
import Sushi from '../icons/sushi.svg'
import Drink from '../icons/cocktail.svg'
import Dessert from '../icons/dessert.svg'
import Steak from '../icons/steak.svg'
import Noodles from '../icons/noodles.svg'
export default function FoodMenu() {
    const myContext = useContext(mainContext)
    let {filterList} = myContext
    
    return (
        <div className='food-menu'>
            <Link to='/menu/pizza' onClick={()=>filterList('pizza')}><span className="food-icon"><img src={Pizza} alt="menu-icon"/><span>Pizza</span></span></Link>
            <Link to='/menu/burger' onClick={()=>filterList('burger')}><span className="food-icon"><img src={Burger} alt="menu-icon"/><span>Burgers</span></span></Link>
            <Link to='/menu/sushi' onClick={()=>filterList('sushi')}><span className="food-icon"><img src={Sushi} alt="menu-icon"/><span>Sushi</span></span></Link>
            <Link to='/menu/noodles' onClick={()=>filterList('noodles')}><span className="food-icon"><img src={Noodles} alt="menu-icon"/><span>Noodles</span></span></Link>
            <Link to='/menu/steaks' onClick={()=>filterList('steaks')}><span className="food-icon"><img src={Steak} alt="menu-icon"/><span>Steaks</span></span></Link>
            <Link to='/menu/desserts' onClick={()=>filterList('desserts')}><span className="food-icon"><img src={Dessert} alt="menu-icon"/><span>Desserts</span></span></Link>
            <Link to='/menu/drinks' onClick={()=>filterList('drinks')}><span className="food-icon"><img src={Drink} alt="menu-icon"/><span>Drinks</span></span></Link>
        </div>
    )
}
