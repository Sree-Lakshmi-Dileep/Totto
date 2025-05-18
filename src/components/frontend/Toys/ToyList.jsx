{/*import React, { useEffect, useState } from 'react';

function ToyList() {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/toys')
      .then(res => res.json())
      .then(data => {
        setToys(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching toys:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading toys...</p>;

  return (
    <div>
      <h2>Available Toys</h2>
      {toys.length === 0 && <p>No toys found.</p>}
      <ul className="toy-list">
  {toys.map((toy) => (
    <li className="toy-card" key={toy._id}>
      <h3>{toy.name}</h3>
      <img src={toy.image} alt={toy.name} />
      <p>{toy.description}</p>
      <p><strong>Price:</strong> ${toy.price}</p>
      <p><strong>Category:</strong> {toy.category}</p>
      <p><strong>In Stock:</strong> {toy.instock ? "Yes" : "No"}</p>
      {!toy.instock && <span className="sold-out">SOLD OUT</span>}
    </li>
  ))}
</ul>

    </div>
  );
}
*/}



const toys = [
  {
    id: 1,
    name: "Fluffy Bear",
    category: "soft",
    description: "A super soft teddy bear.",
    imageUrl: "https://florakuwait.com/cdn/shop/products/Small_Teddy_Bear.jpg?v=1675782989",
    price: 15.99,
  },
  {
    id: 2,
    name: "Pretend Chef Set",
    category: "pretend",
    description: "Fun kitchen playset for kids.",
    imageUrl: "https://m.media-amazon.com/images/I/71GdzRKsBRL.jpg",
    price: 25.5,
  },
  {
    id: 3,
    name: "Soft Bunny",
    category: "soft",
    description: "Cute soft bunny toy.",
    imageUrl: "https://m.media-amazon.com/images/I/51FlyPv2VTL._AC_UF1000,1000_QL80_.jpg",
    price: 12.0,
  },
  {
    id: 4,
    name: "Pretend Doctor Kit",
    category: "pretend",
    description: "Doctor kit for imaginative play.",
    imageUrl: "https://m.media-amazon.com/images/I/81ARZdKVaWL.jpg",
    price: 30.0,
  },

  {
  id: 5,
  name: "Lego Building Set",
  category: "blocks",
  description: "Creative building blocks for kids aged 6+.",
  imageUrl: "https://m.media-amazon.com/images/I/41jUe6y+Q2L._AC_UF1000,1000_QL80_.jpg",
  price: 40.99,
},
{
  id: 6,
  name: "Stuffed Elephant",
  category: "soft",
  description: "Cuddly and huggable stuffed elephant.",
  imageUrl: "https://m.media-amazon.com/images/I/8141M2KiEfL.jpg",
  price: 18.5,
},
{
  id: 7,
  name: "Mini Tool Kit",
  category: "pretend",
  description: "Pretend tool set for junior builders.",
  imageUrl: "https://m.media-amazon.com/images/I/61O2ghfd4nL.jpg",
  price: 22.0,
},
{
  id: 8,
  name: "Magnetic Blocks",
  category: "blocks",
  description: "Colorful magnetic building blocks.",
  imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/3/RF/DB/KX/43965183/magnetic-blocks-magnetic-toys-for-toddlers-kids-magnetic-building-blocks.jpg",
  price: 29.99,
}


];
export default toys;