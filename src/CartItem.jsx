import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from './CartSlice.jsx'
import Navbar from './components/Navbar.jsx'

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const itemCount = useSelector(selectCartCount)
  const subtotal = useSelector(selectCartTotal)
  const [checkoutMessage, setCheckoutMessage] = useState('')

  const delivery = subtotal >= 75 || subtotal === 0 ? 0 : 8
  const total = subtotal + delivery

  const handleCheckout = () => {
    setCheckoutMessage('Checkout is coming soon — your plants are saved in the cart!')
  }

  return (
    <div className="page-shell">
      <Navbar />
      <main className="cart-page">
        <header className="cart-header">
          <p className="eyebrow">Your selected plants</p>
          <h1>Shopping Cart</h1>
          <p>{itemCount} {itemCount === 1 ? 'item' : 'items'} ready to grow</p>
        </header>

        {items.length === 0 ? (
          <section className="empty-cart">
            <span aria-hidden="true">🌱</span>
            <h2>Your cart has room to grow.</h2>
            <p>Explore our collection and find a plant that feels at home.</p>
            <Link className="primary-button dark" to="/plants">Shop plants <span>→</span></Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Items in your cart">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-image" style={{ '--plant-hue': `${item.image.hue}deg` }}>
                    <img src={item.image.src} alt={item.image.alt} />
                  </div>
                  <div className="cart-item-info">
                    <div>
                      <h2>{item.name}</h2>
                      <p className="unit-price">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                        <button type="button" onClick={() => dispatch(decrementQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}>−</button>
                        <span aria-live="polite">{item.quantity}</span>
                        <button type="button" onClick={() => dispatch(incrementQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}>+</button>
                      </div>
                      <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                    </div>
                  </div>
                  <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
                </article>
              ))}
              <Link className="continue-link" to="/plants">← Continue shopping</Link>
            </section>

            <aside className="order-summary">
              <p className="eyebrow">Order summary</p>
              <h2>Total cart amount</h2>
              <dl>
                <div><dt>Subtotal ({itemCount} items)</dt><dd>${subtotal.toFixed(2)}</dd></div>
                <div><dt>Delivery</dt><dd>{delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`}</dd></div>
                <div className="summary-total"><dt>Total</dt><dd>${total.toFixed(2)}</dd></div>
              </dl>
              <button className="checkout-button" type="button" onClick={handleCheckout}>Checkout</button>
              {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
              <p className="summary-note">Free delivery on orders over $75.</p>
            </aside>
          </div>
        )}
      </main>
    </div>
  )
}

export default CartItem
