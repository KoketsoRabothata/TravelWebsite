import React from 'react'
import MyImage from '../images/boats.jpg'
import {Link} from 'react-router-dom'
import '../Styles/Home.css'
import Footer from '../components/Footer'


function Home() {
  return(
    <div className='home' style={{backgroundImage: `url(${MyImage})`}}>
      <div className="headerContainer">
        <h1>Search Your Holiday</h1>
        <p>Embark on a journey with Travel,
          Where wanderlust meets seamless exploration</p>
        <div className='boxes'>
        <div className='select'>Select Your Destination:</div>
        <input class="nam" type="text" id="name" name="user_name" placeholder="All Destinations"></input>
        <br></br>
        <div className='select'>Select Your Date:</div>
        <input class="date" type="date" id="name" name="date" placeholder="mm-dd-yyyy"></input>
        </div>
        <br></br>
        <Link to="/book">
          <button>Book Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;