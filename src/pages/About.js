import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

// Import images (make sure to add these images to your project)
import heroImage from '../images/house2.jpg';
import missionImage from '../images/house2.jpg';
import team1 from '../images/house2.jpg';
import team2 from '../images/house2.jpg';
import team3 from '../images/house2.jpg';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(0, 82, 204, 0.9), rgba(0, 66, 163, 0.9)), url(${heroImage})` }}>
        <div className="hero-content">
          <h1>About Excellent Properties</h1>
          <p>Your trusted partner in Nigerian real estate since 2010</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-container">
        {/* Mission Section */}
        <section className="about-section mission-section">
          <div className="section-content">
            <div className="text-content">
              <h2>Our Mission</h2>
              <p>
                At Excellent Properties, we're dedicated to making property ownership accessible, 
                stress-free, and rewarding for every Nigerian. We believe everyone deserves a place 
                they can call home - whether it's your first apartment or your dream villa.
              </p>
              <p>
                Our team of experienced professionals works tirelessly to provide exceptional service, 
                innovative solutions, and trustworthy guidance throughout your real estate journey.
              </p>
            </div>
            <div className="image-content">
              <img 
                src={missionImage} 
                alt="Our mission - Helping Nigerians find their perfect homes" 
                className="mission-image"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Properties Listed</p>
            </div>
            <div className="stat-item">
              <h3>12+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>8</h3>
              <p>Nigerian Cities</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Integrity</h3>
              <p>We're transparent in all our dealings and always put our clients' interests first.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Excellence</h3>
              <p>We strive for the highest standards in service delivery and property quality.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>We build lasting relationships based on reliability and consistent performance.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Innovation</h3>
              <p>We embrace technology to make property search and transactions seamless.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section team-section">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={team1} alt="Uzor Micheal - Founder & CEO" />
              </div>
              <h3>Uzor Micheal</h3>
              <p>Founder & CEO</p>
              <p className="member-bio">With over 15 years in real estate, Uzor founded Excellent Properties with a vision to transform Nigeria's property market.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team2} alt="Amara Nwosu - Head of Operations" />
              </div>
              <h3>Amara Nwosu</h3>
              <p>Head of Operations</p>
              <p className="member-bio">Amara ensures our operations run smoothly and our clients receive exceptional service at every touchpoint.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team3} alt="Tunde Adeyemi - Technology Director" />
              </div>
              <h3>Tunde Adeyemi</h3>
              <p>Technology Director</p>
              <p className="member-bio">Tunde leads our tech initiatives, creating innovative solutions that simplify the property search process.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to Find Your Perfect Property?</h2>
          <p>Join thousands of satisfied clients who've found their dream homes through us</p>
          <div className="cta-buttons">
            <Link to="/properties" className="btn-primarys">Browse Properties</Link>
            <Link to="/contact" className="btn-secondarys">Contact Us</Link>
          </div>
        </section>
      </div>
    </div>
  );
}