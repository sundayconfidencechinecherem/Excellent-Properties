import { useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import properties from "../data/Properties";
import { 
  FaHeart, 
  FaRegHeart, 
  FaMapMarkerAlt, 
  FaBed, 
  FaBath, 
  FaRulerCombined,
  FaBuilding,
  FaTelegram,
  FaEnvelope,
  FaCheck,
  FaUser,
  FaArrowLeft
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Pdetails.css";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  
  const isFavorite = favorites.some(fav => fav.id === property?.id);

  if (!property) return <h2>Property not found</h2>;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property);
    }
  };

  const handleContactAgent = () => {
    alert(`Contacting agent: ${property.agent.name}\nPhone: ${property.agent.phone}\nEmail: ${property.agent.email}`);
  };

  return (
    <div className="property-details">
      <Link to="/properties" className="back-button">
        <FaArrowLeft /> Back to Properties
      </Link>
      
      <div className="property-details-header">
        <div className="property-image-container">
          <img src={property.image} alt={property.title} />
          <button 
            className={`favorite-btn large ${isFavorite ? 'favorited' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
        
        <div className="property-info">
          <h1>{property.title}</h1>
          <p className="property-location">
            <FaMapMarkerAlt className="location-icon" /> 
            {property.location}
          </p>
          <p className="property-price">{property.price}</p>
          
          <div className="property-badges">
            <span className="property-type">{property.type}</span>
            <span className="property-status">{property.status}</span>
          </div>
          
          <div className="property-stats">
            <div className="stat">
              <span className="stat-icon"><FaBed /></span>
              <span className="stat-value">{property.bedrooms} Bedrooms</span>
            </div>
            <div className="stat">
              <span className="stat-icon"><FaBath /></span>
              <span className="stat-value">{property.bathrooms} Bathrooms</span>
            </div>
            <div className="stat">
              <span className="stat-icon"><FaRulerCombined /></span>
              <span className="stat-value">{property.area}</span>
            </div>
            <div className="stat">
              <span className="stat-icon"><FaBuilding /></span>
              <span className="stat-value">Built in {property.yearBuilt}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="property-details-content">
        <div className="description-section">
          <h2>Description</h2>
          <p>{property.description}</p>
        </div>
        
        <div className="amenities-section">
          <h2>Amenities</h2>
          <div className="amenities-grid">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <span className="amenity-icon"><FaCheck /></span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="agent-section">
          <h2>Contact Agent</h2>
          <div className="agent-card">
            <div className="agent-info">
              <div className="agent-header">
              <h3><FaUser  className="agent-avatar"/>{property.agent.name}</h3>    
              <p><FaTelegram /> {property.agent.phone}</p>
              <p><FaEnvelope /> {property.agent.email}</p>
              </div>
            </div>
            <button className="btn contact-btn" onClick={handleContactAgent}>
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}