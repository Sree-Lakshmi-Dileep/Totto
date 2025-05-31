import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Toys.css';
import toys from '../Toys/ToyList';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Toys() {
  const query = useQuery();
  const navigate = useNavigate();
  const searchQuery = query.get('search') || '';
  const priceQuery = query.get('price');

  // Helper to parse price string or number into a number
  const parsePrice = (price) => {
    if (typeof price === 'string') {
      return parseInt(price.replace(/[₹,]/g, ''), 10);
    }
    return price;
  };

  // Filter function based on price ranges from URL param
  const filterByPrice = (toy) => {
    const price = parsePrice(toy.price);

    switch (priceQuery) {
      case 'Under ₹250':
        return price < 250;
      case '₹250 - ₹500':
        return price >= 250 && price <= 500;
      case '₹500 - ₹750':
        return price > 500 && price <= 750;
      case '₹750 - ₹1000':
        return price > 750 && price <= 1000;
      case 'Above ₹1000':
        return price > 1000;
      default:
        return true;
    }
  };

  // Apply search and price filters
  const filteredToys = toys
    .filter(toy =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(filterByPrice);

  return (
    <div className="toycontain">
      <h1 className="mainhead">All Toys</h1>
      <div className="toy-list">
        {filteredToys.length > 0 ? (
          filteredToys.map(toy => (
            <div key={toy.id} className="toy-card">
              <img src={toy.imageUrl} alt={toy.name} width="200" />
              <h3>{toy.name}</h3>
              <p>₹{toy.price.toFixed(2)}</p>
              <button
                className="more"
                onClick={() => navigate(`/toys/${toy.id}`)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>No toys found matching "{searchQuery || priceQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default Toys;
