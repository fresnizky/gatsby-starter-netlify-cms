import React from 'react'
import Link from 'gatsby-link'

const Products = ({title, description, productList}) => (
    <div className="products">
        <h2>{title}</h2>
        <p>{description}</p>
        {productList.map((product, idx) => (
            <div className="product" key={idx}>
                <img src={product.icon} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <ul>
                    {product.actions && product.actions.map((action, idx) => (
                        <li key={idx}>{action}</li>
                    ))}
                </ul>
                <p><span className="price">${product.price}</span> <span className="period">/{product.period}</span></p>
                <p className="taxes">{product.taxes}</p>
                <p className="fees">{product.fees}</p>
            </div>
        ))}
    </div>
)

export default Products