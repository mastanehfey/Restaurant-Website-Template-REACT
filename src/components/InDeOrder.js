import React from 'react'
import {FaPlus , FaMinus} from 'react-icons/fa'

export default function InDeOrder({item, changeOrderNo}) {
    return (
        <div className="counter-wrapper">
            <div className="counter-add counter-btn" onClick={()=>changeOrderNo(-1,item)}><FaMinus /></div>
            <div className="counter-number counter-btn">{item.orderNo}</div>
            <div className="counter-minus counter-btn" onClick={()=>changeOrderNo(1,item)}><FaPlus /></div>
        </div>
    )
}
