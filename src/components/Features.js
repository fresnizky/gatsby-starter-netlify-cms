import React from 'react'

const Features = ({ features }) => (
  <div className="features">
    {features.map((feature, idx) => (
      <div className="align-{align || 'right'}" key={idx}>
        <h2>{feature.title}</h2>
        <p>{feature.text}</p>
        <img src={feature.image} alt={feature.title} />
      </div>
    ))}    
  </div>
)

export default Features
