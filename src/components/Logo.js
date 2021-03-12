import React from 'react'
import CompanyLogo from '../logo.svg'

export default function Logo() {
    return (
       <>
        <img src={CompanyLogo} className="logo" alt="company logo"/>
       </>
    )
}
