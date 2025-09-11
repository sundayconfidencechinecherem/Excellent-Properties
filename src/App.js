import { BrowserRouter as Router, Routes, Route,  Navigate } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <SearchProvider>
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/property/:id" element={<PropertyDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </Router>
        </SearchProvider>
    );
}