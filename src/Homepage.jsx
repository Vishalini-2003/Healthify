import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
export const Homepage=()=> {
  return (
    <div>
        
        <section class="showcase">
    <header>
      <h2 class="logo">Mansahaai</h2>
      
      <Link to="/Login" className="btn btn-light ">
                Login 
              </Link>
    </header>
    <video src="https://traversymedia.com/downloads/videos/explore.mp4" muted loop autoplay></video>
    <div class="overlay"></div>
    <div class="text">
      <h2>Say yes  </h2> 
      <h3>to good health!!!</h3>
      <p>At our medical center, we offer a wide range of services to meet the healthcare needs of our patients. Our team of experienced doctors and nurses are dedicated to providing the highest quality of care in a welcoming and comfortable environment. From routine check-ups and vaccinations to more specialized treatments and surgeries, we have the expertise and resources to address a variety of medical concerns.</p>
      <a href="http://localhost:3000/Product" className='btn btn-light'>Healthify
      </a>
      {"    "}{"    "}
      <Link to="/Bloodbank" className="btn btn-light ">
                Bloodbank
              </Link>

    </div>
    <ul class="social">
      <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" /></a></li>
      <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" /></a></li>
      <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" /></a></li>
    </ul>
  </section>
  <div class="menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Destination</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
    </div>

  )
}
export default Homepage