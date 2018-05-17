import React from 'react'
import Link from 'gatsby-link'

const Hero = ({title, text, video, background}) => (
    <div className="hero">
        <h1>{title}</h1>
        <p>{text}</p>
        <video src={video} autoPlay="" muted="" loop=""></video>
    </div>
)

export default Hero