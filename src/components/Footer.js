import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {mainContext} from '../context'
import Logo from './Logo'
import {MdPhoneInTalk} from 'react-icons/md'
import {FaTwitter , FaFacebookF , FaInstagram} from 'react-icons/fa'
export default function Footer() {
    const myContext = useContext(mainContext)
    let {filterList} = myContext
    return (
        <div className="bg-dark">
            <div className="container footer">
                <div className="footer-contact">
                    <span className="logo-footer"><Logo/></span>
                    <span className="footer-phone">
                        <button className="btn btn-bold"><a href="tel:123 456 789" className="valign-center"><MdPhoneInTalk className='icon'/> 123-456-7890</a></button>
                    </span>
                    <span>555 California str, Suite 100<br/>San Francisco, CA 94107</span>
                </div>
                <div className="footer-links">
                    <div className="footer-links-section">
                        <span className='footer-title'>Our Menu</span>
                        <Link to='/menu/pizza' onClick={()=>filterList('pizza')}><span>Pizza</span></Link>
                        <Link to='/menu/burger' onClick={()=>filterList('burger')}><span>Burgers</span></Link>
                        <Link to='/menu/sushi' onClick={()=>filterList('sushi')}><span>Sushi</span></Link>
                        <Link to='/menu/steaks' onClick={()=>filterList('steaks')}><span>Steaks</span></Link>
                        <Link to='/menu/drinks' onClick={()=>filterList('drinks')}><span>Drinks</span></Link>
                    </div>
                    <div className="footer-links-section">
                        <span className='footer-title'>Pages</span>
                        <Link to='/about'><span>About</span></Link>
                        <Link to='/contact'><span>Contact</span></Link>
                        <Link to='/blog'><span>Blog</span></Link>
                        <Link to='/wishlist'><span>Wishlist</span></Link>
                    </div>
                    <div className="footer-links-section">
                        <span className='footer-title'>How we can help</span>
                        <span>Privacy Policy</span>
                        <span>Terms and conditions</span>
                        <span>FAQ</span>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <span>© Copyright 2020 Developed by Mastaneh Fey</span>
                <div className="social-media">
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><span className="social-media-item"><FaTwitter /></span></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><span className="social-media-item"><FaFacebookF /></span></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span className="social-media-item"><FaInstagram /></span></a>
                </div>
            </div>
        </div>
    )
}
