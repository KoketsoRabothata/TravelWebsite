import React from 'react'
import '../Styles/About.css'
import MyImg from '../images/boats.jpg'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MyImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
       Our platform is a gateway to a world 
      of captivating destinations,curated experiences,and travel inspiration.Whether you're a seasoned globetrotrotter or
      a first-time adventurer, we are here to transform your travel dreams into reality. Dive into a treasure trove of 
      handpicked itineraries,insider tips,and hidden gems,ensuring each voyage is a tapestry of unforgettable moments.
      At Travel,we believe in the transformative power of exploration, and our mission is to make every trip an extra-
      ordinary chapter in your personal travel story. 

      Join us as we navigate the globe together, one destination at a time. Welcome to a community where the journey is as 
      enriching as the destination.  
        </p>
      </div>
    </div>
  )
}

export default About
