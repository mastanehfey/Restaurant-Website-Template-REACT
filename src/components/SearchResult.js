import React from 'react'
import {useContext} from 'react'
import {mainContext} from '../context'
import MenuItem from './MenuItem'

export default function SearchResult({closeModal}) {
    const myContext = useContext(mainContext)
    let {searchResult} = myContext
    const showResult = searchResult.map(item=>{
        return <span key={item.name}>
            <MenuItem item={item} closeModal={closeModal}/>
        </span>
        
    })
    return (
        <div className="container search-result-wrapper">
            {showResult}
        </div>
    )
}
