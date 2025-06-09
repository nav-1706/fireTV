"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

// ... rest of your component

const NavLinks = [
  { LinkText: "Store", LinkTo: "/" },
  { LinkText: "Live TV", LinkTo: "/" },
  { LinkText: "Categories", LinkTo: "/" },
  { LinkText: "Try Something New", LinkTo: "/" },
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
            // target="_blank"
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
