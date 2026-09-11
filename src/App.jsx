import { useState, useEffect } from 'react'
import './App.css'
import heroImage from './assets/heroImage.png'
import aboutImage from './assets/AboutusPicture.png'
import logoImage from './assets/Kream&KrumbLogo.png'

// Product imports
import biscoffBrownie from './assets/kkProducts/Biscoff Brownie (box of 6 price 1400)(box of 8 price 1800).png'
import brownieCookiesBox from './assets/kkProducts/Brownie&Cookies Box 1600.jpeg'
import celebrationLog from './assets/kkProducts/Celebration log 1000.jpeg'
import classicFudge from './assets/kkProducts/Classic fudge (box of 6 price 1100)(box of 8 price 1400).png'
import nutellaBrownie from './assets/kkProducts/Nutella Brownie (box of 6 price 1400)(box of 8 price 1800).png'
import walnutBrownie from './assets/kkProducts/Walnut Brownie (box of 6 price 1400)(Box of 8 price 1800).png'
import assortedBox from './assets/kkProducts/assorted box of 6 price 1400 box of 8 price 1800.jpeg'

const products = [
  {
    id: 1,
    name: 'Classic Fudge Brownie',
    image: classicFudge,
    sizes: [
      { label: 'Box of 6', price: 1100 },
      { label: 'Box of 8', price: 1400 },
    ],
    description: 'Our signature classic — rich, dense, and impossibly fudgy. Made with premium dark chocolate and real butter, these brownies are the ones that started it all. Perfect for gifting or treating yourself.',
    details: ['Ingredients: Dark chocolate, butter, eggs, flour, sugar', 'Shelf life: 4–5 days at room temperature', 'Best served at room temperature or slightly warmed'],
  },
  {
    id: 2,
    name: 'Biscoff Brownie',
    image: biscoffBrownie,
    sizes: [
      { label: 'Box of 6', price: 1400 },
      { label: 'Box of 8', price: 1800 },
    ],
    description: 'A dreamy fusion of our fudgy brownie base swirled with creamy Biscoff spread and topped with a Biscoff crumble. Every bite has that irresistible caramelised biscuit warmth.',
    details: ['Ingredients: Dark chocolate, butter, eggs, flour, Biscoff spread, Biscoff cookies', 'Shelf life: 4–5 days at room temperature', 'Contains: Gluten, Dairy, Eggs'],
  },
  {
    id: 3,
    name: 'Nutella Brownie',
    image: nutellaBrownie,
    sizes: [
      { label: 'Box of 6', price: 1400 },
      { label: 'Box of 8', price: 1800 },
    ],
    description: 'Loaded with a generous swirl of Nutella baked right into our classic fudge base. Hazelnut lovers, this one\'s for you — gooey, chocolatey, and absolutely indulgent.',
    details: ['Ingredients: Dark chocolate, butter, eggs, flour, Nutella', 'Shelf life: 4–5 days at room temperature', 'Contains: Gluten, Dairy, Eggs, Nuts'],
  },
  {
    id: 4,
    name: 'Walnut Brownie',
    image: walnutBrownie,
    sizes: [
      { label: 'Box of 6', price: 1400 },
      { label: 'Box of 8', price: 1800 },
    ],
    description: 'Chunky roasted walnuts folded into our classic fudgy batter — giving every bite a satisfying crunch against that molten chocolate centre. A timeless combination.',
    details: ['Ingredients: Dark chocolate, butter, eggs, flour, roasted walnuts', 'Shelf life: 4–5 days at room temperature', 'Contains: Gluten, Dairy, Eggs, Tree Nuts'],
  },
  {
    id: 5,
    name: 'Brownie & Cookies Box',
    image: brownieCookiesBox,
    sizes: [
      { label: 'Box', price: 1600 },
    ],
    description: 'Can\'t choose between brownies and cookies? You don\'t have to. This mixed box brings together our fudgiest brownies and chunkiest cookies in one beautiful gift-ready package.',
    details: ['Includes: Assorted brownies + cookies', 'Shelf life: 4–5 days at room temperature', 'Great for gifting'],
  },
  {
    id: 6,
    name: 'Celebration Log',
    image: celebrationLog,
    sizes: [
      { label: 'Single Log', price: 1000 },
    ],
    description: 'A showstopping brownie log made for celebrations. Dense, fudgy, and decorated to impress — this is the centrepiece your dessert table deserves. Customisation available on request.',
    details: ['Made to order', 'Serves 6–8 people', 'Custom messages available — DM us on Instagram'],
  },
  {
    id: 7,
    name: 'Assorted Box',
    image: assortedBox,
    sizes: [
      { label: 'Box of 6', price: 1400 },
      { label: 'Box of 8', price: 1800 },
    ],
    description: 'Can\'t pick just one? This assorted box combines our most popular brownie flavours in one beautiful package — perfect for sharing. Every bite is a new favourite.',
    details: ['Includes: Assorted brownie flavours', 'Shelf life: 4–5 days at room temperature', 'Perfect for gifting or sharing'],
  },
]

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Premium Ingredients',
    subtitle: 'Only the best, always.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Handcrafted with Love',
    subtitle: 'Small batches, big happiness.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Freshly Baked',
    subtitle: 'Straight from our kitchen.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'Happiness Guaranteed',
    subtitle: 'Because you deserve it.',
  },
]

