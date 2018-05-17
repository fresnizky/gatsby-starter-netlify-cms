import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src="/img/dropcarwhite.png" alt="Drop Car" style={{ width: '150px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/">
          Consumer
        </Link>
        <Link className="navbar-item" to="/business">
          Business
        </Link>
        <Link className="navbar-item" to="/realestate">
          Real Estate
        </Link>
        <Link className="navbar-item" to="/media">
          Media
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
