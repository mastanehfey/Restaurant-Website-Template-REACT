import React from 'react'
import {mainContext} from '../context'
import {useContext} from 'react'
import MenuItem from './MenuItem'
export default function SortMenu() {
    const myContext = useContext(mainContext)
    let {filteredMenu,filterList} = myContext
    const changeMenu = (e,item)=>{
        let target = e.target
        const allBtnNodes = document.querySelectorAll('.food-name-btn')
        const btnArray = [...allBtnNodes]
        btnArray.map(item=>{
            item.classList.remove('active')
            return true
        })
        target.classList.add('active')
        filterList(item)
    }
    const foodItems = filteredMenu.map((item,index) =>{
        return <MenuItem item={item} key={index}/>
    })
    return (
        <div>
            <div className="food-menu-container">
                <button className="food-name-btn active" onClick={(e)=>changeMenu(e,'burger')}>Burgers</button>
                <button className="food-name-btn " onClick={(e)=>changeMenu(e,'pizza')}>Pizza</button>
                <button className="food-name-btn " onClick={(e)=>changeMenu(e,'sushi')}>Sushi</button>
                <button className="food-name-btn " onClick={(e)=>changeMenu(e,'noodles')}>Noodles</button>
            </div>
            <div className="homepage-food-menu">
                {foodItems}
            </div>
        </div>
    )
}
