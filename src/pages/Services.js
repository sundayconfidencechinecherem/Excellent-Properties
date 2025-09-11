import "../css/Services.css";

export default function Services() {
    const services = [
        {
            icon: "🏠",
            title: "Property Buying",
            description: "Find your dream home with our expert guidance. We help you through every step of the buying process.",
            features: ["Property Search", "Viewing Arrangements", "Negotiation", "Closing Support"]
        },
        {
            icon: "💰",
            title: "Property Selling",
            description: "Get the best value for your property with our marketing expertise and wide network of buyers.",
            features: ["Valuation", "Marketing", "Showings", "Closing"]
        },
        {
            icon: "📊",
            title: "Property Management",
            description: "Professional management services for rental properties. We handle everything so you don't have to.",
            features: ["Tenant Screening", "Rent Collection", "Maintenance", "Accounting"]
        },
        {
            icon: "🏢",
            title: "Commercial Real Estate",
            description: "Office spaces, retail locations, and industrial properties for your business needs.",
            features: ["Location Analysis", "Lease Negotiation", "Space Planning", "Relocation"]
        },
        {
            icon: "📈",
            title: "Investment Consulting",
            description: "Expert advice on real estate investments to maximize your returns and build wealth.",
            features: ["Market Analysis", "Investment Strategy", "Portfolio Management", "Risk Assessment"]
        },
        {
            icon: "⚖️",
            title: "Legal Services",
            description: "Legal support for all real estate transactions to ensure compliance and protect your interests.",
            features: ["Contract Review", "Title Services", "Dispute Resolution", "Regulatory Compliance"]
        }
    ];

    return (
        <div className="services">
            <div className="services-hero">
                <h1>Our Services</h1>
                <p>Comprehensive real estate solutions tailored to your needs</p>
            </div>

            <div className="services-intro">
                <h2>Why Choose Our Services?</h2>
                <p>
                    With years of experience in the real estate industry, we offer a full range of services 
                    to meet all your property needs. From buying your first home to managing investment 
                    properties, we've got you covered.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, idx) => (
                                <li key={idx}>✓ {feature}</li>
                            ))}
                        </ul>
                        <button className="btn service-btn">Learn More</button>
                    </div>
                ))}
            </div>

            <div className="services-cta">
                <div className="cta-content">
                    <h2>Ready to Get Started?</h2>
                    <p>Contact us today to discuss how we can help with your real estate needs</p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary">Get Free Consultation</button>
                        <button className="btn btn-secondary">View Properties</button>
                    </div>
                </div>
            </div>

            <div className="process-section">
                <h2>Our Process</h2>
                <div className="process-steps">
                    <div className="process-step">
                        <div className="step-number">1</div>
                        <h4>Consultation</h4>
                        <p>We understand your needs and goals</p>
                    </div>
                    <div className="process-step">
                        <div className="step-number">2</div>
                        <h4>Planning</h4>
                        <p>Develop a customized strategy</p>
                    </div>
                    <div className="process-step">
                        <div className="step-number">3</div>
                        <h4>Execution</h4>
                        <p>Implement the plan efficiently</p>
                    </div>
                    <div className="process-step">
                        <div className="step-number">4</div>
                        <h4>Support</h4>
                        <p>Ongoing assistance and follow-up</p>
                    </div>
                </div>
            </div>
        </div>
    );
}