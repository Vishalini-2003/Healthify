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
      <h2>Never Stop To </h2> 
      <h3>Exploring The World</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p>
      <a href="http://localhost:3000/Login" className='btn btn-light'>Healthify
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