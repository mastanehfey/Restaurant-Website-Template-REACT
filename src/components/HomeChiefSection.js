import React , {useEffect} from 'react'
import {mainContext} from '../context'
import {useContext} from 'react'
import chief1 from '../../src/images/homepage/chief1.jpg'
import chief2 from '../../src/images/homepage/chief2.jpg'
import leafbg from '../../src/images/homepage/leafbg.png'
import bgStripe from '../../src/images/homepage/bg-stripe.png'
import MenuItem from './MenuItem'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomeChiefSection() {
const myContext = useContext(mainContext)
let{pizzaList} = myContext
    var oldY = 0
    var direction = ''

    const changePosition = (e)=>{
        var section = document.querySelector('.chief-section-containner')
        var movingObject = document.querySelector('.moving-images-wrapper')
        var Y = window.scrollY.toFixed(0)
        var dist = Number(Y-oldY)
        if(dist>0){
            direction = 'down'
            oldY = Y-1
        }
        if(dist<0){
            direction = 'up'
            oldY = (window.scrollY + 1).toFixed(0)
        }
        //in this section images will slide up and down while scrolling
        if(window.scrollY > section.offsetTop-300 && window.scrollY<section.offsetTop+section.clientHeight-300){
            var objectTop = movingObject.offsetTop
            if(direction==='down'){
                movingObject.style.top = objectTop+5 +'px'
            }
            if(direction==='up'){
                movingObject.style.top = objectTop-10 +'px'
            }
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',changePosition)
        return()=>{
            window.removeEventListener('scroll',changePosition)
        }
    })
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1550 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1550, min: 1024 },
          items: 2
        },
        iPad: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
          },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    const carouselItems = pizzaList.map((item, index)=>{
        return  <MenuItem key={index} id={index} item={item} className="pizza-item-carousel"/>
    })
    return (
        <div className="chief-section-containner">
            <div className="chief-section-wrapper">
                <div className="image-wrapper">
                    <img className="homesection-img1" src={leafbg} alt="leafbg" />
                    <img className="homesection-img2" src={chief1} alt="chief1" />
                    
                    <div className="moving-images-wrapper">
                        <img className="homesection-img3" src={bgStripe} alt="bgStripe" />
                        <img className="homesection-img4" src={chief2} alt="chief2" />
                    </div>
                    <h2 className="chief-h2">Luis Mckay</h2>
                    <h1 className="chief-h1">"CHIEF"</h1>
                </div>
                <div className="chief-product-section">
                    <h1>WE SERVE PASSION</h1>
                    <Carousel responsive={responsive} >
                        {carouselItems}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}


