import React from 'react';
import { useLocation } from 'react-router-dom';
import './Toys.css';
import toys from './ToyList';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Toys() {
  const query = useQuery();
  const searchQuery = query.get('search') || '';

  const filteredToys = toys.filter(toy =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='toycontain'>
      <h1 className='mainhead'>All Toys</h1>
      <div className="toy-list">
        {filteredToys.length > 0 ? (
          filteredToys.map(toy => (
            <div key={toy.id} className="toy-card">
              <img src={toy.imageUrl} alt={toy.name} width="200" />
              <h3>{toy.name}</h3>
              <p>INR {toy.price.toFixed(2)}</p>
              <button className="more">view details</button>
            </div>
          ))
        ) : (
          <p>No toys found matching "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default Toys;
