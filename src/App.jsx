import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./App.css";

import logo from "./assets/logo.png";
import heroWorld from "./assets/hero-world.png";
import heroDawn from "./assets/hero-dawn.png";
import heroReflection from "./assets/hero-reflection.png";
import heroBloom from "./assets/hero-bloom.png";

import dawnCard from "./assets/dawn-card.png";

import bloomCard from "./assets/bloom-card.png";

import theDawnProduct from "./assets/product-thedawn.png";
import bodyRitualHero from "./assets/body-ritual-hero.png";
import ourStoryImage from "./assets/our-story.png";

import suvarnaProduct from "./assets/suvarna-snana.png";
import komalaProduct from "./assets/komala-tailam.png";
import sugandhaProduct from "./assets/sugandha-snana.png";
import mridulaProduct from "./assets/mridula-sparsha.png";
import faceRitualHero from "./assets/face-ritual-hero.jpg";
import reflectionCard from "./assets/reflection-card.png";
import productReflection from "./assets/product-thereflection.png";
import mukhasudhhiProduct from "./assets/mukhasudhhi.jpeg";
import shataDhautaProduct from "./assets/shata-dhauta-grita.jpeg";
import ksheeraPushpaProduct from "./assets/ksheera-pushpa.jpeg";
import snidhaProduct from "./assets/snidha.jpeg";



