import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

function Home() {
  const images = [
    {
      src: "https://duckduckbaby.in/cdn/shop/files/DDB4822_2.jpg?v=1719611821",
      caption: "Educational Toys",
      category:"education",
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/puzzle/j/u/i/200-kids-building-blocks-toy-set-for-3-8-years-old-kids-boys-original-imahfzgcxqv7vpqm.jpeg?q=20&crop=false",
      caption: "Building Blocks",
      category:"blocks",
    },
    {
      src: "https://media.istockphoto.com/id/1371667612/photo/cute-unicorn-isolated-on-white-background-plush-toys-for-kids-pink-colors.jpg?s=612x612&w=0&k=20&c=w1nEjiStj2y5HjfklGvdIKhADkdRWpb5p3gCVkkWuf4=",
      caption: "Soft Toys",
      category:"soft",
    },
    {
      src: "https://media.istockphoto.com/id/153499035/photo/back-to-school-painting-supplies.jpg?s=612x612&w=0&k=20&c=H0ncaaHoVZQSBe-MOhOEU7IhGPYC4QzwBrnzwmn-m-M=",
      caption: "Art & Craft",
      category:"artcraft",
    },
    {
      src: "https://thumbs.dreamstime.com/b/mini-remote-control-car-controller-white-background-miniature-isolated-ideal-fun-racing-toy-collections-375727858.jpg",
      caption: "Remote Control Cars",
      category:"battery",
    },
    {
      src: "https://target.scene7.com/is/image/Target/GUEST_674beb55-36fe-4a04-bb81-b7c890f3a7b6?wid=300&hei=300&fmt=pjpeg",
      caption: "Outdoor Toys",
      category:"outdoor",
    },
    {
      src: "https://m.media-amazon.com/images/I/41Rr6LrZgcL.jpg",
      caption: "Puzzles and board games",
      category:"board",
    },
    {
      src: "https://m.media-amazon.com/images/I/71hInyyallL._AC_UF1000,1000_QL80_.jpg",
      caption: "Pretend Play",
      category:"pretend"
    },
    {
      src: "https://m.media-amazon.com/images/I/415ul8gB3yL._AC_UF1000,1000_QL80_.jpg",
      caption: "Toddler",
      category:"toddler",
    },
  ];

  return (
    <div className='container'>
      <section className="welcomes">
        <h1 className='head'>Unbox the  <br /> Magic of Childhood....</h1>
        <img src="/welcome.png" alt="Welcome" className="welcome" />
      </section>

      <section className="category">
        {images.map((item, index) => (
          <Link to={`/category/${item.category}`} key={index} className="cat">
  <img src={item.src} alt={`Category: ${item.caption}`} className="cat-image" />
  <p className="caption">{item.caption}</p>
</Link>
        ))}
      </section>

      <div className="footer">
        <div className="footlogo">
          <img src="logo.png" alt="" className="footerlogo" />
        </div>
        <div className="footcontent">
          <div className="grid-item">
            <h1>USEFUL LINKS</h1>
            <div className="list">
              <Link to="/about"><li>About Us</li></Link>
              <li>Bulk Ordering</li>
              <li>Cancellation Policy</li>
            </div>
          </div>
          <div className="grid-item">
            <h1>SUPPORT</h1>
            <div className="list">
              <li>My Account</li>
              <li>Feedbacks</li>
              <li>Contact Us</li>
            </div>
          </div>
          <div className="grid-item">
            <h1>CONTACT US</h1>
            <div className="list">
              <li>Customer Care: care@totto.co.in</li>
              <li>Social media collabs: socialmedia@totto.co.in</li>
              <li>Affiliate Inquiries: inq@totto.co.in</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
