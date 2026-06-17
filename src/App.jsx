import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./App.css";

import logo from "./assets/logo.jpeg";
import heroBanner from "./assets/mrudu-hero-banner.png";

import bodyCard from "./assets/body-card.png";
import faceCard from "./assets/face-card.png";
import hairCard from "./assets/hair-card.png";

import bodyRitualHero from "./assets/body-ritual-collection.png";
import faceRitualHero from "./assets/face-ritual-collection.png";
import hairRitualHero from "./assets/hair-ritual-collection.png";

import goldenUbtan from "./assets/golden-ubtan.png";
import mangoBodyButter from "./assets/mango-body-butter.jpeg";
import cloudMeltCream from "./assets/cloud-melt-cream.jpeg";

import shataDautaGhrita from "./assets/shata-dauta-ghrita.png";
import blackRiceCleansingPowder from "./assets/black-rice-cleansing-powder.jpeg";

import rosemaryHairElixir from "./assets/rosemary-hair-elixir.jpeg";
import hairWashPowder from "./assets/hair-wash-powder.png";

import ourStoryImage from "./assets/our-story.png";
import avarampooImg from "./assets/Avarampoo img.jpeg";
import licoriceImg from "./assets/licorice img.jpeg";
import vetiverImg from "./assets/vetiver img.jpeg";
import blackRiceImg from "./assets/blackrice img.jpeg";

import mangoImg from "./assets/mango img.jpeg";
import sheaImg from "./assets/shea nuts img.jpeg";
import cocoaImg from "./assets/cocoa beans img.jpeg";
import almondImg from "./assets/almonds img.jpeg";
import aloeImg from "./assets/aloevera img.jpeg";
import oatsImg from "./assets/oats img.jpeg";
import chamomileImg from "./assets/chamomile img.jpeg";
import calendulaImg from "./assets/calendula img.jpeg";

import whiteLotusImg from "./assets/white lotus img.jpeg";
import blueLotusImg from "./assets/blue lotus img.jpeg";
import saffronImg from "./assets/saffron img.jpeg";
import roseImg from "./assets/roseflower img.jpeg";

import rosemaryImg from "./assets/rosemary img.jpeg";
import bhringrajImg from "./assets/bhringraj img.jpeg";
import amlaImg from "./assets/amla img.jpeg";
import brahmiImg from "./assets/brahmi img.jpeg";

import shikakaiImg from "./assets/shikakai img.jpeg";
import soapnutImg from "./assets/soapnut img.jpeg";
import hibiscusImg from "./assets/hibiscus img.jpeg";



const products = [
  {
    slug: "golden-ubtan",
    image: goldenUbtan,
    name: "GOLDEN UBTAN",
    subtitle: "Body Cleansing Ritual",
    old: 899,
    offer: 719,
    size: "250g",
  },
  {
    slug: "mango-body-butter",
    image: mangoBodyButter,
    name: "MANGO BODY BUTTER",
    subtitle: "Rich Body Moisturiser",
    old: 1099,
    offer: 879,
    size: "200g",
  },
  {
    slug: "cloud-melt-cream",
    image: cloudMeltCream,
    name: "CLOUD MELT CREAM",
    subtitle: "Soft Body Cream",
    old: 999,
    offer: 799,
    size: "200g",
  },
];

const faceProducts = [
  {
    slug: "shata-dhauta-ghrita",
    image: shataDautaGhrita,
    name: "SHATA DAUTA GHRITA",
    subtitle: "Night Repair Cream",
    old: 1199,
    offer: 959,
    size: "100g",
  },
  {
   slug: "black-rice-cleansing-powder",
    image: blackRiceCleansingPowder,
    name: "BLACK RICE CLEANSING POWDER",
    subtitle: "Face Cleansing Powder",
    old: 899,
    offer: 719,
    size: "100g",
  },
];

const hairProducts = [
  {
    slug: "rosemary-hair-elixir",
    image: rosemaryHairElixir,
    name: "ROSEMARY HAIR ELIXIR",
    subtitle: "Scalp & Hair Oil",
    old: 999,
    offer: 799,
    size: "100ml",
  },
  {
    slug: "hair-wash-powder",
    image: hairWashPowder,
    name: "HAIR WASH POWDER",
    subtitle: "Herbal Hair Cleanser",
    old: 899,
    offer: 719,
    size: "250g",
  },
];
const featuredProducts = [
  {
    image: mangoBodyButter,
    name: "MANGO BODY BUTTER",
    subtitle: "Rich Body Moisturiser",
    old: 1099,
    offer: 879,
    size: "200g",
  },

  {
    image: cloudMeltCream,
    name: "CLOUD MELT CREAM",
    subtitle: "Soft Body Cream",
    old: 999,
    offer: 799,
    size: "200g",
  },

  {
    image: shataDautaGhrita,
    name: "SHATA DHAUTA GHRITA",
    subtitle: "Night Repair Cream",
    old: 1199,
    offer: 959,
    size: "100g",
  },

  {
    image: blackRiceCleansingPowder,
    name: "BLACK RICE CLEANSING GRAINS",
    subtitle: "Face Cleansing Powder",
    old: 899,
    offer: 719,
    size: "100g",
  },

  {
    image: rosemaryHairElixir,
    name: "ROSEMARY HAIR ELIXIR",
    subtitle: "Scalp & Hair Oil",
    old: 999,
    offer: 799,
    size: "100ml",
  },

  {
    image: hairWashPowder,
    name: "HAIR WASH POWDER",
    subtitle: "Herbal Hair Cleanser",
    old: 899,
    offer: 719,
    size: "250g",
  },
];


