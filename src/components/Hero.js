import React from 'react'
import Link from 'gatsby-link'

const Hero = ({title, text, video, background}) => (
    <div className="hero" style={{backgroundImage: 'url(' + background + ')'}}>
        <h1>{title}</h1>
        <p>{text}</p>
        <figure id="video" className="videoIntro">
            <video src={video} poster="img/iphoneScreen.png" autoPlay="" muted="" loop=""></video>
            <img src="img/iphone.png" alt="" />
        </figure>
    </div>
)

export default Hero