import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from './CartSlice.jsx'
import Navbar from './components/Navbar.jsx'
import { plantCategories } from './data/plants.js'

function ProductCard({ plant }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const isInCart = cartItems.some((item) => item.id === plant.id)

  const handleAddToCart = () => {
    dispatch(addItem({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      description: plant.description,
      image: plant.image,
    }))
  }

  return (
    <article className="product-card">
      <div className="product-image" style={{ '--plant-hue': `${plant.image.hue}deg` }}>
        <img src={plant.image.src} alt={plant.image.alt} />
      </div>
      <div className="product-content">
        <div className="product-heading">
          <h3>{plant.name}</h3>
          <strong>${plant.price.toFixed(2)}</strong>
        </div>
        <p>{plant.description}</p>
        <button className="add-button" type="button" onClick={handleAddToCart} disabled={isInCart}>
          {isInCart ? 'Added to Cart ✓' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}

function ProductList() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="catalog">
        <header className="catalog-header">
          <p className="eyebrow">The plant collection</p>
          <h1>Find your new favorite leaf.</h1>
          <p>Easygoing classics, natural air fresheners, and bold statement plants.</p>
        </header>

        {plantCategories.map((category) => (
          <section className="category" key={category.id} aria-labelledby={`${category.id}-heading`}>
            <div className="category-heading">
              <div>
                <span className="category-number">0{plantCategories.indexOf(category) + 1}</span>
                <h2 id={`${category.id}-heading`}>{category.name}</h2>
              </div>
              <p>{category.description}</p>
            </div>
            <div className="product-grid">
              {category.plants.map((plant) => <ProductCard plant={plant} key={plant.id} />)}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default ProductList
