//top menu
import React from 'react'
import {Link} from 'react-router-dom'
import {MdPhoneInTalk} from 'react-icons/md'
import {FaTwitter , FaFacebookF , FaInstagram} from 'react-icons/fa'
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
            <div className="social-media social-media-container-small">
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><span className="social-media-item"><FaTwitter /></span></a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><span className="social-media-item"><FaFacebookF /></span></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span className="social-media-item"><FaInstagram /></span></a>
            </div>
        </div>
    )
}

