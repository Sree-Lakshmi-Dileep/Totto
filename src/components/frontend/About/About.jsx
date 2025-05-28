import React from 'react'
import './About.css'



function About() {
  return (
    <div className='abcontainer'>
        
       <h1 className='mhead'>
          About Us
       </h1>

       <h4 className='shead'>
         Welcome to Totto – Where Playtime Comes to Life!
      </h4>
      <div className="a">
          <p className='abcontent'>
            At Totto, we believe that childhood should be full of laughter, imagination, and endless possibilities. That's why we've created a magical world of toys that spark creativity, encourage learning, and bring pure joy to every child.
            Founded with love and a passion for play, Totto is more than just an online toy store — it’s a place where little dreams begin to grow. From cuddly plush toys to educational puzzles, art kits, and remote-controlled wonders, we carefully curate each product to ensure it’s safe, fun, and developmentally enriching.
          </p>
          <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/JZ/YI/LD/66302847/9189njyhiws-sl1500--500x500.jpg" alt="" className="ab_img1" />          
      </div>

      <h2 className='shead'>
           🎯 Our Mission
      </h2>        
      <div className="b">
        <img  className="ab_img2"src="/totto_about.jpg" alt="" />
        <p className='scontent'>
          To provide high-quality, affordable toys that inspire children to explore, learn, and express themselves through play.
        </p>
     </div>
      
     <h2 className='shead'>
       ❤️ Why Parents Trust Us
     </h2>
     <div className="c">
      <p className='sscontent'>✅ 
        Safety First – All our toys are tested and certified to meet international safety standards. <br />
        🧠 Learning Through Play – We offer a range of STEM toys, building blocks, and creative kits that help kids learn while having fun. <br />
        🚚 Fast & Reliable Delivery – We ship across the country with quick delivery and easy returns. <br />
        🤝 Customer First – Our friendly support team is here to make your experience joyful and hassle-free.
      </p>
      <img className="ab_img3"src="https://imgmedia.lbb.in/media/2019/03/5c94cd5aa613984c0936b22f_1553255770021.jpg" alt="" />
     </div>

     <h3 className='shead'>🌈 Join the Totto Family</h3>
     <div className="d">
      <p className='ssscontent'>
        We’re here to make every playtime memorable. Whether you’re shopping for a birthday, a surprise, or just because, Totto has something perfect for every child.
        Thank you for choosing us to be a part of your child’s journey. Let’s build a world of imagination — together!
      </p>
      <img src="https://www.parents.com/thmb/kM_QlzeK3qZwdranvQIBlLfls5Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prt-tier-3-primary-best-toys-1-year-old-ahuang-3028-24145742d61743fdb71bfadfae99806a.jpeg" alt="" className="ab_img4" />
     </div>
     
    </div>
  )
}

export default About
