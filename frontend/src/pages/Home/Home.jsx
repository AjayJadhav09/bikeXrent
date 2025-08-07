import React from 'react';
import video2 from '../../assets/video2.mp4';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Background Video */}
      <video autoPlay loop muted className="video-background">
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      {/* Hero Section */}
      <div className="content">
        <h1 className="display-3 fw-bold">Welcome to <br /> Bike Rental App</h1>
        <p className="lead fs-4">Discover, rent, and ride with ease – your trusted bike rental partner.</p>
        <a href="/bikes" className="btn btn-lg btn-custom shadow">Browse Our Bikes</a>
      </div>

      {/* Features Section */}
      <section className="container text-center my-5 section">
        <h2 className="display-5 mb-4">Our Features</h2>
        <div className="row g-4">
          {[
            { icon: "bi-bicycle", title: "Wide Selection", desc: "Choose from city to mountain bikes." },
            { icon: "bi-calendar", title: "Easy Booking", desc: "Rent your bike in a few simple clicks." },
            { icon: "bi-headset", title: "24/7 Support", desc: "We're here whenever you need us." },
          ].map((feature, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="p-4 rounded-4 bg-dark bg-opacity-50 shadow text-white h-100">
                <div className="feature-icon mb-3">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container text-center my-5 section">
        <h2 className="display-5 mb-4">What Our Users Say</h2>
        <div className="row g-4">
          {[
            { quote: "Excellent service! The booking was smooth and the bike was in great condition.", name: "Jane Doe" },
            { quote: "I loved the variety of bikes available. Will definitely return!", name: "John Smith" },
            { quote: "Great experience! The support team was super helpful.", name: "Emily Johnson" },
          ].map((review, idx) => (
            <div className="col-md-4" key={idx}>
              <blockquote className="p-4 rounded-4 bg-secondary bg-opacity-50 shadow-sm text-white">
                <p>"{review.quote}"</p>
                <footer className="mt-3 text-light fw-light">— {review.name}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container text-center my-5 section">
        <h2 className="display-5 mb-4">How It Works</h2>
        <div className="row g-4">
          {[
            { icon: "bi-search", title: "1. Choose Your Bike", desc: "Pick a bike that suits your adventure." },
            { icon: "bi-pencil-square", title: "2. Make a Reservation", desc: "Enter your details and rental period." },
            { icon: "bi-check-circle", title: "3. Pick Up & Enjoy", desc: "Collect your bike and hit the road!" },
          ].map((step, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="p-4 rounded-4 bg-dark bg-opacity-50 shadow text-white h-100">
                <div className="feature-icon mb-3">
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container text-center my-5 section">
        <h2 className="display-5 mb-3">Get in Touch</h2>
        <p className="fs-5">
          Have questions? <Link to="/contact-us" className="link-custom">Contact Us</Link> for more info.
        </p>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .home-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          width: 100%;
          color: white;
          font-family: 'Segoe UI', sans-serif;
        }

        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
          z-index: -1;
        }

        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 6rem 1rem 3rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .btn-custom {
          background-color: #007bff;
          color: #fff;
          border-radius: 50px;
          padding: 12px 30px;
          font-size: 1.1rem;
          transition: all 0.3s ease-in-out;
        }

        .btn-custom:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }

        .feature-icon {
          font-size: 3rem;
          color: #0d6efd;
          transition: all 0.3s ease;
        }

        .feature-icon:hover {
          color: #66b2ff;
          transform: scale(1.2);
        }

        .link-custom {
          color: #0d6efd;
          text-decoration: underline;
        }

        .link-custom:hover {
          color: #66b2ff;
        }
      `}</style>

      {/* External Styles */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css"
      />
    </div>
  );
};

export default HomePage;
