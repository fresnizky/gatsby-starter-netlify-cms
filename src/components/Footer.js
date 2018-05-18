import React from 'react'

const Footer = ({ copyright, text, links }) => (
  <div className="footer">
    <h5>{text}</h5>
    <ul>
        {links.map((link, idx) => (
            <li key={idx}><a href={link.url} alt={link.text}>{link.text}</a></li>
        ))}
    </ul>
    <h6>{copyright}</h6>
  </div>
)

export default Footer
