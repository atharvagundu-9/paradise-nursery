import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../CartSlice.jsx'

function Navbar() {
  const cartCount = useSelector(selectCartCount)

  const navClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span>
          <strong>Paradise</strong>
          <small>Nursery</small>
        </span>
      </Link>

      <nav aria-label="Primary navigation">
        <NavLink className={navClass} to="/" end>Home</NavLink>
        <NavLink className={navClass} to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart" aria-label={`Cart with ${cartCount} items`}>
          <span aria-hidden="true">🛒</span>
          <span>Cart</span>
          <span className="cart-count" aria-live="polite">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
