import React from 'react'

const ContactFooter = ({ contactIcons, socialIcons, text, title1, title2 }) => (
  <div className="contactFooter">
    <h2>{title1}</h2>
    <div className="contactIcons">
        {contactIcons.map((item, idx) => (
            <a href={item.url || '#'} key={idx}><img src={item.icon} /></a>
        ))}
    </div>
    <div className="socialIcons">
        {socialIcons.map((item, idx) => (
            <a href={item.url} key={idx}><img src={item.icon} /></a>
        ))}
    </div>
    <p>{text}</p>
    <h3>{title2}</h3>
  </div>
)

export default ContactFooter
