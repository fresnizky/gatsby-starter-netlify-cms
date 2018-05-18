import React from 'react'
import Link from 'gatsby-link'

const Reviews = ({reviews}) => (
    <div className="reviews">
        <img src="img/message.png" />
        {reviews.map((review, idx) => (
            <div className="review" key={idx}>
                <h2>{review.title}</h2>
                <h3>{review.user}</h3>
                <p>{review.text}</p>
            </div>
        ))}
    </div>
)

export default Reviews