function Header({ cartCount, openCart, openSearch, openWishlist, wishlistCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="offer-bar">
        ✦ FIRST 50 ORDERS GET 20% OFF ✦ LAUNCH OFFER ✦ BEAUTY PRESERVED THROUGH TIME ✦
      </div>

      <header className="navbar">

        <div className="mobile-nav-top">
          <Link to="/">
            <img src={logo} alt="MRUDU" className="nav-logo" />
          </Link>

          <div className="mobile-actions">

            <button className="icon-btn" onClick={openSearch}>
              ⌕
            </button>

            <button
              className="icon-btn wishlist-nav"
              onClick={openWishlist}
            >
              ♡ <b>{wishlistCount}</b>
            </button>

            <button className="cart-btn" onClick={openCart}>
              🛍 <b>{cartCount}</b>
            </button>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>
        </div>

        <nav className={menuOpen ? "nav-open" : ""}>
  <Link to="/" onClick={() => setMenuOpen(false)}>
    Home
  </Link>

  <Link to="/body" onClick={() => setMenuOpen(false)}>
    Body Rituals
  </Link>

  <Link to="/hair" onClick={() => setMenuOpen(false)}>
    Hair Rituals
  </Link>

  <Link to="/face" onClick={() => setMenuOpen(false)}>
    Face Rituals
  </Link>

  <a href="/#story" onClick={() => setMenuOpen(false)}>
    Our Story
  </a>

  <Link to="/contact" onClick={() => setMenuOpen(false)}>
    Contact
  </Link>
</nav>

        <div className="nav-icons desktop-icons">
          <button className="icon-btn" onClick={openSearch}>
            ⌕
          </button>

          <button
            className="icon-btn wishlist-nav"
            onClick={openWishlist}
          >
            ♡ <b>{wishlistCount}</b>
          </button>

          <button className="cart-btn" onClick={openCart}>
            🛍 <b>{cartCount}</b>
          </button>
        </div>

      </header>
    </>
  );
}

function CartDrawer({ cart, setCart, isOpen, closeCart, increaseQty, decreaseQty }) {
  const total = cart.reduce((sum, item) => sum + item.offer * (item.qty || 1), 0);

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handlePayment = async (amount) => {
    try {
      const res = await fetch("https://mrudu-naturals-production.up.railway.app/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      if (!order.id) {
        alert("Order creation failed");
        return;
      }

      const options = {
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: "MRUDU",
        description: "MRUDU Ritual Purchase",
        order_id: order.id,

        handler: async function (response) {
          const saveRes = await fetch("https://mrudu-naturals-production.up.railway.app/save-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              customer,
              cart,
              total,
              paymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
            }),
          });

          const savedOrder = await saveRes.json();

          setCart([]);
          closeCart();

          window.location.href = `/success?orderId=${savedOrder.orderId}`;
        },

        theme: {
          color: "#7c2432",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log("Payment Error:", error);
      alert("Payment Failed: " + error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cart-drawer">
      <button className="cart-close" onClick={closeCart}>×</button>
      <h2>Your Ritual Bag</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.subtitle}</p>
                <strong>₹{item.offer}</strong>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.name)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.name)}>+</button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">Total: ₹{total}</div>

          {!showCheckoutForm && (
            <button className="checkout-btn" type="button" onClick={() => setShowCheckoutForm(true)}>
              Checkout
            </button>
          )}

          {showCheckoutForm && (
            <div className="checkout-form">
              <h3>Shipping Details</h3>

              <input placeholder="Full Name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
              <input placeholder="Phone Number" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
              <input placeholder="Email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
              <textarea placeholder="Full Address" value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} />
              <input placeholder="City" value={customer.city} onChange={(e) => setCustomer({ ...customer, city: e.target.value })} />
              <input placeholder="State" value={customer.state} onChange={(e) => setCustomer({ ...customer, state: e.target.value })} />
              <input placeholder="Pincode" value={customer.pincode} onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })} />

              <button
                className="checkout-btn"
                type="button"
                onClick={() => {
                  if (!customer.name || !customer.phone || !customer.email || !customer.address || !customer.city || !customer.state || !customer.pincode) {
                    alert("Please fill all shipping details");
                    return;
                  }

                  handlePayment(total);
                }}
              >
                Pay ₹{total}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
