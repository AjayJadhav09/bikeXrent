import React from 'react';
import video2 from '../../assets/video2.mp4';

const AboutUs = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
        paddingTop: '75px', // spacing for navbar
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(45%)',
        }}
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div
        style={{
          position: 'relative',
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          padding: '50px 30px',
          borderRadius: '12px',
          maxWidth: '1000px',
          margin: 'auto',
          textAlign: 'left',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '25px',
            borderBottom: '2px solid #ffcc00',
            display: 'inline-block',
            paddingBottom: '8px',
          }}
        >
          About Bike Rental Application
        </h1>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#ffcc00' }}>Who We Are</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Welcome to the Bike Rental Application — a convenient and reliable platform that helps you rent bikes easily
            and efficiently. Whether you're exploring the city or heading out for a weekend adventure, we make it simple
            to find the right bike for your journey.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#ffcc00' }}>What We Offer</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            From high-performance motorcycles to eco-friendly electric scooters, our collection is diverse and regularly
            maintained to ensure your ride is smooth and safe. Rentals are available for hours, days, or weeks — all
            customizable to fit your schedule.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#ffcc00' }}>Why Choose Us?</h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>✅ Easy-to-use online booking system</li>
            <li>✅ Wide selection of well-maintained bikes</li>
            <li>✅ Affordable pricing and flexible rental options</li>
            <li>✅ Free helmets and safety accessories</li>
            <li>✅ 24/7 customer support for any assistance</li>
          </ul>
        </section>

        <section>
          <h3 style={{ color: '#ffcc00' }}>Our Vision</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            The Bike Rental Application aims to promote eco-friendly, flexible, and enjoyable transportation
            experiences. Our vision is to make bike travel a top choice for urban commuting, short trips, and
            recreational rides.
          </p>
        </section>

        <section>
          <h3 style={{ color: '#ffcc00' }}>Start Your Ride</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Thousands of riders rely on our platform to find dependable bikes across the city. Whether you're a tourist,
            a student, or a local commuter — the Bike Rental Application is ready to get you moving. Your next ride is
            just a few clicks away.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
