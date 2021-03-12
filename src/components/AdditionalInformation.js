import React from 'react'

export default function AdditionalInformation({product}) {
    const capitalize = (s) =>{
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    
    var iconContent=''
    if(product.maker){
        product.maker.map((item,index) =>{
            iconContent+= capitalize(item)
            if(index<product.maker.length-1){
                iconContent+= ', '
            }
            return true
        })
    }
    else{
        iconContent = ''
    }
    let allVariables = product.variables ? Object.entries(product.variables):null
    let vari=''
    if(allVariables){
        vari = allVariables.map((item,index) =>{
            let name = item[0]
            let val = item[1]
            let vals =''
            return (
                <div className="info-row" key={index}>
                    <span><b>{name}</b></span>
                    {val.map((item,index)=>{
                        vals +=item 
                        if(index<val.length-1){
                            vals += ', '
                        }  
                        return true              
                    })}
                    <span>{vals}</span>
                </div>)
        })
    }else{
        vari = ''
    }
    return (
        <div>
            <>
                {vari}
            </>
            <>
                {product.maker ? <div className="info-row"><span><b>Product Icons</b></span><span>{iconContent}</span></div> : null}
            </>
        </div>
    )
}