function SearchDrawer({ isOpen, closeSearch, searchTerm, setSearchTerm }) {
  const allProducts = [...products, ...faceProducts, ...hairProducts];

  const filteredProducts = allProducts.filter((product) => {
  const name = product?.name || "";
  const subtitle = product?.subtitle || "";
  const term = searchTerm || "";

  return (
    name.toLowerCase().includes(term.toLowerCase()) ||
    subtitle.toLowerCase().includes(term.toLowerCase())
  );
});

  if (!isOpen) return null;

  return (
    <div className="cart-drawer">
      <button className="cart-close" onClick={closeSearch}>×</button>
      <h2>Search Rituals</h2>

      <input
        className="search-input"
        placeholder="Search Suvarna, Oil, Butter..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm.trim() === "" && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Start typing to search rituals...
        </p>
      )}

      {searchTerm.trim() !== "" && filteredProducts.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No rituals found.
        </p>
      )}

      {searchTerm.trim() !== "" &&
        filteredProducts.map((item) => (
          <Link
            to={products.find((p) => p.name === item.name) ? "/body#products" : "/face#face-products"}
            className="search-result"
            key={item.name}
            onClick={closeSearch}
          >
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.subtitle}</p>
              <strong>₹{item.offer}</strong>
            </div>
          </Link>
        ))}
    </div>
  );
}

  function WishlistDrawer({ wishlist, isOpen, closeWishlist, addToCart }) {
    if (!isOpen) return null;

    return (
      <div className="cart-drawer">
        <button className="cart-close" onClick={closeWishlist}>×</button>
        <h2>Your Wishlist</h2>

        {wishlist.length === 0 ? (
          <p>No products wishlisted yet.</p>
        ) : (
          wishlist.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.subtitle}</p>
                <strong>₹{item.offer}</strong>
                <button onClick={() => addToCart(item)}>Add To Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  
  function RitualTicker() {
  return (
    <div className="ritual-ticker">
      <div className="ritual-track">
        <span>Crafted With Care</span>
        <span>✦</span>
        <span>Rooted In Heritage</span>
        <span>✦</span>
        <span>Pure Ingredients</span>
        <span>✦</span>
        <span>Time-Honoured Rituals</span>
        <span>✦</span>
        <span>Beauty Preserved Through Time</span>
        <span>✦</span>
        <span>Crafted With Care</span>
        <span>✦</span>
        <span>Rooted In Heritage</span>
      </div>
    </div>
  );
}


  function HomePage({
    cart,
    setCart,
    addToCart,
    cartOpen,
    setCartOpen,
    increaseQty,
    decreaseQty,
    searchOpen,
    setSearchOpen,
    wishlistOpen,
    setWishlistOpen,
    searchTerm,
    setSearchTerm,
    wishlist,
    toggleWishlist,
  }) {
    const navigate = useNavigate();

    const heroSlides = [
  {
    image: heroBanner,
    button: "EXPLORE COLLECTION",
    action: "chapters",
    className: "mrudu-main-slide",
  },
];
    useEffect(() => {
  heroSlides.forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
  });
}, [heroSlides]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

    const heroClick = () => {
      const action = heroSlides[currentSlide].action;
      if (action.startsWith("/")) navigate(action);
      else document.getElementById(action)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className="page">
        <Header
          cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
          openCart={() => setCartOpen(true)}
          openSearch={() => setSearchOpen(true)}
          openWishlist={() => setWishlistOpen(true)}
          wishlistCount={wishlist.length}
        />

 <section className="hero-wrap" id="home">
  <div className="hero-frame">
    <img
      src={heroSlides[currentSlide].image}
      alt="MRUDU Hero"
      className="hero-image"
    />
  </div>
</section>

<div className="ritual-ticker">
  <div className="ritual-track">
    <span>Crafted With Care</span>
    <span>✦</span>
    <span>Rooted In Heritage</span>
    <span>✦</span>
    <span>Pure Ingredients</span>
    <span>✦</span>
    <span>Time-Honoured Rituals</span>
    <span>✦</span>
    <span>Beauty Preserved Through Time</span>
    <span>✦</span>
    <span>Crafted With Care</span>
    <span>✦</span>
    <span>Rooted In Heritage</span>
  </div>
</div>

<section className="brand-strip">
  <h2>Rooted in Tradition. Made for Today.</h2>

  <div className="brand-points">
  <div><span>🌿</span>Ancient Indian<br />Botanicals</div>
  <div><span>🪔</span>Slow Crafted<br />Rituals</div>
  <div><span>✧</span>Pure & Honest<br />Ingredients</div>
  <div><span>❀</span>For Skin, Hair<br />& Body</div>
</div>
</section>

        <section className="chapters" id="chapters">
       <h2>THE COLLECTIONS</h2>
<p>Rooted in tradition. Made for today.</p>

          <div className="chapter-grid">
            <div className="chapter-card">
              <img src={bodyCard} alt="The Dawn" />
              <div className="chapter-content">
                <h3>BODY RITUALS</h3>
<p>Bath • Oil • Body Care</p>
                <button
                  onClick={() =>
                    window.open("/body", "_blank")
                  }
                >
                  SHOP BODY →
                </button>
              </div>
            </div>

            <div className="chapter-card">
              <img src={faceCard} alt="The Reflection" />
              <div className="chapter-content">
                <h3>FACE RITUALS</h3>
<p>Cleanse • Nourish • Glow</p>
                <button
                  onClick={() =>
                    window.open("/face", "_blank")
                  }
                >
                  SHOP FACE  →
                </button>
              </div>
            </div>

            <div className="chapter-card">
             <img src={hairCard} alt="Hair Rituals" />
              <div className="chapter-content">
                <h3>HAIR RITUALS</h3>
<p>Strengthen • Nourish • Revive</p>
                <button onClick={() => window.open("/hair", "_blank")}>
  SHOP HAIR →
</button>
              </div>
            </div>
          </div>
        </section>

       <section className="featured-section">
  <p className="small-title">MRUDU COLLECTION</p>

  <h2>FEATURED PRODUCTS</h2>

  <p className="featured-subtitle">
    Discover our most loved rituals across body, face and hair.
  </p>

  <div className="featured-grid">
    {featuredProducts.map((product, index) => (
      <div className="product-card" key={index}>
        <button
          className="wishlist-btn"
          onClick={() => toggleWishlist(product)}
        >
          {wishlist.find((item) => item.name === product.name)
            ? "♥"
            : "♡"}
        </button>

        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>

        <p>{product.subtitle}</p>

        <span>{product.size}</span>

        <div className="price-row">
          <del>₹{product.old}</del>
          <strong>₹{product.offer}</strong>
        </div>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    ))}
  </div>
</section> 

        <section className="story-section" id="story">
          <img src={ourStoryImage} alt="Our Story" />

          <div>
            <p className="small-title">OUR STORY</p>
            <h2>MRUDU</h2>
            <p className="story-tagline">
  Rooted in Tradition • Made for Today
</p>

<div className="story-divider"></div>
            
              <p>
MRUDU began with a simple belief —
that beauty does not need complexity.
For generations, Indian homes preserved
their own rituals through herbs, flowers,
oils and time-honoured ingredients.
</p>

<p>
We bring those traditions into the present,
creating thoughtful rituals for skin,
hair and body using ingredients inspired
by nature and crafted with care.
</p>

<p>
Not trends. Not shortcuts.
Just beauty preserved through time.
</p>
<div className="story-stats">
  <div>
    <h3>100%</h3>
    <p>Nature Inspired</p>
  </div>

  <div>
    <h3>3</h3>
    <p>Ritual Collections</p>
  </div>

  <div>
    <h3>∞</h3>
    <p>Timeless Traditions</p>
  </div>
</div>
          </div>
        </section>
        

        <Footer />
      

        <CartDrawer
  cart={cart}
  setCart={setCart}
  isOpen={cartOpen}
          closeCart={() => setCartOpen(false)}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />

        <SearchDrawer
          isOpen={searchOpen}
          closeSearch={() => setSearchOpen(false)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          addToCart={addToCart}
        />

        <WishlistDrawer
          wishlist={wishlist}
          isOpen={wishlistOpen}
          closeWishlist={() => setWishlistOpen(false)}
          addToCart={addToCart}
        />
      </div>
    );
  }

  function DawnPage({
    cart,
    setCart,
    addToCart,
    cartOpen,
    setCartOpen,
    increaseQty,
    decreaseQty,
    searchOpen,
    setSearchOpen,
    wishlistOpen,
    setWishlistOpen,
    searchTerm,
    setSearchTerm,
    wishlist,
    toggleWishlist,
  }) {
    useEffect(() => {
      if (window.location.hash === "#products") {
        setTimeout(() => {
          document.getElementById("products")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }, []);

    return (
      <div className="page">
        <Header
          cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
          openCart={() => setCartOpen(true)}
          openSearch={() => setSearchOpen(true)}
          openWishlist={() => setWishlistOpen(true)}
          wishlistCount={wishlist.length}
        />

        <section className="dawn-banner reflection-banner">
          <img src={bodyRitualHero} alt="The Dawn Body Ritual Collection" />

          <div className="dawn-banner-btn">
            <button
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Explore Body Rituals
            </button>
          </div>
       

        </section>

<RitualTicker />

<section className="products-page" id="products">
         <p className="small-title">BODY CARE COLLECTION</p>
          <h2>BODY RITUALS</h2>

          <div className="product-grid">
  {products.map((product, index) => (
    <Link
      to={`/product/${product.slug}`}
      className="product-card-link"
      key={index}
    >
      <div className="product-card">

        <button
          className="wishlist-btn"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
        >
          {wishlist.find((item) => item.name === product.name)
            ? "♥"
            : "♡"}
        </button>

        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>

        <p>{product.subtitle}</p>

        <span>{product.size}</span>

        <div className="price-row">
          <del>₹{product.old}</del>
          <strong>₹{product.offer}</strong>
        </div>

      </div>
    </Link>
  ))}
</div>
                                

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </section>

        <Footer />

        <CartDrawer
          cart={cart}
          setCart={setCart}
          isOpen={cartOpen}
          closeCart={() => setCartOpen(false)}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />

        <SearchDrawer
          isOpen={searchOpen}
          closeSearch={() => setSearchOpen(false)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          addToCart={addToCart}
        />

        <WishlistDrawer
          wishlist={wishlist}
          isOpen={wishlistOpen}
          closeWishlist={() => setWishlistOpen(false)}
          addToCart={addToCart}
        />
      </div>
    );
  }
  function ReflectionPage({
  cart,
  setCart,
  addToCart,
  cartOpen,
  setCartOpen,
  increaseQty,
  decreaseQty,
  searchOpen,
  setSearchOpen,
  wishlistOpen,
  setWishlistOpen,
  searchTerm,
  setSearchTerm,
  wishlist,
  toggleWishlist,
}) {
    return (
      <div className="page">

        <Header
          cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
          openCart={() => setCartOpen(true)}
          openSearch={() => setSearchOpen(true)}
          openWishlist={() => setWishlistOpen(true)}
          wishlistCount={wishlist.length}
        />

        <section className="dawn-banner">
          <img
            src={faceRitualHero}
            alt="The Reflection Collection"
          />

          <div className="dawn-banner-btn">
            <button
              onClick={() =>
                document
                  .getElementById("face-products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
              }
            >
              Explore Face Rituals
            </button>
          </div>
        </section>

        

<RitualTicker />

<section className="products-page" id="face-products">
  <p className="small-title">FACE CARE COLLECTION</p>

  <h2>FACE RITUALS</h2>

  <div className="product-grid">
    {faceProducts.map((product, index) => (
      <Link
        to={`/product/${product.slug}`}
        className="product-card-link"
        key={index}
      >
        <div className="product-card">

          <button
            className="wishlist-btn"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
          >
            {wishlist.find(
              (item) => item.name === product.name
            )
              ? "♥"
              : "♡"}
          </button>

          <img
            src={product.image}
            alt={product.name}
          />

          <h3>{product.name}</h3>

          <p>{product.subtitle}</p>

          <span>{product.size}</span>

          <div className="price-row">
            <del>₹{product.old}</del>
            <strong>₹{product.offer}</strong>
          </div>

        </div>
      </Link>
    ))}
  </div>

  <Link
    to="/"
    className="back-home"
  >
    ← Back to Home
  </Link>

</section>

        <Footer />

                  <CartDrawer
  cart={cart}
  setCart={setCart}
  isOpen={cartOpen}
          closeCart={() => setCartOpen(false)}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />

      </div>
    );
  }
  function HairPage({
  cart,
  setCart,
  addToCart,
  cartOpen,
  setCartOpen,
  increaseQty,
  decreaseQty,
  searchOpen,
  setSearchOpen,
  wishlistOpen,
  setWishlistOpen,
  searchTerm,
  setSearchTerm,
  wishlist,
  toggleWishlist,
}) {
  return (
    <div className="page">

      <Header
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
        openCart={() => setCartOpen(true)}
        openSearch={() => setSearchOpen(true)}
        openWishlist={() => setWishlistOpen(true)}
        wishlistCount={wishlist.length}
      />

      <section className="dawn-banner">
        <img
          src={hairRitualHero}
          alt="Hair Ritual Collection"
        />

        <div className="dawn-banner-btn">
          <button
            onClick={() =>
              document
                .getElementById("hair-products")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
            }
          >
            Explore Hair Rituals
          </button>
        </div>
     
</section>

<RitualTicker />

<section className="products-page" id="hair-products">
  <p className="small-title">HAIR CARE COLLECTION</p>

  <h2>HAIR RITUALS</h2>

  <p className="collection-description">
    Traditional hair care rituals created to strengthen roots,
    nourish strands and restore natural vitality.
  </p>

  <div className="product-grid">
    {hairProducts.map((product, index) => (
      <Link
        to={`/product/${product.slug}`}
        className="product-card-link"
        key={index}
      >
        <div className="product-card">

          <button
            className="wishlist-btn"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
          >
            {wishlist.find(
              (item) => item.name === product.name
            )
              ? "♥"
              : "♡"}
          </button>

          <img
            src={product.image}
            alt={product.name}
          />

          <h3>{product.name}</h3>

          <p>{product.subtitle}</p>

          <span>{product.size}</span>

          <div className="price-row">
            <del>₹{product.old}</del>
            <strong>₹{product.offer}</strong>
          </div>

        </div>
      </Link>
    ))}
  </div>

  <Link
    to="/"
    className="back-home"
  >
    ← Back to Home
  </Link>

</section>

      <Footer />

      <CartDrawer
        cart={cart}
        setCart={setCart}
        isOpen={cartOpen}
        closeCart={() => setCartOpen(false)}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />

      <SearchDrawer
        isOpen={searchOpen}
        closeSearch={() => setSearchOpen(false)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <WishlistDrawer
        wishlist={wishlist}
        isOpen={wishlistOpen}
        closeWishlist={() => setWishlistOpen(false)}
        addToCart={addToCart}
      />

    </div>
  );
}
  function SuccessPage() {
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get("orderId");

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>✓ Order Confirmed</h1>

        <p>Thank you for shopping with MRUDU.</p>
        <p>Your ritual has been received successfully and will be prepared with care.</p>
        <p>Confirmation email will be sent shortly. Tracking details will be shared after dispatch.</p>

        {orderId && <p className="order-id">Order ID: {orderId}</p>}

        <Link to="/">
          <button className="checkout-btn">Continue Shopping</button>
        </Link>

        <a
          href={`https://wa.me/919908895612?text=Hi%20MRUDU,%20I%20have%20placed%20an%20order${orderId ? `%20-%20${orderId}` : ""}.`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="checkout-btn">Message MRUDU on WhatsApp</button>
        </a>
      </div>
    </div>
  );
}
function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
   fetch("https://mrudu-backend.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="admin-page">
      <h1>MRUDU Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th>Total</th>
                <th>Products</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date || "-"}</td>
                  <td>{order.customer?.name || "-"}</td>
                  <td>{order.customer?.phone || "-"}</td>
                  <td>{order.customer?.email || "-"}</td>
                  <td>{order.customer?.city || "-"}</td>
                  <td>₹{order.total}</td>
                  <td>
                    {order.cart?.map((item) => (
                      <div key={item.name}>
                        {item.name} × {item.qty}
                      </div>
                    )) || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Link to="/" className="back-home">
        ← Back to Home
      </Link>
    </div>
  );
}
function ShippingPolicyPage() {
  return (
    <div className="policy-page">
      <h1>Shipping Policy</h1>

      <p>
        MRUDU currently ships across India.
      </p>

      <p>
        Orders are processed within 1-3 business days.
      </p>

      <p>
        Delivery typically takes 3-7 business days depending on location.
      </p>

      <p>
        Once dispatched, tracking details will be shared via email or phone.
      </p>
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="policy-page">
      <h1>Privacy Policy</h1>

      <p>
        MRUDU respects your privacy.
      </p>

      <p>
        Customer information collected during checkout is used only for order processing and delivery.
      </p>

      <p>
        We never sell or share customer data with third parties.
      </p>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="policy-page">
      <h1>Terms & Conditions</h1>

      <p>
        By placing an order on MRUDU, you agree to our policies.
      </p>

      <p>
        Product colours and packaging may vary slightly from images shown.
      </p>

      <p>
        MRUDU reserves the right to update pricing and policies without notice.
      </p>
    </div>
  );
}
function RefundPolicyPage() {
  return (
    <div className="policy-page">
      <h1>Refund & Cancellation Policy</h1>

      <p>Orders once placed cannot be cancelled after dispatch.</p>
      <p>Refunds or replacements are accepted only for damaged, incorrect, or missing products.</p>
      <p>Customers must contact us within 48 hours of delivery with order details and clear photos.</p>
      <p>Approved refunds will be processed to the original payment method within 5-7 business days.</p>
      <p>For support, contact hellomrudu.in@gmail.com or WhatsApp 9908895612.</p>
    </div>
  );
}
function ContactPage() {
  return (
    <div className="policy-page contact-page">
      <h1>Contact MRUDU</h1>

      <p>We would love to hear from you.</p>

      <div className="contact-box">
        <p><strong>Email:</strong> hellomrudu.in@gmail.com</p>
        <p><strong>Phone:</strong> 9908895612</p>
       <p><strong>Instagram:</strong> @themrudu</p>
        <p><strong>Business Hours:</strong> Monday - Saturday, 10 AM - 6 PM</p>
      </div>

      <a
        href="https://wa.me/919908895612"
        target="_blank"
        rel="noreferrer"
      >
        <button className="checkout-btn">Message on WhatsApp</button>
      </a>
    </div>
  );
}

  function Footer() {
    return (
      <footer className="footer" id="contact">
        <div className="footer-grid footer-clean">

          <div>
  <h4>BODY RITUALS</h4>
  <p>Golden Ubtan</p>
  <p>Mango Body Butter</p>
  <p>Cloud Melt Cream</p>
</div>

<div>
  <h4>FACE RITUALS</h4>
  <p>Shata Dhauta Ghrita</p>
  <p>Black Rice Cleansing Powder</p>
</div>

<div>
  <h4>HAIR RITUALS</h4>
  <p>Rosemary Hair Elixir</p>
  <p>Hair Wash Powder</p>
</div>
          <div>
            <h4>CONTACT MRUDU</h4>
            <p>Email: hellomrudu.in@gmail.com</p>
            <p>Phone: 9908895612</p>
            <p>Beauty preserved through time.</p>
          </div>

        </div>

        <div className="newsletter-box">
  <h4>NEWSLETTER</h4>
  <p>Stay updated with MRUDU rituals and launch offers.</p>

  <a href="mailto:hellomrudu.in@gmail.com?subject=MRUDU Newsletter Subscription&body=Hi MRUDU, please add me to your newsletter.">
    <button>Subscribe</button>
  </a>
</div>


        <div className="footer-bottom">

  <div className="footer-links">
    <Link to="/shipping-policy">Shipping Policy</Link>

    <Link to="/privacy-policy">Privacy Policy</Link>

    <Link to="/terms">Terms & Conditions</Link>

    <Link to="/contact">Contact</Link>
    <Link to="/refund-policy">Refund Policy</Link>
  </div>

  <p>
    © 2026 MRUDU. Beauty preserved through time.
  </p>

</div>
      </footer>
    );
  }
  const productDetails = {
  "golden-ubtan": {
  title: "GOLDEN UBTAN",
  image: goldenUbtan,
  price: 719,
  size: "250g",

  description:
   "A traditional body cleansing ritual crafted with brightening flowers, cooling roots, gentle grains and time-honoured herbs. This powder-to-paste ubtan helps cleanse, soften and refresh the skin while keeping the ritual slow, natural and sensory.",

  usage:
    "Mix 1-2 teaspoons with water, milk or rose water. Apply evenly on damp skin, gently massage and rinse off.",

  

   heroes: [
  { img: avarampooImg, title: "AVARAMPOO", desc: "Traditional brightening flower" },
  { img: licoriceImg, title: "LICORICE", desc: "Supports even-looking skin" },
  { img: vetiverImg, title: "VETIVER", desc: "Cooling and soothing" },
  { img: blackRiceImg, title: "BLACK RICE", desc: "Gentle exfoliation" },
],


    ingredients: `
Green Gram Powder,
Rice Powder,
Masoor Dal,
Orange Peel,
Licorice,
White Turmeric,
Kasturi Turmeric,
Manjistha,
Rose Petals,
Vetiver,
Aloe Vera,
Almond,
Hibiscus,
Avarampoo,
Tulsi,
Neem,
Sandalwood,
Anantmool,
Brahmi,
Beetroot,
Chamomile,
Calendula,
Blue Lotus,
White Lotus,
Moringa,
Gotu Kola,
Nagarmotha,
Wheatgrass
`,
  },

  "mango-body-butter": {
    title: "MANGO BODY BUTTER",
    image: mangoBodyButter,
    price: 879,
    size: "200g",
    description:
  "A rich body butter crafted with mango butter, shea butter, cocoa butter and skin-loving oils. It melts into dry skin, helps lock moisture, and leaves the body feeling soft, nourished and comforted without making the ritual feel heavy.",

usage:
  "Apply generously on clean skin and massage until fully absorbed.",

    heroes: [
  { img: mangoImg, title: "MANGO BUTTER", desc: "Deep nourishment" },
  { img: sheaImg, title: "SHEA BUTTER", desc: "Softens dry skin" },
  { img: cocoaImg, title: "COCOA BUTTER", desc: "Locks moisture" },
  { img: almondImg, title: "ALMOND OIL", desc: "Smooth finish" },
],
    ingredients: `
Mango Butter,
Shea Butter,
Cocoa Butter,
Sweet Almond Oil,
Jojoba Oil,
Vitamin E,
Arrowroot Powder,
Calendula Extract,
Chamomile Extract,
Aloe Vera Extract
`,
  },

  "cloud-melt-cream": {
    title: "CLOUD MELT CREAM",
    image: cloudMeltCream,
    price: 799,
    size: "200g",
    description:
  "A lightweight everyday body cream made for soft hydration and comfort. It blends calming botanicals with gentle moisturising ingredients to keep the skin fresh, smooth and cared for through the day.",

usage:
  "Massage onto clean skin morning and evening.",

    heroes: [
  { img: aloeImg, title: "ALOE VERA", desc: "Hydrating comfort" },
  { img: oatsImg, title: "OAT MILK", desc: "Calming care" },
  { img: chamomileImg, title: "CHAMOMILE", desc: "Soothing feel" },
  { img: calendulaImg, title: "CALENDULA", desc: "Skin softness" },
],

    ingredients: `
Aloe Vera,
Oat Milk,
Vegetable Glycerin,
Jojoba Oil,
Sweet Almond Oil,
Calendula Extract,
Chamomile Extract,
Vitamin E,
Rose Water
`,
  },

  "shata-dhauta-ghrita": {
    title: "SHATA DHAUTA GHRITA",
    image: shataDautaGhrita,
    price: 959,
    size: "100g",
    description:
  "An ancient night ritual inspired by repeatedly washed ghee, created to comfort dry, tired-looking skin. It gives a soft, nourishing finish and works beautifully as the final step of a slow night skincare routine.",

usage:
  "Apply a small amount as the final step of your night routine.",

    heroes: [
  { img: whiteLotusImg, title: "WHITE LOTUS", desc: "Softness" },
  { img: blueLotusImg, title: "BLUE LOTUS", desc: "Calming ritual" },
  { img: saffronImg, title: "SAFFRON", desc: "Radiance" },
  { img: roseImg, title: "ROSE", desc: "Comfort" },
],
    ingredients: `
Shata Dhauta Ghrita,
Saffron,
Rose,
White Lotus,
Blue Lotus,
Aloe Vera,
Calendula,
Chamomile,
Vitamin E
`,
  },

  "black-rice-cleansing-powder": {
    title: "BLACK RICE CLEANSING POWDER",
    image: blackRiceCleansingPowder,
    price: 719,
    size: "100g",
    description:
  "A gentle powder cleanser inspired by grain-based Indian rituals. Black rice, calming botanicals and soft herbs come together to cleanse without stripping, leaving the skin feeling smooth, fresh and naturally polished.",

usage:
  "Mix with water and massage onto damp skin before rinsing.",

    heroes: [
  { img: blackRiceImg, title: "BLACK RICE", desc: "Gentle polish" },
  { img: licoriceImg, title: "LICORICE", desc: "Even-looking skin" },
  { img: roseImg, title: "ROSE", desc: "Soft glow" },
  { img: vetiverImg, title: "VETIVER", desc: "Cooling care" },
],

    ingredients: `
Black Rice,
Oats,
Licorice,
Rose,
Vetiver,
Avarampoo,
White Lotus,
Blue Lotus,
Aloe Vera,
Calendula,
Chamomile,
Manjistha
`,
  },

  "rosemary-hair-elixir": {
    title: "ROSEMARY HAIR ELIXIR",
    image: rosemaryHairElixir,
    price: 799,
    size: "100ml",
    description:
  "A botanical scalp oil crafted with rosemary, bhringraj, amla and traditional hair herbs. It supports a calming scalp massage ritual while nourishing roots and helping the hair feel stronger and healthier.",

usage:
  "Massage into scalp and leave for 1-2 hours before washing.",
heroes: [
  { img: rosemaryImg, title: "ROSEMARY", desc: "Scalp vitality" },
  { img: bhringrajImg, title: "BHRINGRAJ", desc: "Root support" },
  { img: amlaImg, title: "AMLA", desc: "Hair strength" },
  { img: brahmiImg, title: "BRAHMI", desc: "Scalp care" },
],
    ingredients: `
Rosemary,
Bhringraj,
Amla,
Brahmi,
Jatamansi,
Ashwagandha,
Shankhapushpi,
Bala,
Anantmool,
Guduchi,
Gotu Kola,
Nagarmotha,
Moringa,
Tagara,
Vacha,
Kalonji,
Sesame Oil,
Coconut Oil,
Castor Oil,
Jojoba Oil,
Sweet Almond Oil
`,
  },

  "hair-wash-powder": {
    title: "HAIR WASH POWDER",
    image: hairWashPowder,
    price: 719,
    size: "250g",
    description:
  "A traditional herbal hair cleansing powder made with shikakai, reetha, amla and softening botanicals. It gently cleanses the scalp, refreshes the roots and leaves hair feeling clean, light and naturally cared for.",

usage:
  "Mix with water into a paste and massage onto wet scalp before rinsing.",

    heroes: [
  { img: shikakaiImg, title: "SHIKAKAI", desc: "Natural cleansing" },
  { img: soapnutImg, title: "REETHA", desc: "Foaming action" },
  { img: amlaImg, title: "AMLA", desc: "Hair strength" },
  { img: hibiscusImg, title: "HIBISCUS", desc: "Hair softness" },
],

    ingredients: `
Shikakai,
Reetha,
Amla,
Bhringraj,
Brahmi,
Hibiscus,
Neem,
Tulsi,
Rosemary,
Indigo Leaf,
Henna Leaf,
Karisalankanni,
Moringa,
Gotu Kola,
Licorice Root,
Anantmool,
Guduchi,
Tagara,
Vacha,
Lemongrass,
Thyme,
Guava Leaves,
Nagalinga Pushpam,
Bilva Leaf,
Wheatgrass,
Orange Peel,
Lemon Peel
`,
  },
};
function ProductDetailsPage({
  addToCart,
  cart,
  setCart,
  cartOpen,
  setCartOpen,
  increaseQty,
  decreaseQty,
}) {
  const { slug } = useParams();
  const product = productDetails[slug];
  const [showIngredients, setShowIngredients] = useState(false);

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div className="page">
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
openCart={() => setCartOpen(true)}
        openSearch={() => {}}
        openWishlist={() => {}}
        wishlistCount={0}
      />

      <section className="product-details-page">
        <div className="product-top">
          <img src={product.image} alt={product.title} className="detail-image" />

          <div className="product-info">
            <p className="small-title">MRUDU RITUAL</p>
            <h1>{product.title}</h1>

            <span className="detail-size">{product.size}</span>

            <h2>₹{product.price}</h2>

            <p className="detail-desc">{product.description}</p>

            <button
              onClick={() =>
                addToCart({
                  name: product.title,
                  image: product.image,
                  offer: product.price,
                  subtitle: product.size,
                })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>

        <h2 className="product-section-title">What's Inside</h2>

        <div className="hero-grid">
  {product.heroes.map((hero, index) => (
    <div className="hero-card" key={index}>
      {hero.img && (
        <img
          src={hero.img}
          alt={hero.title}
          className="ingredient-img"
        />
      )}

      <h3>{hero.title}</h3>
      <p>{hero.desc}</p>
    </div>
  ))}
</div>

        <button
          className="view-ingredients-btn"
          onClick={() => setShowIngredients(!showIngredients)}
        >
          {showIngredients ? "Hide Ingredient List" : "View Ingredient List"}
        </button>

        {showIngredients && (
  <div className="ingredients-modal">
    <div className="ingredients-content">
      <button
        className="ingredients-close"
        onClick={() => setShowIngredients(false)}
      >
        ×
      </button>

      <p>
        {product.ingredients
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
          .join(", ")}
      </p>
    </div>
  </div>
)}

        <div className="product-usage">
          <h2>How To Use</h2>
          <p>{product.usage}</p>
        </div>
      </section>

      <Footer />
      <CartDrawer
  cart={cart}
  setCart={setCart}
  isOpen={cartOpen}
  closeCart={() => setCartOpen(false)}
  increaseQty={increaseQty}
  decreaseQty={decreaseQty}
/>
    </div>
  );
}



  function App() {
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    const [searchOpen, setSearchOpen] = useState(false);
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.name === product.name);

        if (existing) {
          return prev.map((item) =>
            item.name === product.name
              ? { ...item, qty: (item.qty || 1) + 1 }
              : item
          );
        }

        return [...prev, { ...product, qty: 1 }];
      });

      setCartOpen(true);
    };

    const increaseQty = (name) => {
      setCart((prev) =>
        prev.map((item) =>
          item.name === name ? { ...item, qty: (item.qty || 1) + 1 } : item
        )
      );
    };

    const decreaseQty = (name) => {
      setCart((prev) =>
        prev
          .map((item) =>
            item.name === name ? { ...item, qty: (item.qty || 1) - 1 } : item
          )
          .filter((item) => item.qty > 0)
      );
    };

    const toggleWishlist = (product) => {
      setWishlist((prev) => {
        const exists = prev.find((item) => item.name === product.name);

        if (exists) {
          return prev.filter((item) => item.name !== product.name);
        }

        return [...prev, product];
      });
    };
    

    return (
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
  cart={cart}
  setCart={setCart}
  addToCart={addToCart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              wishlistOpen={wishlistOpen}
              setWishlistOpen={setWishlistOpen}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
  path="/body"
  element={
   <DawnPage
      cart={cart}
      setCart={setCart}
      addToCart={addToCart}
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
      searchOpen={searchOpen}
      setSearchOpen={setSearchOpen}
      wishlistOpen={wishlistOpen}
      setWishlistOpen={setWishlistOpen}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
    />
  }
/>

<Route
  path="/face"
  element={
    <ReflectionPage
      cart={cart}
      setCart={setCart}
      addToCart={addToCart}
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
      searchOpen={searchOpen}
      setSearchOpen={setSearchOpen}
      wishlistOpen={wishlistOpen}
      setWishlistOpen={setWishlistOpen}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
    />
  }
/>
        <Route
  path="/hair"
  element={
    <HairPage
      cart={cart}
      setCart={setCart}
      addToCart={addToCart}
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
      searchOpen={searchOpen}
      setSearchOpen={setSearchOpen}
      wishlistOpen={wishlistOpen}
      setWishlistOpen={setWishlistOpen}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
    />
  }
/>
<Route
  path="/product/:slug"
  element={
    <ProductDetailsPage
      addToCart={addToCart}
      cart={cart}
      setCart={setCart}
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
    />
  }
/>
  

        <Route
  path="/success"
  element={<SuccessPage />}
/>
<Route path="/admin-orders" element={<AdminOrdersPage />} />
<Route path="/shipping-policy" element={<ShippingPolicyPage />} />

<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

<Route path="/terms" element={<TermsPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/refund-policy" element={<RefundPolicyPage />} />
      </Routes>
    );
  }

  export default App;