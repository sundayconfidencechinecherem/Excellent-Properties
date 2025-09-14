import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { 
  FaHeart, 
  FaRegHeart, 
  FaMapMarkerAlt, 
  FaBed, 
  FaBath, 
  FaRulerCombined,
  FaUser,
  FaArrowRight
} from "react-icons/fa";
import "../css/Pcard.css";

export default function PropertyCard({ property }) {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    
    const isFavorite = favorites.some(fav => fav.id === property.id);
    
    const formatPrice = (price) => {
        return price.replace('₦', '₦ ');
    };

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavorites(property.id);
        } else {
            addToFavorites(property);
        }
    };

    return (
        <div className="property-card">
            <div className="property-image">
                <img src={property.image} alt={property.title} />
                <div className="property-badges">
                    <span className="property-type">{property.type}</span>
                    <span className="property-status">{property.status}</span>
                </div>
                <button 
                    className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
                    onClick={handleFavoriteClick}
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
            
            <div className="property-content">
                <p className="property-price">{formatPrice(property.price)}</p>
                <h3>{property.title}</h3>
                <p className="property-location">
                    <FaMapMarkerAlt className="location-icon" /> 
                    {property.location}
                </p>
                
                <div className="property-meta">
                    <span className="meta-item">
                        <FaBed className="meta-icon" /> 
                        {property.bedrooms} beds
                    </span>
                    <span className="meta-item">
                        <FaBath className="meta-icon" /> 
                        {property.bathrooms} baths
                    </span>
                    <span className="meta-item">
                        <FaRulerCombined className="meta-icon" /> 
                        {property.area}
                    </span>
                </div>
                
                <p className="property-description">{property.description.substring(0, 80)}...</p>
                
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
                        <FaUser className="agent-icon" />
                        <span className="agent-name">{property.agent.name}</span>
                    </div>
                    <Link to={`/property/${property.id}`} className="view-details-btn">
                        View Details <FaArrowRight className="arrow-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
}