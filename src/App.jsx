import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import ProductList from './ProductList.jsx'
import CartItem from './CartItem.jsx'
import './App.css'

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-kicker">Plants picked for real homes</p>
          <h1>Paradise<br />Nursery</h1>
          <p className="hero-copy">
            Bring your space to life with houseplants chosen for beauty, health, and
            easy everyday care.
          </p>
          <Link className="primary-button" to="/plants">Get Started <span>→</span></Link>
        </div>
        <div className="hero-note" aria-label="Free delivery offer">
          <strong>Free delivery</strong>
          <span>on orders over $75</span>
        </div>
      </section>
      <AboutUs />
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App
