import { useParams } from "react-router-dom";
import properties from "../data/Properties";
import "../css/Pdetails.css"
export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) return <h2>Property not found</h2>;

  return (
    <div className="property-details">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p><b>Location:</b> {property.location}</p>
      <p><b>Price:</b> {property.price}</p>
      <p>{property.description}</p>
      <button className="btn">Contact Agent</button>
    </div>
  );
}