const products = [
  { image: suvarnaProduct, name: "SUVARNA SNANA", subtitle: "Golden Bath Ritual", old: 949, offer: 759, size: "250g" },
  { image: komalaProduct, name: "KOMALA TAILAM", subtitle: "Sacred Body Oil", old: 1099, offer: 879, size: "220ml" },
  { image: sugandhaProduct, name: "SUGANDHA SNANA", subtitle: "Ritual Bathing Bar", old: 599, offer: 479, size: "125g" },
  { image: mridulaProduct, name: "MRIDULA SPARSHA", subtitle: "Velvet Body Butter", old: 1099, offer: 879, size: "220g" },
];
const reflectionProducts = [
  {
    image: mukhasudhhiProduct,
    name: "MUKHASUDHHI",
    subtitle: "Face Cleansing Powder",
    old: 899,
    offer: 719,
    size: "150",
  },

  {
    image: shataDhautaProduct,
    name: "SHATA DHAUTA GHRITA",
    subtitle: "Night Cream",
    old: 1199,
    offer: 959,
    size: "100g",
  },

  {
    image: snidhaProduct,
    name: "SNIDHA",
    subtitle: "Daily Moisturizer",
    old: 1190,
    offer: 952,
    size: "50ml",
  },

  {
    image: ksheeraPushpaProduct,
    name: "KSHEERA PUSHPA",
    subtitle: "Skin Milk",
    old: 1450,
    offer: 1160,
    size: "50ml",
  },
];
function FloatingButtons() {
  return (
    <div className="floating-socials">
      <a
        href="https://wa.me/919908895612"
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
       href="https://instagram.com/themrudu"
        target="_blank"
        rel="noreferrer"
        className="floating-btn instagram-btn"
        aria-label="Visit Instagram"
      >
        <FaInstagram />
        
      </a>
      
    </div>
  );
}

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

          <a href="/#chapters" onClick={() => setMenuOpen(false)}>
            Collections
          </a>

          <Link to="/dawn" onClick={() => setMenuOpen(false)}>
            Body Rituals
          </Link>

          <Link to="/reflection" onClick={() => setMenuOpen(false)}>
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
      const res = await fetch("https://mrudu-backend.onrender.com/create-order", {
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
          const saveRes = await fetch("https://mrudu-backend.onrender.com/save-order", {
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
  const allProducts = [...products, ...reflectionProducts];

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            to={products.find((p) => p.name === item.name) ? "/dawn#products" : "/reflection#reflection-products"}
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
      { image: heroWorld, button: "EXPLORE MRUDU", action: "chapters" },
      { image: heroDawn, button: "EXPLORE THE DAWN", action: "/dawn" },
      { image: heroReflection, button: "EXPLORE THE REFLECTION", action: "chapters", className: "reflection-slide" },
      { image: heroBloom, button: "EXPLORE THE BLOOM", action: "chapters" },
    ];
    useEffect(() => {
  heroSlides.forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
  });
}, []);

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
          <button className="arrow left" onClick={prevSlide}>‹</button>

          <div className="hero-frame">
            <img
              src={heroSlides[currentSlide].image}
              alt="MRUDU Hero"
              className={`hero-image ${heroSlides[currentSlide].className || ""}`}
            />

            <button
              className={`hero-explore-btn ${heroSlides[currentSlide].className === "reflection-slide" ? "reflection-btn" : ""
                }`}
              onClick={heroClick}
            >
              {heroSlides[currentSlide].button}
            </button>
          </div>

          <button className="arrow right" onClick={nextSlide}>›</button>
        </section>

        <section className="chapters" id="chapters">
          <h2>THE CHAPTERS</h2>
          <p>Enter the world of MRUDU</p>

          <div className="chapter-grid">
            <div className="chapter-card">
              <img src={dawnCard} alt="The Dawn" />
              <div className="chapter-content">
                <h3>THE DAWN</h3>
                <p>Body Ritual Collection</p>
                <button
                  onClick={() =>
                    window.open("/dawn", "_blank")
                  }
                >
                  EXPLORE →
                </button>
              </div>
            </div>

            <div className="chapter-card">
              <img src={reflectionCard} alt="The Reflection" />
              <div className="chapter-content">
                <h3>THE REFLECTION</h3>

                <p>Ancient Face Ritual Collection</p>
                <button
                  onClick={() =>
                    window.open("/reflection", "_blank")
                  }
                >
                  EXPLORE  →
                </button>
              </div>
            </div>

            <div className="chapter-card">
              <img src={bloomCard} alt="The Bloom" />
              <div className="chapter-content">
                <h3>THE BLOOM</h3>
                <p>Hair Ritual Collection</p>
                <button
  className="coming-soon-btn"
  disabled
>
  COMING SOON
</button>
              </div>
            </div>
          </div>
        </section>

        <section className="home-product-section">
          <img src={theDawnProduct} alt="The Dawn Collection" />

          <div>
            <p className="small-title">THE DAWN COLLECTION</p>
            <h2>BODY RITUALS</h2>
            <h4>Four Timeless Rituals</h4>
            <p>
              A complete body ritual collection crafted with Suvarna Snana,
              Komala Tailam, Sugandha Snana and Mridula Sparsha.
            </p>

            <button onClick={() => navigate("/dawn#products")}>
              Explore The Dawn
            </button>
          </div>
        </section>
        <section className="home-product-section">

          <img
            src={productReflection}
            alt="The Reflection"
          />

          <div className="home-product-content">

            <p>THE REFLECTION COLLECTION</p>

            <h2>FACE RITUALS</h2>

            <h4>Four Timeless Rituals</h4>

            <p>
              A complete face ritual collection crafted with
              Mukhasuddhi, Shata Dhauta Ghrita,
              Snidha and Ksheera Pushpa.
            </p>

            <button
              onClick={() => navigate("/reflection")}
            >
              EXPLORE THE REFLECTION
            </button>

          </div>

        </section>

        <section className="story-section" id="story">
          <img src={ourStoryImage} alt="Our Story" />

          <div>
            <p className="small-title">OUR STORY</p>
            <h2>MRUDU</h2>
            <p>
              MRUDU is a house of timeless rituals inspired by ancient feminine grace,
              traditional beauty practices and the quiet luxury of everyday self-care.
            </p>
            <p>
              Every creation preserves beauty through body, face and hair rituals
              rooted in tradition and reimagined for today.
            </p>
          </div>
        </section>
        

        <Footer />
        <FloatingButtons />

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

        <section className="products-page" id="products">
          <p className="small-title">THE DAWN COLLECTION</p>
          <h2>BODY RITUALS</h2>

          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <button
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(product)}
                >
                  {wishlist.find((item) => item.name === product.name) ? "♥" : "♡"}
                </button>

                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.subtitle}</p>
                <span>{product.size}</span>

                <div className="price-row">
                  <del>₹{product.old}</del>
                  <strong>₹{product.offer}</strong>
                </div>

                <button onClick={() => addToCart(product)}>Add To Cart</button>
              </div>
            ))}
          </div>

          <Link to="/" className="back-home">← Back to Home</Link>
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
                  .getElementById("reflection-products")
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

        <section
          className="products-page"
          id="reflection-products"
        >
          <p className="small-title">
            THE REFLECTION COLLECTION
          </p>

          <h2>FACE RITUALS</h2>

          <div className="product-grid">

            {reflectionProducts.map((product, index) => (

              <div className="product-card" key={index}>

                <button
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(product)}
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

                <button
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>

              </div>

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
            <p>Suvarna Snana</p>
            <p>Komala Tailam</p>
            <p>Sugandha Snana</p>
            <p>Mridula Sparsha</p>
          </div>

          <div>
            <h4>FACE RITUALS</h4>
            <p>Mukhasuddhi</p>
            <p>Shata Dhauta Ghrita</p>
            <p>Snidha</p>
            <p>Ksheera Pushpa</p>
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
          path="/dawn"
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
          path="/reflection"
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