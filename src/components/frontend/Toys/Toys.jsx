import React from 'react';
import './Toys.css';
import toys from './ToyList';

// Dummy toy data


function ToysPage() {
  return (
    <div className='toycontain'>
      <h1 className='mainhead'>All Toys</h1>
      <div className="toy-list">
        {toys.map((toy) => (
          <div key={toy.id} className="toy-card">
            <img src={toy.imageUrl} alt={toy.name} width="200"  />
            <h3>{toy.name}</h3>
            <p>INR {toy.price.toFixed(2)}</p>
            <button className="more">view details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToysPage;
