import { Link } from "react-router-dom";
import "../css/Pcard.css";

export default function PropertyCard({ property }) {
    const formatPrice = (price) => {
        return price.replace('₦', '₦ ');
    };

    return (
        <div className="property-card">
            <div className="property-image">
                <img src={property.image} alt={property.title} />
                <div className="property-badges">
                    <span className="property-type">{property.type}</span>
                    <span className="property-status">{property.status}</span>
                </div>
                <div className="property-price">{formatPrice(property.price)}</div>
            </div>
            
            <div className="property-content">
                <h3>{property.title}</h3>
                <p className="property-location">📍 {property.location}</p>
                
                <p className="property-description">{property.description.substring(0, 100)}...</p>
                
                <div className="property-amenities">
                    {property.amenities.slice(0, 2).map((amenity, index) => (
                        <span key={index} className="amenity-tag">{amenity}</span>
                    ))}
                    {property.amenities.length > 2 && (
                        <span className="amenity-tag">+{property.amenities.length - 2} more</span>
                    )}
                </div>
                
                <div className="property-footer">
                    <div className="agent-info">
                        <span className="agent-name">Agent: {property.agent.name}</span>
                    </div>
                    <Link to={`/property/${property.id}`} className="view-details-btn">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}