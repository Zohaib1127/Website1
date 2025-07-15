import './App.css'
import Navbar1 from './Website1/Navbar1'
import AboutUs1 from'./Website1/AboutUs1'
import ImageGallery from './Website1/ImageGallery'
import OurTeam1 from './Website1/OurTeam1'
import OurServices from './Website1/OurServices'
import ContactUs1 from './Website1/ContactUs1'
import Copyright from './Website1/Copyright'
import Home from './Website1/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {

  return (
    // Website1 routes
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<AboutUs1/>}/>
      <Route path='/gallery' element= {<ImageGallery/>}/>
      <Route path='/team' element= {<OurTeam1/>}/>
      <Route path='/services' element= {<OurServices/>}/>
      <Route path='/contact' element= {<ContactUs1/>}/>
    </Routes>
    <Copyright/>
    </BrowserRouter>

    
  )
}

export default App
