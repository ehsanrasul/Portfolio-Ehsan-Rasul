import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function App() {
  return (
   
      <div className="App">              
        <Router>
          <Navbar/>
          <Routes> 
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/Projects" element = {<Projects/>}/>  
          <Route exact path="/Contact" element = {<Contact/>}/>  
          <Route exact path="/About" element = {<About/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>


  );
}

export default App;
