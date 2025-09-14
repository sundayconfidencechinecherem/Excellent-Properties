import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import "../css/Favorites.css";

const Favorites = () => {
    const { isLoggedIn } = useAuth();
    const { favorites } = useFavorites();

    if (!isLoggedIn) {
        return (
            <div className="favorites-page">
                <div className="container">
                    <h1>Your Favorites</h1>
                    <div className="login-prompt">
                        <p>Please log in to view your favorite properties.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-page">
            <div className="container">
                
                {favorites.length === 0 ? (
                    <div className="favorites-placeholder">
                        
                        <h3>No favorites yet</h3>
                        <p>Start browsing properties and add them to your favorites!</p>
                        <Link to="/properties" className="browse-link">
                            Browse Properties
                        </Link>
                    </div>
                ) : (
                    <>
                    <h1>Your Favorites</h1>
                        <p className="favorites-count">You have {favorites.length} favorite property{favorites.length !== 1 ? 'ies' : ''}</p>
                        <div className="favorites-grid">
                            {favorites.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Favorites;