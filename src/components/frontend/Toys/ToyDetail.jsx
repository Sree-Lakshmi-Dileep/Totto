import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toys from '../Toys/ToyList';
import './ToyDetail.css';

function ToyDetail() {
  const { toyId } = useParams();
  const toy = toys.find(t => t.id.toString() === toyId);
  const [mainImage, setMainImage] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!toy) return;

    if (toy.images && toy.images.length > 0) {
      setMainImage(toy.images[0]);
    } else if (toy.imageUrl) {
      setMainImage(toy.imageUrl);
    } else if (toy.image) {
      setMainImage(Array.isArray(toy.image) ? toy.image[0] : toy.image);
    } else {
      setMainImage('');
    }

    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favs.some(fav => fav.id === toy.id));
  }, [toy]);

  const handleAddToFavorites = () => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favs.find(f => f.id === toy.id);

    let updatedFavorites;
    if (exists) {
      updatedFavorites = favs.filter(f => f.id !== toy.id);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...favs, toy];
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy "${toy.name}" for ₹${toy.price.toFixed(2)}!`);
  };

  if (!toy) return <p>Toy not found.</p>;

  return (
    <div className="toy-details">
      <div className="det-left">
        {mainImage ? (
          <img src={mainImage} alt={toy.name} className="d_img" />
        ) : (
          <p>No image available.</p>
        )}
        {(toy.images || (Array.isArray(toy.image) ? toy.image : [toy.image || toy.imageUrl])).map((img, idx) =>
          img ? (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              className={`thumbnail ${mainImage === img ? 'active' : ''}`}
              onClick={() => setMainImage(img)}
              style={{ cursor: 'pointer', width: '50px', marginRight: '5px' }}
            />
          ) : null
        )}
      </div>

      <div className="det-right">
        <h1>{toy.name}</h1>
        <p className="det-p1">{toy.description || "No description available."}</p>
        <p className="det-p2"><strong>Category:</strong> {toy.category}</p>
        <p className="det-p3"><strong>Price:</strong> ₹{toy.price.toFixed(2)}</p>

        <div className="buttons-container" style={{ marginTop: '20px' }}>
          <button
            className={`btn-favorite ${isFavorite ? 'favorited' : ''}`}
            onClick={handleAddToFavorites}
            style={{ marginRight: '10px', padding: '10px 20px' }}
          >
            {isFavorite ? '❤️ Added to Favorites' : '♡ Add to Favorites'}
          </button>

          <button
            className="btn-buy"
            onClick={handleBuyNow}
            style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToyDetail;
