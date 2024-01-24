import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import MyLogo from '../images/Travel.PNG'

function  Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={MyLogo} /> <div className='kk'>Travel.</div>
          <div className="hiddenLinks">
            <Link to='/'> Home </Link>
            <Link to='/about'>About</Link>
            <Link to='/packages'>Packages</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/book'>Book Now</Link>
           
          </div>
        </div>
        <div className="rightSide">
        <Link to='/'> Home </Link>
            <Link to='/about'>About</Link>
            <Link to='/packages'>Packages</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/book'>Book Now</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
}
   
 



export default Navbar;