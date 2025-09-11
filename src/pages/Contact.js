import { useState } from "react";
import "../css/Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const services = [
        "Property Buying",
        "Property Selling", 
        "Property Management",
        "Commercial Real Estate",
        "Investment Consulting",
        "Legal Services"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Formspree integration
            const response = await fetch("https://formspree.io/f/mdkgevrk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", phone: "", service: "", message: "" });
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            setSubmitStatus("error");
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Contact Excellent Properties</h1>
                        <p>Your journey to finding the perfect property starts with a conversation</p>
                    </div>
                </div>
            </section>

            <div className="contact-container">
                {/* Main Content */}
                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="info-description">
                            Have questions about our services or ready to get started? 
                            Reach out to us through any of the channels below.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">📧</div>
                                <div className="info-details">
                                    <h4>Email Us</h4>
                                    <p>info@excellentproperties.com</p>
                                    <p>support@excellentproperties.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div className="info-details">
                                    <h4>Call Us</h4>
                                    <p>+234 812 3456 789</p>
                                    <p>+234 809 8765 432</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">🏢</div>
                                <div className="info-details">
                                    <h4>Visit Us</h4>
                                    <p>123 Victoria Island</p>
                                    <p>Lagos, Nigeria</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">🕒</div>
                                <div className="info-details">
                                    <h4>Business Hours</h4>
                                    <p>Monday - Friday: 8AM - 6PM</p>
                                    <p>Saturday: 9AM - 4PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Follow Our Journey</h4>
                            <div className="social-icons">
                                <a href="#" className="social-icon" aria-label="Facebook">
                                    <span>📘</span>
                                </a>
                                <a href="#" className="social-icon" aria-label="Instagram">
                                    <span>📸</span>
                                </a>
                                <a href="#" className="social-icon" aria-label="Twitter">
                                    <span>🐦</span>
                                </a>
                                <a href="#" className="social-icon" aria-label="LinkedIn">
                                    <span>💼</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <div className="contact-form-card">
                            <h2>Send us a Message</h2>
                            {submitStatus === "success" && (
                                <div className="alert alert-success">
                                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className="alert alert-error">
                                    Sorry, there was an error sending your message. Please try again or contact us directly.
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Full Name *"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email Address *"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select Service *</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your property needs... *"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Emergency Contact */}
                        <div className="emergency-contact">
                            <div className="emergency-card">
                                <div className="emergency-icon"></div>
                                <div className="emergency-content">
                                    <h3>Call</h3>
                                    <p>Need immediate assistance? Call our emergency line:</p>
                                    <p className="emergency-phone">+234 807 6543 210</p>
                                    <p>Available 24/7 for urgent property matters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <section className="map-section">
                    <h2>Visit Our Office</h2>
                    <div className="map-container">
                        {/* Google Maps Embed */}
                        <div className="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.444650455897!2d3.422194274915753!3d6.42928322378129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%20Island!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Excellent Properties Office Location"
                            ></iframe>
                        </div>
                        
                        <div className="map-info">
                            <h3>📍 Our Location</h3>
                            <p>123 Victoria Island, Lagos, Nigeria</p>
                            <p>We're located in the heart of Victoria Island, easily accessible from all parts of the city.</p>
                            <a 
                                href="https://maps.google.com/?q=123+Victoria+Island,Lagos,Nigeria" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="directions-btn"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}