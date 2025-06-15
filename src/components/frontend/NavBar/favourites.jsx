import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './favourites.css';

const FavouritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, []);

  const handleRemove = (toyId) => {
    const updated = favorites.filter(t => t.id !== toyId);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="favourites-container">
      <h1 className="favourites-title">Your Favourite Toys</h1>

      {favorites.length > 0 ? (
        <div className="favourites-grid">
          {favorites.map(toy => (
            <div key={toy.id} className="favourite-card">
              <img src={toy.imageUrl || toy.images?.[0]} alt={toy.name} className="favourite-img" />
              <h3>{toy.name}</h3>
              <p>₹{toy.price.toFixed(2)}</p>
              <div className="fav-buttons">
                <button onClick={() => navigate(`/toys/${toy.id}`)} className="details-button">
                  View Details
                </button>
                <button onClick={() => handleRemove(toy.id)} className="remove-button">
                  ❌ Remove
                </button>
              </div>
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
