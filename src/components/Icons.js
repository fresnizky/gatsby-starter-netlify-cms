import React from 'react'
import Link from 'gatsby-link'

const Icons = ({title, items}) => (
    <div className="icons">
        {title && (<h2>{title}</h2>)}
        {items.map((icon, idx) => (
            <img key={idx} src={icon.icon} />
        ))}
    </div>
)

export default Icons