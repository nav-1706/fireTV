"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

// ... rest of your component

const NavLinks = [
  { LinkText: "Home", LinkTo: "/Home" },
  { LinkText: "Store", LinkTo: "https://www.primevideo.com/storefront/ref=atv_hom_pri_c_9zZ8D2_str_hom?contentType=home&contentId=store" },
  { LinkText: "Live TV", LinkTo: "https://www.primevideo.com/storefront/ref=atv_hom_pri_c_9zZ8D2_live?contentType=home&contentId=live" },
  { LinkText: "Categories", LinkTo: "https://www.primevideo.com/categories/ref=atv_hom_pri_c_9zZ8D2_cat" },
  { LinkText: "Try Something New", LinkTo: "https://www.primevideo.com/mystuff/ref=atv_hom_pri_c_9zZ8D2_mys" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className={styles.NavbarMain}>
      <Link href="/">
        <img src="/assets/Logo.png" alt="Logo" className={styles.logo} />
      </Link>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.bar1Active : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar2Active : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar3Active : ''}`}></span>
      </button>

      <div className={`${styles.NavLinks} ${menuOpen ? styles.showMenu : ''}`}>
        {NavLinks.map((I) => (
          <Link
            target="_blank"
            href={I.LinkTo}
            key={I.LinkText}
            className={`${styles.NavLink} ${I.LinkText === 'Try Something New' ? styles.TryNewLink : ''}`}
            onClick={() => setMenuOpen(false)} // close menu on link click
          >
            {I.LinkText}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
