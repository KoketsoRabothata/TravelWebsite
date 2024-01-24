import React from 'react'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofGJopfM5L6L6z5l72EN5/6b1p2QZpxqM" crossorigin="anonymous"'
import { Link } from 'react-router-dom'
import '../Styles/Package.css'
import MyImg from '../images/Koh Samui.jpg'
import phu from '../images/phuket.jpg'
import sey from '../images/Seychelles.jpg'
import bor from '../images/Bora Bora.jpg'
import mal from '../images/maldives.jpg'
import hu from '../images/hunt.JPG'


function Packages() {
  return (
  <div className='pack' >
     <div className='entry'>Choose your adventure and let Travel be your guide to unforgettable experiences.</div>
    <div className='container'>
    <div class="p-one">
            <img src={MyImg} alt="" width="200" /> 
            <div class="nameprice">
                <h1>Koh Samui</h1>
                <h2 className='h2'>Europe</h2>
                <div>700$</div>
                <p class="p1">Uncover the wonders of Koh Samui with our Explorer's Delight Package. 
                This meticulously crafted itinerary blends iconic landmarks with off-the-beaten-path gems,
                providing a comprehensive experience for the avid adventurer.
                </p>
            </div>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <button>Details</button>
            </div>

       </div>

       <div class="p-one">
            <img src={phu} alt="" width="190"/> 
            <div class="nameprice">
                <h1>Phuket</h1>
                <h2 className='h2'>Thailandia</h2>
                <div>1200$</div>
                <p class="p1">Indulge in the epitome of opulence with our Luxury Escape Package.
                Immerse yourself in lavish accomodations, private excursions,and VIP treatment,ensuring 
                a travel experience that transcends the ordinary. 
                </p>
            </div>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <button>Details</button>
            </div>

       </div>

       <div class="p-one">
            <img src={sey} alt="" width="200"/> 
            <div class="nameprice">
                <h1>Seychelles</h1>
                <h2 className='h2'>Netherlands</h2>
                <div>1500$</div>
                <p class="p1">Immerse yourself in the rich tapestry of local culture with our Cultural 
                Immersion Package. From hands-on workshops to authentic culinary experiences,this itinerary
                promises an intimate connection with the heart and soul of Seychelles.
                </p>
            </div>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <button>Details</button>
            </div>

       </div>

       <div class="p-one">
            <img src={bor} alt="" width="200"/> 
            <div class="nameprice">
                <h1>Bora Bora</h1>
                <h2 className='h2'>Asia</h2>
                <div>1500$</div>
                <p class="p1">Create long lasting memories with loved ones with our 
                Family Fun Retreat. Tailored activities for all ages,family-friendly 
                accomodations,and exciting adventures make this package perfect for 
                a wholesome getaway with your loved ones.
                </p>
            </div>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <button>Details</button>
            </div>

       </div>

       <div class="p-one">
            <img src={mal} alt="" width="200"/> 
            <div class="nameprice">
                <h1>Maldives</h1>
                <h2 className='h2'>Oceania</h2>
                <div>500$</div>
                <p class="p1"> Ignite the flame of romance with our Romance Getaway 
                Package. Handpicked destinations,intimate accomodations,and enhancing
                 experiences set the stage for a perfect romantic escape.
                </p>
            </div>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <button>Details</button>
            </div>

       </div>

       <div class="p-one">
            <img src={hu} alt="" width="200"/> 
            <div class="nameprice">
                <h1>Hawaii</h1>
                <h2 className='h2'>Italy</h2>
                <div>500$</div>
                <p class="p1">Embrace the freedom of solo travel with 
                our Solo Explorer Package. Carefully curated to offer 
                a perfect balance of solitude and social interaction,
                this package is ideal for those seeking a personal 
                journey of self-discovery.
                </p>
            </div>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <button>Details</button>
            </div>
       </div>
  </div>
  </div>
  )
}

export default Packages