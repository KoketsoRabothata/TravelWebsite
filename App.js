import './App.css';
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Packages from './Pages/Packages';
import Contact from './Pages/Contact';
import Book from './Pages/Book';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './components/Navbar.css'





function App() {
  return (
    <BrowserRouter>
    <div>
   <Navbar/>
      <Routes>
      <Route path='/' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/packages' exact Component={Packages}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/book' exact Component={Book}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
