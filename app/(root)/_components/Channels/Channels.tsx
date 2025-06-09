"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Channels.module.css';

const Marquee = dynamic(() => import('react-fast-marquee').then(mod => mod.default), {
  ssr: false,
});

const ottPlatforms = [
  { name: 'Netflix', img: '/assets/netflix.png' },
  { name: 'Disney+', img: '/assets/disney.png' },
  { name: 'Hulu', img: '/assets/hulu.png' },
  { name: 'HBO Max', img: '/assets/hbo.png' },
  { name: 'Prime Video', img: '/assets/prime.jpeg' },
  { name: 'Paramount+', img: '/assets/paramount.png' },
  { name: 'Sony Liv', img: '/assets/sonyliv.png' },
];

const Channels = () => {
  return (
    <section className={styles.Channels}>
      <div className={styles.heading}>
        <h6>Your Favorite OTTs, All in One Place</h6>
        <p>
          Explore and stream top content from all your favorite OTT apps in one seamless experience.
        </p>
      </div>

      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {ottPlatforms.map((ott, index) => (
          <div key={index} className={styles.ottLogoBox}>
            <img src={ott.img} alt={ott.name} className={styles.ottLogo} />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Channels;
