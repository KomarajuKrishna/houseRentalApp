import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx' //Getting Details of Home JSX
import HouseDetails from './houseDetails/houseDetails.jsx'; //Getting Details of House Details JSX 
import About from './components/about/about.jsx'; //Getting Details of About JSX
import Navbar from './components/navbar/navbar.jsx'; //Getting Details of Navbar JSX
import Contact from './components/navbar/contact/contact.jsx'; //Getting Details of  Contact JSX
import './App.css';

function App() {
  return (
    // Rendering Components on Web Page
    <div className="bg-container">
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/:id' element={<HouseDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
