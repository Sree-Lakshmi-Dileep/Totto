import React from 'react';
import { useParams } from 'react-router-dom';
import toys from '../Toys/ToyList'; // 

function ToyDetail() {
  const { toyId } = useParams();
  const toy = toys.find((t) => t.id.toString() === toyId);

  if (!toy) {
    return <p>Toy not found.</p>;
  }

  return (
    <div className="toy-details">
      <h1>{toy.name}</h1>
      <img src={toy.imageUrl} alt={toy.name} />
      <p><strong>Category:</strong> {toy.category}</p>
      <p><strong>Price:</strong> ₹{toy.price.toFixed(2)}</p>
      <p><strong>Description:</strong> {toy.description || "No description available."}</p>
    </div>
  );
}

export default ToyDetail;
