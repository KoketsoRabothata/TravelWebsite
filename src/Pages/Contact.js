import React from "react";
import co from '../images/co.PNG'
import '../Styles/Contact.css'
function Contact(){
  return(
    <div className='home' style={{backgroundImage: `url(${co})`}}>
    <div className="headerContainerr">
      <h1>GET IN TOUCH</h1>
      <h2>Leave a message</h2>
 <div className="box">
 <div className="style">
      <input class="name" type="text" id="name" name="user_name" placeholder="Fullname:"></input>
      <input class="mail" type="text" id="name" name="user_name" placeholder="Email:"></input>
      <input class="call" type="text" id="name" name="user_name" placeholder="Phone:"></input>
      <input class="dat" type="text" id="name" name="user_name" placeholder="Ideal Travel Dates:"></input>
      <input class="mes" type="text" id="name" name="user_name" placeholder="Message:"></input>
    <button type="submit">Send</button>
      </div>
 </div>
    </div>
  </div>
  )
}

export default Contact