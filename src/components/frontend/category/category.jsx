import React from 'react';
import { useParams } from 'react-router-dom';
import toys from '../Toys/Toys'; // ✅ Correct path to toys data

function Category() {
  const { category } = useParams();
  const filteredToys = toys.filter(toy => toy.category === category);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Toys</h2>
      <div className="toy-list">
        {filteredToys.map(toy => (
          <div key={toy.id} className="toy-card">
            <img src={toy.imageUrl} alt={toy.name} />
            <h3>{toy.name}</h3>
            <p>{toy.description}</p>
            <p>${toy.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
