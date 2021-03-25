import React from 'react'
import HomeSlide from '../components/HomeSlide'
import HomeChiefSection from '../components/HomeChiefSection'
import SortMenu from '../components/SortMenu'
import chefIcon from '../../src/images/homepage/chef-icon.svg'
import clockIcon from '../../src/images/homepage/clock-icon.svg'
import cheeseIcon from '../../src/images/homepage/cheese-icon.svg'
export default function Home() {
    return (
        <>
            <HomeSlide />
            <div className="carousel-section-home">
            <HomeChiefSection />
            </div>
            {/* <div className="container">
                <div className="home-sort-menu">
                    <SortMenu />
                </div>
            </div> */}
            <div className="promocode-container">
                <div className="promo-form">
                    <h3>FOR 10% DISCOUNT</h3>
                    <h1>GET PROMOCODE</h1>
                    <div className="promocode-input-wrapper">
                        <input type="email" name="home-email" className="home-email-input" placeholder="Enter your Email"/>
                        <button className="send-btn-promocode">Send</button>
                    </div>
                </div>
            </div>
            <div className="home-desc-container container">
                <h1>FOODZ – RESTAURANT, PIZZA, FOOD DELIVERY WP THEME</h1>
                <div className="sidebyside-box">
                <p>Giving the pizza its unique flavor and texture is our speciality. Good sauce, right amount of cheese and great crust sets Fratello Pizza apart from other pizza joints .We have a good array of delicious pasta, subs, salads in addition to the more traditional pizzas and speciality pizzas.</p>
                <span></span>
                <p>The interior is remarkably clean and so brightly lit and shiny that it’s almost sobering.Our service is quick, efficient, and polite. Come in or call today and experience the great flavor of Food. Good sauce, right amount of cheese and great crust sets Fratello Pizza.</p>
                </div>
            </div>
            <div className="container home-features-wrapper">
                    <div className="home-features-tab">
                        <img src={clockIcon} alt="60 min Delivery"/>
                        <h3>60 min Delivery</h3>
                        <p>Blowzy red vixens fight for a quick jump</p>
                    </div>
                    <div className="home-features-tab">
                        <img src={chefIcon} alt="Best Shefs"/>
                        <h3>Best Shefs</h3>
                        <p>The quick, brown fox jumps over a lazy dog</p>
                    </div>
                    <div className="home-features-tab">
                        <img src={cheeseIcon} alt="Fresh Ingredients"/>
                        <h3>Fresh Ingredients</h3>
                        <p>My faxed joke won a pager in the cable TV quiz show</p>
                    </div>
            </div>
        </>
    )
}
