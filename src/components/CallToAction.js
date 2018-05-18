import React from 'react'
import Link from 'gatsby-link'

const CallToAction = ({image, text}) => (
    <div className="callToAction">
        <img src={image} />
        <p>{text}</p>
    </div>
)

export default CallToAction