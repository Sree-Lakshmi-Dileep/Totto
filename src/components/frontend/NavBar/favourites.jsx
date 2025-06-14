import React from 'react';
import { useNavigate } from 'react-router-dom';
import toys from '../Toys/ToyList'; // use same toy data
import './favourites.css'; // optional: add styling

const FavouritesPage = () => {
  const navigate = useNavigate();

  // Temporary mock: Replace with dynamic list from context/localStorage/backend
  const favouriteIds = [1, 3, 5]; // Example: toy IDs user liked

  const favouriteToys = toys.filter(toy => favouriteIds.includes(toy.id));

  return (
    <div className="favourites-container">
      <h1 className="favourites-title">Your Favourite Toys</h1>
      {favouriteToys.length > 0 ? (
        <div className="favourites-grid">
          {favouriteToys.map(toy => (
            <div key={toy.id} className="favourite-card">
              <img src={toy.imageUrl} alt={toy.name} className="favourite-img" />
              <h3>{toy.name}</h3>
              <p>₹{toy.price.toFixed(2)}</p>
              <button onClick={() => navigate(`/toys/${toy.id}`)} className="details-button">
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favourites added yet.</p>
      )}
    </div>
  );
};

export default FavouritesPage;
