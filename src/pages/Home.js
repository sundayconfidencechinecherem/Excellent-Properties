import { useState } from "react";
import properties from "../data/Properties";
import PropertyCard from "../components/PropertyCard";
import "../css/Home.css";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        type: "all",
        priceRange: "all",
        bedrooms: "all",
        location: "all",
        status: "all"
    });

    const propertyTypes = ["all", "Apartment", "Villa", "Studio", "Duplex"];
    const priceRanges = [
        "all",
        "under-50m",
        "50m-100m",
        "100m-200m",
        "200m+"
    ];
    const bedroomOptions = ["all", "1", "2", "3", "4", "5+"];
    const locations = ["all", "Lagos", "Abuja", "Port Harcourt", "Enugu"];
    const statusOptions = ["all", "For Sale", "For Rent"];

    const filteredProperties = properties.filter(property => {
        // Search term filter
        const matchesSearch = searchTerm === "" ||
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.description.toLowerCase().includes(searchTerm.toLowerCase());

        // Type filter
        const matchesType = filters.type === "all" || property.type === filters.type;

        // Price range filter
        const price = parseInt(property.price.replace('₦', '').replace(/,/g, ''));
        let matchesPrice = true;
        switch (filters.priceRange) {
            case "under-50m":
                matchesPrice = price < 50000000;
                break;
            case "50m-100m":
                matchesPrice = price >= 50000000 && price < 100000000;
                break;
            case "100m-200m":
                matchesPrice = price >= 100000000 && price < 200000000;
                break;
            case "200m+":
                matchesPrice = price >= 200000000;
                break;
            default:
                matchesPrice = true;
        }

        // Bedrooms filter
        const matchesBedrooms = filters.bedrooms === "all" || 
            (filters.bedrooms === "5+" ? property.bedrooms >= 5 : property.bedrooms === parseInt(filters.bedrooms));

        // Location filter
        const matchesLocation = filters.location === "all" || 
            property.location.toLowerCase().includes(filters.location.toLowerCase());

        // Status filter
        const matchesStatus = filters.status === "all" || property.status === filters.status;

        return matchesSearch && matchesType && matchesPrice && matchesBedrooms && matchesLocation && matchesStatus;
    });

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const clearFilters = () => {
        setFilters({
            type: "all",
            priceRange: "all",
            bedrooms: "all",
            location: "all",
            status: "all"
        });
        setSearchTerm("");
    };

    return (
        <div className="home">
            {/* Hero Section with Search */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Find Your Dream Home in Nigeria</h1>
                    <p>Search from thousands of properties across major cities</p>
                    <div className="hero-search">
                        <input
                            type="text"
                            placeholder="Search by location, property type, or keyword..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <button className="btns search-btn"> Search</button>
                    </div>
                </div>
            </div>

            {/* Advanced Search Filters */}
            <div className="advanced-search">
                <div className="container">
                    <div className="search-header">
                        <h3>Advanced Search</h3>
                        <button onClick={clearFilters} className="clear-filters">
                            Clear All Filters
                        </button>
                    </div>
                    
                    <div className="filter-grid">
                        {/* Property Type Filter */}
                        <div className="filter-group">
                            <label>Property Type</label>
                            <select 
                                value={filters.type} 
                                onChange={(e) => handleFilterChange("type", e.target.value)}
                            >
                                {propertyTypes.map(type => (
                                    <option key={type} value={type}>
                                        {type === "all" ? "All Types" : type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div className="filter-group">
                            <label>Price Range</label>
                            <select 
                                value={filters.priceRange} 
                                onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                            >
                                <option value="all">All Prices</option>
                                <option value="under-50m">Under ₦50M</option>
                                <option value="50m-100m">₦50M - ₦100M</option>
                                <option value="100m-200m">₦100M - ₦200M</option>
                                <option value="200m+">₦200M+</option>
                            </select>
                        </div>

                        {/* Bedrooms Filter */}
                        <div className="filter-group">
                            <label>Bedrooms</label>
                            <select 
                                value={filters.bedrooms} 
                                onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                            >
                                {bedroomOptions.map(bed => (
                                    <option key={bed} value={bed}>
                                        {bed === "all" ? "Any Bedrooms" : bed === "5+" ? "5+ Bedrooms" : `${bed} Bedroom${bed > 1 ? 's' : ''}`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Location Filter */}
                        <div className="filter-group">
                            <label>Location</label>
                            <select 
                                value={filters.location} 
                                onChange={(e) => handleFilterChange("location", e.target.value)}
                            >
                                {locations.map(loc => (
                                    <option key={loc} value={loc}>
                                        {loc === "all" ? "All Locations" : loc}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Status Filter */}
                        <div className="filter-group">
                            <label>Status</label>
                            <select 
                                value={filters.status} 
                                onChange={(e) => handleFilterChange("status", e.target.value)}
                            >
                                {statusOptions.map(status => (
                                    <option key={status} value={status}>
                                        {status === "all" ? "All Status" : status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Active Filters Display */}
                    <div className="active-filters">
                        {filters.type !== "all" && (
                            <span className="active-filter">
                                Type: {filters.type} ✕
                            </span>
                        )}
                        {filters.priceRange !== "all" && (
                            <span className="active-filter">
                                Price: {filters.priceRange.replace('-', ' - ').replace('under-', 'Under ₦').replace('m', 'M').replace('+', '+')} ✕
                            </span>
                        )}
                        {filters.bedrooms !== "all" && (
                            <span className="active-filter">
                                Bedrooms: {filters.bedrooms} ✕
                            </span>
                        )}
                        {filters.location !== "all" && (
                            <span className="active-filter">
                                Location: {filters.location} ✕
                            </span>
                        )}
                        {filters.status !== "all" && (
                            <span className="active-filter">
                                Status: {filters.status} ✕
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Search Results */}
            <div className="search-results">
                <div className="container">
                    <div className="results-header">
                        <h2>
                            {filteredProperties.length} Property{filteredProperties.length !== 1 ? 'ies' : ''} Found
                            {searchTerm && ` for "${searchTerm}"`}
                        </h2>
                        <div className="sort-options">
                            <label>Sort by:</label>
                            <select>
                                <option value="newest">Newest First</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="bedrooms">Bedrooms</option>
                            </select>
                        </div>
                    </div>

                    <div className="property-grid">
                        {filteredProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    {filteredProperties.length === 0 && (
                        <div className="no-results">
                            <div className="no-results-icon">🔍</div>
                            <h3>No properties found</h3>
                            <p>Try adjusting your search criteria or clear some filters</p>
                            <button onClick={clearFilters} className="btn">
                                Clear All Filters
                            </button>
                        </div>
                    )}

                    {filteredProperties.length > 0 && (
                        <div className="load-more">
                            <button className="btn btn-outline">
                                Load More Properties
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Categories */}
            <div className="quick-categories">
                <div className="container">
                    <h2>Popular Searches</h2>
                    <div className="category-tags">
                        <button className="category-tag" onClick={() => setSearchTerm("Lekki")}>
                            Lekki Properties
                        </button>
                        <button className="category-tag" onClick={() => setSearchTerm("Apartment")}>
                            Apartments
                        </button>
                        <button className="category-tag" onClick={() => setFilters({...filters, priceRange: "under-50m"})}>
                            Under ₦50M
                        </button>
                        <button className="category-tag" onClick={() => setFilters({...filters, bedrooms: "3"})}>
                            3 Bedrooms
                        </button>
                        <button className="category-tag" onClick={() => setFilters({...filters, type: "Villa"})}>
                            Villas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}