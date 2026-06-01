import { useState } from "react";
import "./App.css";

import surya from "./assets/surya.jpeg";
import kaya from "./assets/kaya.jpeg";
import sugandha from "./assets/sugandha.jpeg";

const phone = "918328623837";

const products = {
  surya: {
    name: "Surya Snana",
    subtitle: "Radiance Body Cleanser",
    price: "₹699",
    image: surya,
    desc: "A traditional bath powder crafted with herbs, lentils and flowers for a gentle daily cleansing ritual.",
    benefits: ["Gentle cleansing", "Radiance ritual", "Soft skin feel", "Inspired by Indian Snana traditions"],
    ingredients: "Green Gram, Masoor Dal, Oats, Rose Petals, Licorice, Vetiver, Avarampoo, Kasturi Turmeric, Orange Peel.",
    use: "Mix 1–2 teaspoons with water or rose water. Apply on damp skin, massage gently and rinse."
  },
  kaya: {
    name: "Kaya Tailam",
    subtitle: "Abhyanga Ritual Oil",
    price: "₹599",
    image: kaya,
    desc: "A nourishing pre-bath oil inspired by the ancient Indian practice of Abhyanga.",
    benefits: ["Pre-bath nourishment", "Softens body skin", "Calming ritual", "Traditional oil massage"],
    ingredients: "Sesame Oil, Coconut Oil, Almond Oil, Rose, Vetiver, Manjistha, Licorice and Vitamin E.",
    use: "Massage before bath. Leave for 20–30 minutes and cleanse with Surya Snana."
  },
  sugandha: {
    name: "Sugandha Snana",
    subtitle: "Ritual Bathing Bar",
    price: "₹399",
    image: sugandha,
    desc: "A fragrant bathing bar handcrafted with herbs, oils and botanical extracts.",
    benefits: ["Daily cleansing", "Soft fragrance", "Gentle bath ritual", "Completes the body ritual"],
    ingredients: "Natural Oils, Rose, Vetiver, Aloe, Kasturi Turmeric and botanical extracts.",
    use: "Use during bath as a gentle ritual bathing bar. Rinse thoroughly after use."
  }
};

const orderLink = (item) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hi MRUDU Naturals, I would like to order ${item}. Please share details.`
  )}`;

