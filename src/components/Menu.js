//top menu
import React from 'react'
import {Link} from 'react-router-dom'
import {MdPhoneInTalk} from 'react-icons/md'
import Navigation from './Navigation'
export default function Menu({closeMenu}) {
    return (
        <div className="menu">
            <Navigation />
            <div className="inner-menu">
            <Link to='/about'><button className="btn btn-bold" onClick={closeMenu}>About</button></Link>
            <Link to='/contact'><button className="btn btn-bold" onClick={closeMenu}>Contact</button></Link>
            </div>
            <button className="btn btn-bold phone-small-screen"><a href="tel:800 123 4567" className="valign-center"><MdPhoneInTalk className='icon'/> 1-800 123 4567</a></button>
        </div>
    )
}

