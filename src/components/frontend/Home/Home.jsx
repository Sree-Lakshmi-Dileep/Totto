import React from 'react';
import './Home.css';




function Home() {
  const images = [
    {
      src: "https://duckduckbaby.in/cdn/shop/files/DDB4822_2.jpg?v=1719611821",
      caption: "Educational Toys",
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/puzzle/j/u/i/200-kids-building-blocks-toy-set-for-3-8-years-old-kids-boys-original-imahfzgcxqv7vpqm.jpeg?q=20&crop=false",
      caption: "Building Blocks",
    },
    {
      src: "https://media.istockphoto.com/id/1371667612/photo/cute-unicorn-isolated-on-white-background-plush-toys-for-kids-pink-colors.jpg?s=612x612&w=0&k=20&c=w1nEjiStj2y5HjfklGvdIKhADkdRWpb5p3gCVkkWuf4=",
      caption: "Plush Toys",
    },
    {
      src: "https://media.istockphoto.com/id/153499035/photo/back-to-school-painting-supplies.jpg?s=612x612&w=0&k=20&c=H0ncaaHoVZQSBe-MOhOEU7IhGPYC4QzwBrnzwmn-m-M=",
      caption: "Art & Craft",
    },
    {
      src: "https://thumbs.dreamstime.com/b/mini-remote-control-car-controller-white-background-miniature-isolated-ideal-fun-racing-toy-collections-375727858.jpg",
      caption: "Remote Control Cars",
    },
    {
      src: "https://target.scene7.com/is/image/Target/GUEST_674beb55-36fe-4a04-bb81-b7c890f3a7b6?wid=300&hei=300&fmt=pjpeg",
      caption: "Dolls",
    },
    {
      src: "https://m.media-amazon.com/images/I/41Rr6LrZgcL.jpg",
      caption: "Pretend Play",
    },
    {
      src: "https://m.media-amazon.com/images/I/71hInyyallL._AC_UF1000,1000_QL80_.jpg",
      caption: "Outdoor Toys",
    },
    {
      src: "https://m.media-amazon.com/images/I/415ul8gB3yL._AC_UF1000,1000_QL80_.jpg",
      caption: "Board Games",
    },
  ];

  return (
    <div className='container'>
      <section className="welcomes">
        <h1 className='head'>Unbox the Magic of Childhood</h1>
        <img src="/welcome.png" alt="Welcome" className="welcome" />
      </section>

      <section className="category">
        {images.map((item, index) => (
          <div className="cat" key={index}>
            <img src={item.src} alt={`Category: ${item.caption}`} className="cat-image" />
            <p className="caption">{item.caption}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;

