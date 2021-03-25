import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {mainContext} from '../context'
import slide1 from '../../src/images/homepage/slide1.jpg'
import slide2 from '../../src/images/homepage/slide2.jpg'
import slide3 from '../../src/images/homepage/slide3.jpg'

import leaf11 from '../../src/images/homepage/leaf1-1.png'
import leaf12 from '../../src/images/homepage/leaf1-2.png'
import leaf13 from '../../src/images/homepage/leaf1-3.png'

import leaf21 from '../../src/images/homepage/leaf2-1.png'
import leaf22 from '../../src/images/homepage/leaf2-2.png'
import leaf23 from '../../src/images/homepage/leaf2-3.png'

import leaf31 from '../../src/images/homepage/leaf3-1.png'
import leaf32 from '../../src/images/homepage/leaf3-2.png'
import leaf33 from '../../src/images/homepage/leaf3-3.png'

import teapot from '../../src/images/homepage/teapot.png'
import pizzaslice from '../../src/images/homepage/pizzaslice.png'
import cheese from '../../src/images/homepage/cheese.png'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

export default function HomeSlide(){
    const myContext = useContext(mainContext)
    let {filterList} = myContext

    const goNextSlide = (inc) =>{
        const allSlidesNodes = document.querySelectorAll('.slide-wrapper')
        const allSlides = [...allSlidesNodes]

        const currentPic = document.querySelector('.showSlide')
        const currentId = currentPic.id
        const nextId = Number(currentId) + inc
        var nextPic = document.getElementById(nextId)
        if(nextId === 4){
            nextPic = document.getElementById(1)
        }
        else if(nextId === 0){
            nextPic = document.getElementById(3)
        }else{
            nextPic = document.getElementById(nextId)
        }

        allSlides.map(slide=>{
            slide.classList.remove('showSlide')
            slide.classList.add('transparent')
            return true
        })
        nextPic.classList.add('showSlide')
        nextPic.classList.remove('transparent')        
    }

    const mouseover = (e) =>{
        const sliderContainer = document.querySelector('.slide-container')
        let x = sliderContainer.scrollWidth
        let y = sliderContainer.scrollHeight
        let moveX = 0
        let moveY = 0
        let activeTab = document.querySelector('.showSlide')
        let leafs = activeTab.querySelectorAll('.mouse-effect-image')
        var leaf = [...leafs]
        if(e.pageX > x/2){
            moveX = -.25*x
        }
        if(e.pageX < x/2){
            moveX = +.25*x
        }
        if(e.pageY > y/2){
            moveY = -.25*y
        }
        if(e.pageY < y/2){
            moveY = +.25*y
        }
        
        leaf.map(item=>{
            let left = item.offsetLeft
            let top = item.offsetTop
            let random = Math.random()
            let moveXX = (left + random*moveX*.8).toFixed(0)
            let moveYY = (top + random*moveY*.5).toFixed(0)
            
            item.style.left = moveXX + 'px'
            item.style.top = moveYY +'px'
            return true
        })
        //folow the mouse - didnt use in the project, kept it as a sample
        
        //find mouse movement direction
        // var xDirection = "";
        // var yDirection = "";        
        // var oldX = 0;
        // var oldY = 0;
        // var distX =0
        // var distY =0
        // let obj = document.getElementById('object')
        
        // sliderContainer.addEventListener('mousemove',(e)=>{
        //     //deal with the horizontal case
        //     if (oldX < e.pageX) {
        //         xDirection = "right";
        //     } else {
        //         xDirection = "left";
        //     }
        //     //deal with the vertical case
        //     if (oldY < e.pageY) {
        //         yDirection = "down";
        //     } else {
        //         yDirection = "up";
        //     }
            
        //     distX = e.pageX - oldX
        //     distY = e.pageY - oldY
        //     oldX = e.pageX;
        //     oldY = e.pageY;

        //     var objLeftStartPoint = obj.offsetLeft
        //     var objTopStartPoint = obj.offsetTop
        //     obj.style.left = (objLeftStartPoint - .15*distX) + 'px'
        //     obj.style.top = (objTopStartPoint - .15*distY) + 'px'            
        // })
    }
    
    const mouseout = (e) =>{
        let activeTab = document.querySelector('.showSlide')
        let leafs = activeTab.querySelectorAll('.mouse-effect-image')
        var leaf = [...leafs]
        leaf.map(item=>{
            item.style.left = ''
            item.style.top = ''
            return true
        })
    }
    return (
        <div className="slide-container" onMouseOut={(e)=>mouseout(e)} onMouseEnter={(e)=>mouseover(e)}>
            <span id="object"></span>
            
            <span className="prev-slide" onClick={()=>goNextSlide(-1)}><FaChevronLeft/></span>
            <span className="next-slide" onClick={()=>goNextSlide(1)}><FaChevronRight/></span>

            <div className="slide-wrapper flipImage transparent" id='1'>
                <img src={slide1} alt="home slider" className="slider-cover-image"/>
                <div className="sliderTextContainer">
                    <div className="slide-inner-box">
                        <img src={pizzaslice} alt="japanese teapot" />
                        <h1>PEPPERONI</h1>
                        <h2>SPICY</h2>
                        <Link to='/menu/pizza' onClick={()=>filterList('pizza')}><button className="order-now-btn" onClick={()=>filterList('sushi')}>ORDER NOW</button></Link>
                    </div>
                </div>
                <img src={leaf11} alt="mouse effect leaf" className="mouse-effect-image leaf11"/>
                <img src={leaf12} alt="mouse effect leaf" className="mouse-effect-image leaf12"/>
                <img src={leaf13} alt="mouse effect leaf" className="mouse-effect-image leaf13"/>
            </div>
            <div className="slide-wrapper transparent" id='3'>
                <img src={slide2} alt="home slider" className="slider-cover-image"/>
                <div className="sliderTextContainer">
                    <div className="slide-inner-box">
                        <img src={teapot} alt="pizza pepperoni" />
                        <h1>JAPANESE TEA</h1>
                        <h2>TRADITIONAL</h2>
                        <Link to='/menu/sushi' onClick={()=>filterList('sushi')}><button className="order-now-btn" onClick={()=>filterList('sushi')}>ORDER NOW</button></Link>
                    </div>
                </div>
                <img src={leaf31} alt="mouse effect leaf" className="mouse-effect-image leaf31"/>
                <img src={leaf32} alt="mouse effect leaf" className="mouse-effect-image leaf32"/>
                <img src={leaf33} alt="mouse effect leaf" className="mouse-effect-image leaf33"/>
            </div>
            <div className="slide-wrapper showSlide flipImage" id='2'>
                <img src={slide3} alt="home slider" />
                <div className="sliderTextContainer">
                    <div className="slide-inner-box">
                        <img src={cheese} alt="cheese icon" />
                        <h1>CHOCOLATE CAKE</h1>
                        <h2>DOUBLE DELICIOUS</h2>
                        <Link to='/menu/desserts' onClick={()=>filterList('desserts')}><button className="order-now-btn" onClick={()=>filterList('sushi')}>ORDER NOW</button></Link>
                    </div>
                </div>
                <img src={leaf21} alt="mouse effect leaf" className="mouse-effect-image leaf21"/>
                <img src={leaf22} alt="mouse effect leaf" className="mouse-effect-image leaf22"/>
                <img src={leaf23} alt="mouse effect leaf" className="mouse-effect-image leaf23"/>
            </div>
        </div>
    )
}
