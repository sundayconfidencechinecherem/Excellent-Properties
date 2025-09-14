import { useState } from "react";
import { 
  FaHome, 
  FaMoneyBillWave, 
  FaChartLine, 
  FaBuilding, 
  FaLightbulb, 
  FaBalanceScale,
  FaPhone, 
  FaEnvelope,
  FaCheck,
  FaStar,
  FaBolt,
  FaTrophy,
  FaQuoteLeft
} from "react-icons/fa";
import "../css/Services.css";

export default function Services() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            icon: <FaHome className="service-icon" />,
            title: "Property Buying",
            description: "Find your dream home with our expert guidance. We help you through every step of the buying process.",
            features: ["Property Search", "Viewing Arrangements", "Negotiation", "Closing Support"],
            stats: ["98%", "Client Satisfaction", "500+", "Homes Sold"]
        },
        {
            icon: <FaMoneyBillWave className="service-icon" />,
            title: "Property Selling",
            description: "Get the best value for your property with our marketing expertise and wide network of buyers.",
            features: ["Valuation", "Marketing", "Showings", "Closing"],
            stats: ["15%", "Above Market Price", "30", "Days Average Listing"]
        },
        {
            icon: <FaChartLine className="service-icon" />,
            title: "Property Management",
            description: "Professional management services for rental properties. We handle everything so you don't have to.",
            features: ["Tenant Screening", "Rent Collection", "Maintenance", "Accounting"],
            stats: ["99%", "Rent Collection", "24/7", "Support"]
        },
        {
            icon: <FaBuilding className="service-icon" />,
            title: "Commercial Real Estate",
            description: "Office spaces, retail locations, and industrial properties for your business needs.",
            features: ["Location Analysis", "Lease Negotiation", "Space Planning", "Relocation"],
            stats: ["200+", "Commercial Clients", "50M+", "Square Feet Managed"]
        },
        {
            icon: <FaLightbulb className="service-icon" />,
            title: "Investment Consulting",
            description: "Expert advice on real estate investments to maximize your returns and build wealth.",
            features: ["Market Analysis", "Investment Strategy", "Portfolio Management", "Risk Assessment"],
            stats: ["20%", "Average ROI", "100M+", "Assets Managed"]
        },
        {
            icon: <FaBalanceScale className="service-icon" />,
            title: "Legal Services",
            description: "Legal support for all real estate transactions to ensure compliance and protect your interests.",
            features: ["Contract Review", "Title Services", "Dispute Resolution", "Regulatory Compliance"],
            stats: ["100%", "Compliance Rate", "500+", "Cases Handled"]
        }
    ];

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    return (
        <div className="services">
            {/* Hero Section */}
            <div className="services-hero">
                <div className="hero-content">
                    <h1>Premium Real Estate Services</h1>
                    <p>Comprehensive solutions tailored to your unique property needs</p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10,000+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">₦500B+</span>
                            <span className="stat-label">Property Value</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="services-container">
                <div className="services-header">
                    <h2>Our Comprehensive Services</h2>
                    <p>Discover how we can help you achieve your real estate goals with our expert services</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className={`service-card ${activeService === index ? 'active' : ''}`}
                            onClick={() => toggleService(index)}
                        >
                            <div className="service-card-inner">
                                <div className="service-icon-container">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                
                                <div className="service-features">
                                    <h4>What we offer:</h4>
                                    <ul>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="feature-icon"><FaCheck /></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-stats">
                                    {service.stats.map((stat, idx) => (
                                        <div key={idx} className="stat">
                                            <span className="stat-value">{stat}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="btn service-btn">
                                    {activeService === index ? 'Collapse' : 'Learn More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Process Section */}
            <div className="process-section">
                <div className="process-container">
                    <div className="process-header">
                        <h2>Our Simple 4-Step Process</h2>
                        <p>We make real estate transactions smooth and stress-free</p>
                    </div>
                    
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-visual">
                                <div className="step-number">01</div>
                                <div className="step-line"></div>
                            </div>
                            <div className="step-content">
                                <h4>Initial Consultation</h4>
                                <p>We listen to your needs, understand your goals, and assess your requirements</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="step-visual">
                                <div className="step-number">02</div>
                                <div className="step-line"></div>
                            </div>
                            <div className="step-content">
                                <h4>Strategic Planning</h4>
                                <p>We develop a customized plan tailored to your specific situation and objectives</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="step-visual">
                                <div className="step-number">03</div>
                                <div className="step-line"></div>
                            </div>
                            <div className="step-content">
                                <h4>Execution</h4>
                                <p>Our team implements the plan with precision and attention to detail</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="step-visual">
                                <div className="step-number">04</div>
                            </div>
                            <div className="step-content">
                                <h4>Ongoing Support</h4>
                                <p>We provide continuous support and follow-up to ensure your satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="services-cta">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2>Start Your Real Estate Journey Today</h2>
                        <p>Join thousands of satisfied clients who have achieved their property goals with our expertise</p>
                        
                        <div className="cta-features">
                            <div className="cta-feature">
                                <span className="feature-icon"><FaStar /></span>
                                <span>Free Initial Consultation</span>
                            </div>
                            <div className="cta-feature">
                                <span className="feature-icon"><FaBolt /></span>
                                <span>Quick Response Time</span>
                            </div>
                            <div className="cta-feature">
                                <span className="feature-icon"><FaTrophy /></span>
                                <span>Award-Winning Service</span>
                            </div>
                        </div>

                        <div className="cta-buttons">
                            <button className="btn btn-primary">
                                <FaPhone /> Get Free Consultation
                            </button>
                            <button className="btn btn-secondary">
                                <FaEnvelope /> Contact Our Team
                            </button>
                        </div>
                    </div>
                    
                    <div className="cta-image">
                        <div className="image-placeholder">
                            <FaHome className="cta-main-icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <div className="testimonials-container">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="quote-icon"><FaQuoteLeft /></div>
                            <div className="testimonial-text">
                                "The team helped us find our dream home in just 2 weeks! Professional service from start to finish."
                            </div>
                            <div className="testimonial-author">
                                <span className="author-name">Chinedu Okoro</span>
                                <span className="author-role">Lagos Home Buyer</span>
                            </div>
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="quote-icon"><FaQuoteLeft /></div>
                            <div className="testimonial-text">
                                "Sold our property 20% above market value. Their marketing strategy is exceptional!"
                            </div>
                            <div className="testimonial-author">
                                <span className="author-name">Aisha Mohammed</span>
                                <span className="author-role">Abuja Property Seller</span>
                            </div>
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="quote-icon"><FaQuoteLeft /></div>
                            <div className="testimonial-text">
                                "Property management made easy. They handle everything efficiently. Highly recommended!"
                            </div>
                            <div className="testimonial-author">
                                <span className="author-name">Emeka Nwosu</span>
                                <span className="author-role">Port Harcourt Investor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}