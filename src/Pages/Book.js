import React, {useState}from 'react'
import back from '../images/PO.JPG'
import '../Styles/Book.css'

const TravelBookingPage =() =>{
  const[transportation,setTransportation] = useState([]);
  const [gender,setGender] = useState([]);
  const [selectedPackage,setSelectedPackage] =useState('');

  const transportationOptions = ['Bus', 'Car', 'Plane'];
  const genderOptions = ['Male', 'Female'];
  const packageOptions = ['Koh Samui','Phuket','Seychelles','Bora Bora','Maldives','Hawaii']

  const handleTransportationChange =(event) => {
    const {value,checked} = event.target;
    if(checked){
      setTransportation([...transportation,value]);
    }
      else {
        setTransportation(transportation.filter((item) => item !== value));
      }
  };


  const handleGenderChange = (event) => {
    const {value,checked} = event.target;
    if (checked){
      setGender([...gender,value]);
    }
      else {
        setGender(gender.filter((item) =>item !== value));
      }
  };


  const handlePackageChange = (event) =>{
    setSelectedPackage(event.target.value);
  };

  const handleSubmit =(event) => {
    event.preventDefault();
    console.log('Booking details:',{transportation,gender,selectedPackage});
  };


  return(
    <div className='travel-booking-page'>
      <div className='home' style={{backgroundImage: `url(${back})`}}>
        <div className='content'>
          <h1>Not All Roads Lead To Rome,Where Is Our Next Adventure Going To Be?</h1>

          <form onSubmit={handleSubmit}>
            {/* transport options */}
            <label>
          <h5>Select Your Vehicle:</h5>
          <select value={setTransportation} onChange={handleTransportationChange}>
            {transportationOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
         </label>


            {/* gender options */}
            <label>
          <h5>Select Your Gender:</h5>
          <select value={setGender} onChange={handleGenderChange}>
            {genderOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
         </label>

            {/* package options */}
         <label>
          <h5>Select A Package:</h5>
          <select value={selectedPackage} onChange={handlePackageChange}>
            {packageOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
         </label>

              <div className='add'>
              <input class="naam" type="text" id="name" name="user_name" placeholder="Fullname:"></input>
              <input class="email" type="text" id="name" name="user_name" placeholder="Email:"></input>
              <input class="phone" type="text" id="name" name="user_name" placeholder="Phone:"></input>
              <input class="datum" type="text" id="name" name="user_name" placeholder="Ideal Traveling Date:"></input>
              <input class="message" type="text" id="name" name="user_name" placeholder="Further Instructions:"></input>
              </div>
              <br></br>
            {/* submit button */}
            <button type="submit">Book Now</button>
            <br></br>

          </form>
        </div>
      </div>
    </div>
  );
};


export default TravelBookingPage