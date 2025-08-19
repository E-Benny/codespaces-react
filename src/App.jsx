// REFACTORED: removed JSX comments inside attribute lists (caused Babel parse error).
// REFACTORED: logo is now an <a> (native link behavior + keyboard support).
// ADJUSTED: class hooks for taller hero side images, carousel, and category images.
// IMPROVED: mobile centering & footer stacking via CSS classes (see App.css).

import { useRef, useEffect } from "react";
import "./App.css";

export default function App() {
  // Refs
  const mobileNavRef = useRef(null);
  const trackRef = useRef(null);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Content
  const latestArticles = [
    {
      id: 201,
      meta: "Beauty",
      title: "Lilac Lacquer & Wine-Glass Shine: The Ravyn Palette",
      author: "A. D.",
      image: {
        src: "https://i.pinimg.com/1200x/87/bb/5c/87bb5cfe8bf83e3a3bb48c3bcceb8f07.jpg",
        alt: "Makeup palette in lilac and wine tones",
      },
    },
    {
      id: 202,
      meta: "Runway",
      title: "Latex + Vinyl + Neon: Tour Armor, Weeknd Edition",
      author: "T. R.",
      image: {
        src: "https://i.pinimg.com/1200x/56/e3/1d/56e31d889040bebf26d29edb4179b183.jpg",
        alt: "Runway look with latex, vinyl and neon",
      },
    },
    {
      id: 203,
      meta: "Culture",
      title: "Anycia → Doja → Latto: The Pop-Rap Hourglass",
      author: "M. C.",
      image: {
        src: "https://i.pinimg.com/1200x/b1/10/5c/b1105c18dbd062ea650ca39809a6749b.jpg",
        alt: "Pop-rap silhouettes collage",
      },
    },
    {
      id: 204,
      meta: "Fashion",
      title: "Rave Couture: Modular Night Pieces for Charli Hours",
      author: "N. F.",
      image: {
        src: "https://i.pinimg.com/1200x/9c/70/26/9c70268c5e88d80b35b1c5113f8d7d2a.jpg",
        alt: "Night-out modular fashion pieces",
      },
    },
  ];

  const categoryBlocks = [
    {
      id: 205,
      meta: "Fashion",
      title: "The Raven Edit: Charli’s Night-Out Uniform",
      image: {
        src: "https://i.pinimg.com/1200x/51/69/ee/5169eeb9e130aa86714f70d05f04cec4.jpg",
        alt: "Night-out essentials flatlay",
      },
    },
    {
      id: 206,
      meta: "Beauty",
      title: "Berry Skin, Bronze Lip: Ravyn’s Glow Map",
      image: {
        src: "https://i.pinimg.com/1200x/e6/03/26/e60326515a729f33827461403feb85ac.jpg",
        alt: "Berry and bronze beauty look",
      },
    },
    {
      id: 207,
      meta: "Culture",
      title: "Ken Carson Aesthetic: Chrome, Bass, After-Dark",
      image: {
        src: "https://i.pinimg.com/1200x/e6/68/5c/e6685cd324664436aaf7133a5f2b0cc2.jpg",
        alt: "Alt-club aesthetic collage",
      },
    },
  ];

  const editorsPicks = [
    {
      id: 208,
      meta: "Guide",
      title: "How to Host: ‘After Hours’ Watch Party Kit",
      author: "Team Ravenlore",
      image: {
        src: "https://i.pinimg.com/1200x/bb/b8/7e/bbb87eda3836b2932f735268b2cde0f8.jpg",
        alt: "After Hours themed party setup",
      },
    },
    {
      id: 209,
      meta: "Interview",
      title: "Studio Notes: Building a Charli-Coded Set",
      author: "Team Ravenlore",
      image: {
        src: "https://i.pinimg.com/1200x/ea/e6/75/eae6759d4aecedc61ac3e28386ee0818.jpg",
        alt: "Studio set build in progress",
      },
    },
    {
      id: 210,
      meta: "Shopping",
      title: "Weeknd Core: Shades, Moto Jackets, Stack-Heel Boots",
      author: "Team Ravenlore",
      image: {
        src: "https://i.pinimg.com/1200x/e4/45/9f/e4459f048c89796a4243bf7ca019e220.jpg",
        alt: "Sunglasses, jackets and boots on rack",
      },
    },
  ];

  // Handlers
  const toggleMobileNav = () => {
    const el = mobileNavRef.current;
    if (!el) return;
    const open = !el.classList.contains("open");
    el.classList.toggle("open", open);
  };

  const scrollTrack = (dir) => {
    if (!trackRef.current) return;
    const dx = dir === "next" ? 320 : -320;
    trackRef.current.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <>
      {/* HEADER */}
      <div className="container">
        <header className="header" role="banner" aria-label="Site Header">
          {/* CHANGED: logo as anchor; cursor + native keyboard focus */}
          <a className="logo" aria-label="Ravenlore" href="#top">
            RAVENLORE
          </a>

          <nav className="nav" role="navigation" aria-label="Primary">
            <a href="#fashion" className="link-underline">Fashion</a>
            <a href="#beauty" className="link-underline">Beauty</a>
            <a href="#culture" className="link-underline">Culture</a>
            <a href="#music" className="link-underline">Music</a>
            <a href="#events" className="link-underline">Events</a>
            <a href="#shop" className="link-underline">Shop</a>
          </nav>

          <div className="account" aria-label="Account and Search">
            <button className="icon-btn icon-animate" aria-label="Search">Search</button>
            <a href="#signin" className="account-link link-underline">Sign In</a>
            <a href="#subscribe" className="account-link link-underline">Subscribe</a>
            <button
              className="menu-toggle icon-animate"
              aria-expanded="false"
              aria-controls="mobile-nav"
              onClick={toggleMobileNav}
            >
              Menu
            </button>
          </div>
        </header>
      </div>

      {/* MOBILE NAV */}
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" ref={mobileNavRef}>
        <a href="#fashion" className="link-underline">Fashion</a>
        <a href="#beauty" className="link-underline">Beauty</a>
        <a href="#culture" className="link-underline">Culture</a>
        <a href="#music" className="link-underline">Music</a>
        <a href="#events" className="link-underline">Events</a>
        <a href="#shop" className="link-underline">Shop</a>
      </nav>

      {/* NEWSLETTER */}
      <section className="newsletter reveal" aria-label="Newsletter">
        <div className="container">
          <p>Get the Ravenlore newsletter for weekly film–fashion–music drops.</p>
          <button>Subscribe</button>
        </div>
      </section>

      {/* HERO */}
      <main id="top">
        <section className="container hero" aria-label="Top stories">
          <div className="hero-grid">
            <article className="hero-lead card reveal">
              <a href="#charli" className="card-image">
                <img
                  src="https://i.pinimg.com/1200x/09/a8/ef/09a8efbb7e7c08ad57f2b04141272f05.jpg"
                  alt="Charli XCX on stage with strobe lighting"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="card-meta">Music</div>
              <h3 className="card-title">
                <a href="#charli" className="title-link">
                  Charli XCX: Club-Ready Couture, Rave Princess Mode
                </a>
              </h3>
              <div className="card-author">By Ravenlore Style Desk · Today</div>
            </article>

            {/* CHANGED: taller side images (avoid face crops) */}
            <article className="hero-side card reveal">
              <a href="#ravyn-lenae" className="card-image hero-side-image">
                <img
                  src="https://i.pinimg.com/1200x/5d/31/54/5d31540db680c9a8066451c22cabae3c.jpg"
                  alt="Ravyn Lenae bathed in red light"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="card-meta">Culture</div>
              <h3 className="card-title">
                <a href="#ravyn-lenae" className="title-link">Ravyn Lenae: Velvet-Red Neo-Soul Nights</a>
              </h3>
              <div className="card-author">By L. M.</div>
            </article>

            <article className="hero-side card reveal">
              <a href="#ken-carson" className="card-image hero-side-image">
                <img
                  src="https://i.pinimg.com/1200x/08/86/03/088603655bcbe7877ab957a95b6eebb4.jpg"
                  alt="Ken Carson in noir streetwear"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="card-meta">Fashion</div>
              <h3 className="card-title">
                <a href="#ken-carson" className="title-link">Ken Carson: Noir Streetwear, Chrome Energy</a>
              </h3>
              <div className="card-author">By S. K.</div>
            </article>
          </div>
        </section>

        {/* TRENDING (carousel) */}
        <section className="trending" aria-label="Trending">
          <div className="container">
            <h2>Trending</h2>

            <div className="trending-track" ref={trackRef}>
              <a className="trend-card reveal" href="#weeknd">
                <div className="trend-thumb">
                  <img src="https://i.pinimg.com/1200x/45/98/0e/45980e100ba3838b704ea6f26fed6e2b.jpg" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="trend-title">The Weeknd: Blade-Runner Blues &amp; Latex Glam</div>
              </a>
              <a className="trend-card reveal" href="#charli-xcx-styling">
                <div className="trend-thumb">
                  <img src="https://i.pinimg.com/1200x/8b/87/a1/8b87a1b3af37fe323d2db79992e24f61.jpg" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="trend-title">How Charli Turns Techno into Couture</div>
              </a>
              <a className="trend-card reveal" href="#ken-fit">
                <div className="trend-thumb">
                  <img src="https://i.pinimg.com/1200x/72/fc/ef/72fcefaeeb8844da0efc6dd217469ffc.jpg" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="trend-title">Ken Core: Chrome Leather, Minimal Logos</div>
              </a>
              <a className="trend-card reveal" href="#ravyn-color">
                <div className="trend-thumb">
                  <img src="https://i.pinimg.com/1200x/f5/30/c7/f530c7b13584f788dffb9db3f2554152.jpg" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="trend-title">Ravyn Lenae: Berry-Toned Moodboard</div>
              </a>
            </div>

            <div className="trend-controls">
              <button className="trend-btn" onClick={() => scrollTrack("prev")} aria-label="Previous">‹</button>
              <button className="trend-btn" onClick={() => scrollTrack("next")} aria-label="Next">›</button>
            </div>
          </div>
        </section>

        {/* LATEST */}
        <section className="container articles" aria-label="Latest">
          <h2>Latest</h2>
          <div className="grid">
            {latestArticles.map((item) => (
              <article className="card reveal" key={item.id}>
                <a href={`#latest-${item.id}`} className="card-image">
                  <img
                    src={item.image.src}
                    alt={item.image.alt || item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <div className="card-meta">{item.meta}</div>
                <h3 className="card-title">
                  <a href={`#latest-${item.id}`} className="title-link">{item.title}</a>
                </h3>
                <div className="card-author">By {item.author}</div>
              </article>
            ))}
          </div>
        </section>

        {/* CATEGORY BLOCKS (above Editors’ Picks) */}
        <section className="container categories" aria-label="Sections">
          <div className="cat-grid">
            {categoryBlocks.map((cat) => (
              <div className="cat card reveal" key={cat.id}>
                <a href={`#cat-${cat.id}`} className="card-image cat-image">
                  <img
                    src={cat.image.src}
                    alt={cat.image.alt || cat.title}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <div className="card-meta">{cat.meta}</div>
                <h3 className="card-title">
                  <a href={`#cat-${cat.id}`} className="title-link">{cat.title}</a>
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* EDITORS’ PICKS */}
        <section className="container editors" aria-label="Editors' Picks">
          <h2>Editors’ Picks</h2>
          <div className="grid">
            {editorsPicks.map((item) => (
              <article className="card reveal" key={item.id}>
                <a href={`#pick-${item.id}`} className="card-image">
                  <img
                    src={item.image.src}
                    alt={item.image.alt || item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <div className="card-meta">{item.meta}</div>
                <h3 className="card-title">
                  <a href={`#pick-${item.id}`} className="title-link">{item.title}</a>
                </h3>
                <div className="card-author">By {item.author}</div>
              </article>
            ))}
          </div>
        </section>

        {/* SECOND NEWSLETTER CTA */}
        <section className="newsletter alt reveal" aria-label="Newsletter Secondary">
          <div className="container">
            <p>Join our list for event drops, RSVPs, and behind-the-scenes.</p>
            <button>Sign Up</button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer" role="contentinfo" aria-label="Footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="logo">RAVENLORE</div>
            <p className="footer-copy">Cinematic fashion &amp; music culture. Made in LA.</p>
          </div>

          <div className="footer-col">
            <h4>Sections</h4>
            <a href="#fashion" className="footer-link">Fashion</a>
            <a href="#beauty" className="footer-link">Beauty</a>
            <a href="#culture" className="footer-link">Culture</a>
            <a href="#music" className="footer-link">Music</a>
            <a href="#events" className="footer-link">Events</a>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <a href="#contact" className="footer-link">Contact</a>
            <a href="#careers" className="footer-link">Careers</a>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
            <a href="#ig" className="footer-link">Instagram</a>
            <a href="#tt" className="footer-link">TikTok</a>
            <a href="#yt" className="footer-link">YouTube</a>
          </div>
        </div>

        <div className="container footer-bottom">© 2025 Ravenlore</div>
      </footer>
    </>
  );
}