/* ── Product Detail Modal ── */
function ProductModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  // Close on backdrop click
  function handleBackdrop(e) {
    if (e.target === e.currentTarget) onClose()
  }

  // Close on Escape
  function handleKey(e) {
    if (e.key === 'Escape') onClose()
  }

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdrop}
      onKeyDown={handleKey}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      tabIndex={-1}
    >
      <div className="modal-panel">
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close product details">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Left — image */}
        <div className="modal-img-side">
          <img src={product.image} alt={product.name} className="modal-img" />
        </div>

        {/* Right — details */}
        <div className="modal-info-side">
          <h2 className="modal-name">{product.name}</h2>

          {/* Price — updates with selected size */}
          <p className="modal-price">Rs. {selectedSize.price.toLocaleString()}</p>

          {/* Size selector */}
          {product.sizes.length > 1 && (
            <div className="modal-size-section">
              <p className="modal-size-label">Select Size</p>
              <div className="modal-size-options">
                {product.sizes.map((s) => (
                  <button
                    key={s.label}
                    className={`modal-size-btn${selectedSize.label === s.label ? ' selected' : ''}`}
                    onClick={() => setSelectedSize(s)}
                    aria-pressed={selectedSize.label === s.label}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Order CTA */}
          <a
            href={`https://www.instagram.com/kream_and_krumb`}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-order-btn"
          >
            Order on Instagram
          </a>

          {/* Description */}
          <div className="modal-divider" />
          <p className="modal-description">{product.description}</p>

          {/* Details list */}
          <ul className="modal-details-list">
            {product.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [activeProduct, setActiveProduct] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-wrapper">

      {/* ── NAVBAR ── */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#home" className="logo" aria-label="Kream and Krumb Home">
            <img src={logoImage} alt="Kream and Krumb" className="logo-img" />
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#shop" className="nav-link">Shop</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="home" className="hero" aria-label="Hero section">
        <div className="hero-content">
          <p className="hero-eyebrow">RICH &bull; FUDGY &bull; IRRESISTIBLE</p>
          <h1 className="hero-heading">
            Life is Better<br />
            with <em>Brownies</em>
          </h1>
          <p className="hero-sub">
            Handcrafted with the finest ingredients,<br />
            our brownies are made to turn ordinary<br />
            moments into something special.
          </p>
          <a href="#shop" className="btn-primary">
            Shop Now <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-image-wrap">
          <img src={heroImage} alt="Decadent chocolate brownies with chocolate drizzle" className="hero-img" />
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className="features-strip" aria-label="Our promises">
        <div className="features-inner">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <p className="feature-title">{f.title}</p>
              <p className="feature-sub">{f.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="shop" className="products-section" aria-label="Our products">
        <div className="products-header">
          <p className="section-eyebrow">OUR PRODUCTS</p>
          <h2 className="section-heading">Fan Favorites</h2>
        </div>
        <div className="products-grid">
          {products.map((p) => (
            <article className="product-card" key={p.id}>
              {/* Clicking the image opens the modal */}
              <button
                className="product-img-wrap"
                onClick={() => setActiveProduct(p)}
                aria-label={`View details for ${p.name}`}
              >
                <img src={p.image} alt={p.name} className="product-img" />
              </button>
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                {/* Size buttons — small, inline, no price text */}
                <div className="product-size-pills">
                  {p.sizes.map((s) => (
                    <span key={s.label} className="product-size-pill">{s.label}</span>
                  ))}
                </div>
                <button
                  className="btn-cart"
                  onClick={() => setActiveProduct(p)}
                  aria-label={`View ${p.name} details`}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="products-note">All prices are exclusive of delivery charges.</p>
      </section>

      {/* ── OUR STORY ── */}
      <section id="about" className="story-section" aria-label="Our story">
        <div className="story-text">
          <p className="section-eyebrow">OUR STORY</p>
          <h2 className="story-heading">
            A Little Box <em>of</em><br /><em>Happiness</em>
          </h2>
          <p className="story-body">
            We started Kream &amp; Krumb with a simple dream —
            to create the most delicious, indulgent brownies
            using real ingredients and a whole lot of love.
            Every bite is a reminder that life&apos;s little moments
            are the sweetest.
          </p>
          <a href="#about" className="btn-dark">
            Our Story <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="story-image-wrap">
          <img src={aboutImage} alt="Kream and Krumb brownies — real ingredients, real happiness" className="story-img" />
          <div className="story-badge" aria-hidden="true">
            <span>Real</span>
            <span>Ingredients</span>
            <span>Real Happiness</span>
            <span className="badge-heart">♡</span>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER BANNER ── */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="cta-inner">
          <p className="cta-eyebrow">INDULGE TODAY</p>
          <h2 className="cta-heading">
            <em>Because Every Day Deserves Brownies</em>
          </h2>
          <a href="#shop" className="btn-outline">
            Shop Now <span aria-hidden="true">→</span>
          </a>
        </div>
        <span className="cta-heart" aria-hidden="true">♡</span>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <a href="#home" className="footer-brand" aria-label="Kream and Krumb Home">
            <img src={logoImage} alt="Kream and Krumb" className="logo-img" />
          </a>
          <p className="footer-tagline">Handcrafted brownies, made with love.</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>

      {/* ── PRODUCT MODAL ── */}
      {activeProduct && (
        <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}

    </div>
  )
}

export default App
