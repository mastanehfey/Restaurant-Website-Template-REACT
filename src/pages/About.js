import React from 'react'
import BannerAbout from '../../src/images/about/about-header.jpg'
import Member1 from '../../src/images/about/team1.jpg'
import Member2 from '../../src/images/about/team2.jpg'
import Member3 from '../../src/images/about/team3.jpg'

export default function About() {
    return (
        <div className="container about-container">
            <h1>About Friendly's</h1>
            <img src={BannerAbout} alt="about us header" className="about-image"/>
           <div className="inside-wrapper-about">
                <p>
                Once upon a time, before you were born, or maybe not, cheap clothes were just, well—cheap. You bought them in nasty, bare-bones stores, and even though you looked really great—because you are so beautiful that anything looks good on you!—when people asked you where you got that amazing thing, you were inclined to shrug and say vaguely that you couldn’t remember or that it was a gift or some other bad lie.
                </p>
                <p>
                Once upon a time, before you were born, or maybe not, cheap clothes were just, well—cheap. You bought them in nasty, bare-bones stores, and even though you looked really great—because you are so beautiful that anything looks good on you!—when people asked you where you got that amazing thing, you were inclined to shrug and say vaguely that you couldn’t remember or that it was a gift or some other bad lie.
                </p>
                <div className="about-block-quote">
                    <h2>Once upon a time, before you were born, or maybe not, cheap clothes were just, well—cheap. You bought them in nasty, bare-bones stores, and even though you looked really good!</h2>
                </div>
                <div className="team-header">
                    <h2>Our fantastic team</h2>
                    <p>Once upon a time, before you were born, or maybe not, cheap clothes were just, well—cheap. You bought them in nasty.</p>
                </div>
           </div>
                <div className="team-members-wrapper">
                    <div className="team-member">
                        <img src={Member1} alt="Member 1" />
                        <h2>Michael Weight</h2>
                        <p>Kitchener</p>
                    </div>
                    <div className="team-member">
                        <img src={Member2} alt="Member 2" />
                        <h2>Michael Weight</h2>
                        <p>Kitchener</p>
                    </div>
                    <div className="team-member">
                        <img src={Member3} alt="Member 3" />
                        <h2>Michael Weight</h2>
                        <p>Kitchener</p>
                    </div>
                </div>
        </div>
    )
}