export default function App() {
  const [page, setPage] = useState("home");
  const slides = [
  {
    title: "Surya Snana",
    subtitle: "Traditional Herbal Body Cleanser",
    text: "Crafted with herbs, lentils and flowers for a radiant cleansing ritual.",
    image: surya,
    page: "surya"
  },
  {
    title: "Kaya Tailam",
    subtitle: "Abhyanga Ritual Oil",
    text: "Inspired by ancient Indian oiling traditions and daily nourishment.",
    image: kaya,
    page: "kaya"
  },
  {
    title: "Sugandha Snana",
    subtitle: "Ritual Bathing Bar",
    text: "A fragrant botanical bathing experience rooted in tradition.",
    image: sugandha,
    page: "sugandha"
  }
];

const [currentSlide, setCurrentSlide] = useState(0);

const nextSlide = () => {
  setCurrentSlide((currentSlide + 1) % slides.length);
};

const prevSlide = () => {
  setCurrentSlide(
    currentSlide === 0 ? slides.length - 1 : currentSlide - 1
  );
};

  const go = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const ProductPage = ({ product }) => (
    <section className="product-page">
      <div className="product-photo">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <p className="eyebrow">MRUDU NATURALS</p>
        <h1>{product.name}</h1>
        <h3>{product.subtitle}</h3>
        <p className="price">{product.price}</p>
        <p>{product.desc}</p>

        <h4>Benefits</h4>
        <ul>
          {product.benefits.map((b) => <li key={b}>{b}</li>)}
        </ul>

        <h4>Key Ingredients</h4>
        <p>{product.ingredients}</p>

        <h4>How to Use</h4>
        <p>{product.use}</p>

        <a className="main-btn" href={orderLink(product.name)} target="_blank">
          Add to Cart
        </a>
      </div>
    </section>
  );

  return (
    <div className="site">
      <div className="offer-bar">
  <div className="marquee">
    FIRST 50 ORDERS • 20% OFF • USE CODE RITUAL20 ✦ FREE SHIPPING ON FOUNDING COLLECTION ✦ ANCIENT RITUALS. TIMELESS GLOW. ✦ FIRST 50 ORDERS • 20% OFF • USE CODE RITUAL20
  </div>
</div>

     <nav className="nav">
  <button className="brand" onClick={() => go("home")}>
  MRUDU NATURALS<span className="leaf">🍃</span>
</button>
    
  <div className="nav-links">
    <button onClick={() => go("home")}>Home</button>
    <button onClick={() => go("surya")}>Surya Snana</button>
    <button onClick={() => go("kaya")}>Kaya Tailam</button>
    <button onClick={() => go("sugandha")}>Sugandha Snana</button>
    <button onClick={() => go("story")}>Story</button>
    <button onClick={() => go("contact")}>Contact</button>
  </div>
</nav>

      {page === "home" && (
        <>
          <section className="launch-slider">

  <button className="slider-arrow" onClick={prevSlide}>
    ←
  </button>

  <div className="slider-content">

    <div className="slider-text">
      <p className="eyebrow">NEW LAUNCH</p>

      <h1>{slides[currentSlide].title}</h1>

      <h3>{slides[currentSlide].subtitle}</h3>

      <p>{slides[currentSlide].text}</p>

      <button
        className="main-btn"
        onClick={() => go(slides[currentSlide].page)}
      >
        Shop Now
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

    </div>

    <div className="slider-image">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
      />
    </div>

  </div>

  <button className="slider-arrow" onClick={nextSlide}>
    →
  </button>

</section>

          <div className="ticker">
            Crafted With Care ✦ Rooted In Heritage ✦ Small Batch Rituals ✦ Made In India ✦
          </div>

          <section className="rituals">
            <p className="eyebrow">Collection List</p>
            <h2>Choose Your Ritual</h2>

            <div className="ritual-grid">
              <button onClick={() => go("kaya")}>
                <span>01</span>
                <h3>Nourish</h3>
                <p>Kaya Tailam</p>
              </button>

              <button onClick={() => go("surya")}>
                <span>02</span>
                <h3>Cleanse</h3>
                <p>Surya Snana</p>
              </button>

              <button onClick={() => go("sugandha")}>
                <span>03</span>
                <h3>Complete</h3>
                <p>Sugandha Snana</p>
              </button>
            </div>
          </section>

          <section className="shop">
            <p className="eyebrow">Featured Products</p>
            <h2>The Founding Collection</h2>

            <div className="product-grid">
              {Object.entries(products).map(([key, product]) => (
                <div className="product-card" key={key}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.subtitle}</p>
                  <strong>{product.price}</strong>
                  <div>
                    <button onClick={() => go(key)}>View Product</button>
                    <a href={orderLink(product.name)} target="_blank">Add to Cart</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="set">
            <p className="eyebrow">Founding Offer</p>
            <h2>The Complete Ritual</h2>
            <p>Surya Snana + Kaya Tailam + Sugandha Snana</p>
            <h3><span>₹1697</span> ₹1359</h3>
            <a href={orderLink("The Complete Ritual Set")} target="_blank">
              Add Ritual Set to Cart
            </a>
          </section>

          <section className="ingredients">
            <p className="eyebrow">It’s All Natural</p>
            <h2>Crafted with traditional botanicals.</h2>

            <div className="ingredient-grid">
              <div><h3>Rose Petals</h3><p>Softness & fragrance</p></div>
              <div><h3>Vetiver Root</h3><p>Cooling & grounding</p></div>
              <div><h3>Kasturi Turmeric</h3><p>Traditional glow ritual</p></div>
              <div><h3>Licorice Root</h3><p>Radiance support</p></div>
              <div><h3>Avarampoo</h3><p>South Indian beauty flower</p></div>
              <div><h3>Orange Peel</h3><p>Natural refreshment</p></div>
            </div>
          </section>

          <section className="story-preview">
            <div>
              <p className="eyebrow">Our Story</p>
              <h2>Born from Indian bathing rituals.</h2>
              <p>
                MRUDU was created to bring forgotten Indian body-care traditions
                back into everyday life through oiling, cleansing and fragrance.
              </p>
              <button className="main-btn" onClick={() => go("story")}>Know More</button>
            </div>
            <img
  src="/images/logo.png"
  alt="MRUDU Logo"
  className="story-logo"
/>
          </section>
        </>
      )}

      {page === "surya" && <ProductPage product={products.surya} />}
      {page === "kaya" && <ProductPage product={products.kaya} />}
      {page === "sugandha" && <ProductPage product={products.sugandha} />}

      {page === "story" && (
        <section className="story-page">
          <p className="eyebrow">Our Story</p>
          <h1>Why MRUDU Was Created</h1>
          <p>
            MRUDU NATURALS was created from a simple belief — Indian self-care
            rituals are not old-fashioned, they are timeless.
          </p>
          <p>
            Our first collection is inspired by Abhyanga, Snana and Sugandha —
            nourishment, cleansing and fragrance.
          </p>
        </section>
      )}

      {page === "contact" && (
        <section className="contact-page">
          <h1>Reserve Your Ritual</h1>
          <p>For orders, product questions or collaborations, message us directly.</p>
          <a className="main-btn" href={orderLink("MRUDU Products")} target="_blank">
            Order on WhatsApp
          </a>
        </section>
      )}

      <footer>
        <div className="footer-grid">
          <div>
            <h3>MRUDU NATURALS</h3>
            <p>Ancient Rituals. Timeless Glow.</p>
          </div>
          <div>
            <h4>SHOP</h4>
            <button onClick={() => go("surya")}>Surya Snana</button>
            <button onClick={() => go("kaya")}>Kaya Tailam</button>
            <button onClick={() => go("sugandha")}>Sugandha Snana</button>
          </div>
          <div>
            <h4>CUSTOMER CARE</h4>
            <button onClick={() => go("contact")}>Contact Us</button>
            <p>Shipping Policy</p>
            <p>Returns & Refunds</p>
          </div>
          <div>
            <h4>FOLLOW US</h4>
            <p>Instagram</p>
            <p>WhatsApp</p>
          </div>
        </div>
      </footer>
    </div>
  );
}