import house0 from "../images/house0.jpg";
import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";



const properties = [
    {
        id: 0,
        title: "Modern 3-Bedroom Apartment in Lekki",
        location: "Lekki Phase 1, Lagos",
        price: "₦120,000,000",
        image: house0,
        description: "A stunning modern apartment located in the heart of Lekki Phase 1. This property features 3 spacious bedrooms, 2 modern bathrooms, a fully equipped kitchen, and a spacious living area. The apartment complex includes 24/7 security, swimming pool, gym, and dedicated parking.",
        bedrooms: 3,
        bathrooms: 2,
        area: "1200 sq ft",
        amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Generator"],
        type: "Apartment",
        status: "For Sale",
        yearBuilt: 2020,
        agent: {
            name: "Chinedu Okoro",
            phone: "+234 812 345 6789",
            email: "chinedu@elitehomes.com"
        }
    },
    {
        id: 1,
        title: "Luxury 5-Bedroom Villa in Maitama",
        location: "Maitama, Abuja",
        price: "₦450,000,000",
        image: house1,
        description: "Exquisite luxury villa in the prestigious Maitama district. This magnificent property features 5 en-suite bedrooms, 4 bathrooms, a state-of-the-art kitchen, formal dining room, home office, and a beautiful garden with swimming pool. Perfect for luxury living and entertainment.",
        bedrooms: 5,
        bathrooms: 4,
        area: "3500 sq ft",
        amenities: ["Swimming Pool", "Garden", "Home Office", "Garage", "Security", "CCTV"],
        type: "Villa",
        status: "For Sale",
        yearBuilt: 2018,
        agent: {
            name: "Aisha Mohammed",
            phone: "+234 809 876 5432",
            email: "aisha@elitehomes.com"
        }
    },
    {
        id: 2,
        title: "Affordable 1-Bedroom Studio",
        location: "GRA, Enugu",
        price: "₦35,000,000",
        image: house2,
        description: "Perfect starter home for students and young professionals. This compact yet comfortable studio apartment features a modern kitchenette, combined living/sleeping area, and a clean bathroom. Located in a secure neighborhood with easy access to amenities.",
        bedrooms: 1,
        bathrooms: 1,
        area: "600 sq ft",
        amenities: ["Security", "Water Supply", "Internet Ready", "Parking"],
        type: "Studio",
        status: "For Sale",
        yearBuilt: 2015,
        agent: {
            name: "Emeka Nwosu",
            phone: "+234 803 456 7890",
            email: "emeka@elitehomes.com"
        }
    },
    {
        id: 3,
        title: "4-Bedroom Family Duplex",
        location: "GRA, Port Harcourt",
        price: "₦85,000,000",
        image: house3,
        description: "Beautiful family duplex in a quiet neighborhood. This property features 4 bedrooms, 3 bathrooms, spacious living areas, modern kitchen, and a lovely garden. Close to schools, markets, and hospitals. Perfect for family living.",
        bedrooms: 4,
        bathrooms: 3,
        area: "1800 sq ft",
        amenities: ["Garden", "Parking", "Security", "Play Area", "Generator"],
        type: "Duplex",
        status: "For Sale",
        yearBuilt: 2017,
        agent: {
            name: "Boma Hart",
            phone: "+234 807 654 3210",
            email: "boma@elitehomes.com"
        }
    }
];

export default properties;