// context/SearchContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};

export const SearchProvider = ({ children }) => {
    const [searchState, setSearchState] = useState({
        query: "",
        filters: {
            type: "all",
            priceRange: "all",
            bedrooms: "all",
            location: "all",
            status: "all"
        },
        sortBy: "newest"
    });

    const updateSearch = (updates) => {
        setSearchState(prev => ({ ...prev, ...updates }));
    };

    const clearSearch = () => {
        setSearchState({
            query: "",
            filters: {
                type: "all",
                priceRange: "all",
                bedrooms: "all",
                location: "all",
                status: "all"
            },
            sortBy: "newest"
        });
    };

    return (
        <SearchContext.Provider value={{
            searchState,
            updateSearch,
            clearSearch
        }}>
            {children}
        </SearchContext.Provider>
    );
};