import { useRef } from "react";
import "./App.css";

export default function App() {
  // ==== Refs for DOM elements ====
  const mobileNavRef = useRef(null); // Mobile navigation menu
  const trackRef = useRef(null);     // Trending articles scroll track

  // ==== Handlers ====
  const toggleMobileNav = () => {
    const el = mobileNavRef.current;
    if (!el) return;
    const open = !el.classList.contains("open");
    el.classList.toggle("open", open);
  };

  const scrollTrack = (dir) => {
    if (!trackRef.current) return;
    const dx = dir === "next" ? 320 : -320; // scroll distance in px
    trackRef.current.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <>
      {/* ===================== HEADER ===================== */}
      <div className="container">
        <header className="header" role="banner" aria-label="Site Header">
          {/* Logo */}
          <div className="logo" aria-label="Ravenlore">
            RAVENLORE
          </div>

          {/* Desktop Navigation */}
          <nav className="nav" role="navigation" aria-label="Primary">
            <a href="#fashion">Fashion</a>
            <a href="#beauty">Beauty</a>
            <a href="#culture">Culture</a>
            <a href="#music">Music</a>
            <a href="#events">Events</a>
            <a href="#shop">Shop</a>
          </nav>

          {/* Account / Search / Mobile Menu */}
          <div className="account" aria-label="Account and Search">
            <button className="icon-btn" aria-label="Search">
              Search
            </button>
            <a href="#signin">Sign In</a>
            <a href="#subscribe">Subscribe</a>
            <button
              className="menu-toggle"
              aria-expanded="false"
              aria-controls="mobile-nav"
              onClick={toggleMobileNav}
            >
              Menu
            </button>
          </div>
        </header>
      </div>

      {/* ===================== MOBILE NAVIGATION ===================== */}
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile"
        ref={mobileNavRef}
      >
        <a href="#fashion">Fashion</a>
        <a href="#beauty">Beauty</a>
        <a href="#culture">Culture</a>
        <a href="#music">Music</a>
        <a href="#events">Events</a>
        <a href="#shop">Shop</a>
      </nav>

      {/* ===================== NEWSLETTER BANNER ===================== */}
      <section className="newsletter" aria-label="Newsletter">
        <div className="container">
          <p>Get the Ravenlore newsletter for weekly film–fashion–music drops.</p>
          <button>Subscribe</button>
        </div>
      </section>

      {/* ===================== HERO SECTION ===================== */}
      <main>
        <section className="container hero" aria-label="Top stories">
          <div className="hero-grid">
            {/* Lead feature — Charli XCX */}
            <article className="hero-lead card">
              <a href="#charli" className="card-image">
                <img
                  src="https://picsum.photos/1200/900?random=101"
                  alt="Charli XCX on stage with strobe lighting"
                />
              </a>
              <div className="card-meta">Music</div>
              <h3 className="card-title">
                Charli XCX &amp; the Club-Ready Couture Era: Styling Pop’s Rave Princess
              </h3>
              <div className="card-author">By Ravenlore Style Desk · Today</div>
            </article>

            {/* Secondary — Ravyn Lenae */}
            <article className="hero-side card">
              <a href="#ravyn-lenae" className="card-image">
                <img
                  src="https://picsum.photos/900/900?random=102"
                  alt="Ravyn Lenae bathed in red light"
                />
              </a>
              <div className="card-meta">Culture</div>
              <h3 className="card-title">
                Ravyn Lenae’s Velvet Sound: A Moodboard for Neo-Soul Nights
              </h3>
              <div className="card-author">By L. M.</div>
            </article>

            {/* Secondary — Ken Carson */}
            <article className="hero-side card">
              <a href="#ken-carson" className="card-image">
                <img
                  src="https://picsum.photos/900/900?random=103"
                  alt="Ken Carson in noir streetwear"
                />
              </a>
              <div className="card-meta">Fashion</div>
              <h3 className="card-title">
                Ken Carson’s Noir Streetwear: Sleek Lines, Heavy Bass Energy
              </h3>
              <div className="card-author">By S. K.</div>
            </article>
          </div>
        </section>

        {/* ===================== TRENDING STRIP ===================== */}
        <section className="trending" aria-label="Trending">
          <div className="container">
            <h2>Trending</h2>

            {/* Trending cards track */}
            <div className="trending-track" ref={trackRef}>
              <a className="trend-card" href="#weeknd">
                <div className="trend-thumb">
                  <img src="https://picsum.photos/400/300?random=104" alt="" />
                </div>
                <div className="trend-title">The Weeknd: Bladerunner Blues &amp; Latex Glam</div>
              </a>
              <a className="trend-card" href="#charli-xcx-styling">
                <div className="trend-thumb">
                  <img src="https://picsum.photos/400/300?random=105" alt="" />
                </div>
                <div className="trend-title">How Charli Makes Techno Feel High-Fashion</div>
              </a>
              <a className="trend-card" href="#ken-fit">
                <div className="trend-thumb">
                  <img src="https://picsum.photos/400/300?random=106" alt="" />
                </div>
                <div className="trend-title">Ken Carson Core: Chrome, Leather, Minimal Logos</div>
              </a>
              <a className="trend-card" href="#ravyn-color">
                <div className="trend-thumb">
                  <img src="https://picsum.photos/400/300?random=107" alt="" />
                </div>
                <div className="trend-title">Ravyn Lenae: Berry-Toned Beauty Mood</div>
              </a>
            </div>

            {/* Scroll buttons */}
            <div className="trend-controls">
              <button
                className="trend-btn"
                onClick={() => scrollTrack("prev")}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="trend-btn"
                onClick={() => scrollTrack("next")}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </section>

        {/* ===================== LATEST ARTICLES ===================== */}
        <section className="container articles" aria-label="Latest">
          <h2>Latest</h2>
          <div className="grid">
            {[
              {
                id: 201,
                meta: "Beauty",
                title: "Glossy Lilac & Wine: A Ravyn Lenae-Inspired Palette",
                author: "A. D."
              },
              {
                id: 202,
                meta: "Runway",
                title: "Latex, Vinyl, Neon: The Weeknd’s Tour Fits Reimagined",
                author: "T. R."
              },
              {
                id: 203,
                meta: "Culture",
                title: "Anycia, Doja, Latto: The Current Pop-Rap Silhouette",
                author: "M. C."
              },
              {
                id: 204,
                meta: "Fashion",
                title: "Charli XCX’s Rave Couture: Modular Pieces for Night Moves",
                author: "N. F."
              }
            ].map((item) => (
              <article className="card" key={item.id}>
                <a href={`#latest-${item.id}`} className="card-image">
                  <img
                    src={`https://picsum.photos/800/600?random=${item.id}`}
                    alt={item.title}
                  />
                </a>
                <div className="card-meta">{item.meta}</div>
                <h3 className="card-title">{item.title}</h3>
                <div className="card-author">By {item.author}</div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================== CATEGORY BLOCKS ===================== */}
        <section className="container categories" aria-label="Sections">
          <div className="cat-grid">
            {[
              { id: 205, meta: "Fashion", title: "The Raven Edit: Charli XCX Night-Out Essentials" },
              { id: 206, meta: "Beauty", title: "Berry &amp; Bronze: Ravyn Lenae Skin + Lip Guide" },
              { id: 207, meta: "Culture", title: "Ken Carson &amp; The New Alt-Club Aesthetic" }
            ].map((cat) => (
              <div className="cat card" key={cat.id}>
                <a href={`#cat-${cat.id}`} className="card-image">
                  <img
                    src={`https://picsum.photos/1200/800?random=${cat.id}`}
                    alt={cat.title}
                  />
                </a>
                <div className="card-meta">{cat.meta}</div>
                <h3 className="card-title">{cat.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== EDITORS’ PICKS ===================== */}
        <section className="container editors" aria-label="Editors' Picks">
          <h2>Editors’ Picks</h2>
          <div className="grid">
            {[
              { id: 208, meta: "Guide", title: "Host a Ravenlore Watch Party: ‘After Hours’ Theme" },
              { id: 209, meta: "Interview", title: "Studio Notes: Building a Charli-coded Set" },
              { id: 210, meta: "Shopping", title: "The Weeknd-ish Pieces: Sunglasses, Jackets, Boots" }
            ].map((item) => (
              <article className="card" key={item.id}>
                <a href={`#pick-${item.id}`} className="card-image">
                  <img
                    src={`https://picsum.photos/900/600?random=${item.id}`}
                    alt={item.title}
                  />
                </a>
                <div className="card-meta">{item.meta}</div>
                <h3 className="card-title">{item.title}</h3>
                <div className="card-author">By Team Ravenlore</div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================== SECOND NEWSLETTER CTA ===================== */}
        <section className="newsletter alt" aria-label="Newsletter Secondary">
          <div className="container">
            <p>Join our list for event drops, RSVPs, and behind-the-scenes.</p>
            <button>Sign Up</button>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="site-footer" role="contentinfo" aria-label="Footer">
        <div className="container footer-grid">
          {/* Column 1: Logo + copy */}
          <div className="footer-col">
            <div className="logo">RAVENLORE</div>
            <p className="footer-copy">Cinematic fashion &amp; music culture. Made in LA.</p>
          </div>

          {/* Column 2: Sections */}
          <div className="footer-col">
            <h4>Sections</h4>
            <a href="#fashion">Fashion</a>
            <a href="#beauty">Beauty</a>
            <a href="#culture">Culture</a>
            <a href="#music">Music</a>
            <a href="#events">Events</a>
          </div>

          {/* Column 3: About */}
          <div className="footer-col">
            <h4>About</h4>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>

          {/* Column 4: Social */}
          <div className="footer-col">
            <h4>Follow</h4>
            <a href="#ig">Instagram</a>
            <a href="#tt">TikTok</a>
            <a href="#yt">YouTube</a>
          </div>
        </div>

        <div className="container footer-bottom">© 2025 Ravenlore</div>
      </footer>
    </>
  );
}
