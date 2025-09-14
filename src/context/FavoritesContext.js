// context/FavoritesContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { isLoggedIn, user } = useAuth();

  // Load favorites from localStorage when user logs in
  useEffect(() => {
    if (isLoggedIn && user) {
      const userFavorites = localStorage.getItem(`favorites_${user.email}`);
      if (userFavorites) {
        setFavorites(JSON.parse(userFavorites));
      }
    } else {
      setFavorites([]);
    }
  }, [isLoggedIn, user]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoggedIn && user && favorites.length > 0) {
      localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favorites));
    }
  }, [favorites, isLoggedIn, user]);

  const addToFavorites = (property) => {
    setFavorites(prev => {
      // Check if property is already in favorites
      if (!prev.some(fav => fav.id === property.id)) {
        return [...prev, property];
      }
      return prev;
    });
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(prev => prev.filter(property => property.id !== propertyId));
  };

  const clearFavorites = () => {
    setFavorites([]);
    if (isLoggedIn && user) {
      localStorage.removeItem(`favorites_${user.email}`);
    }
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    clearFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};