import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <body className="Body">
    <div className = "Navbar">
      <ul>
        <li><Link className= "nav-link active" aria-current="page" to="/">Home</Link></li>        
        <li><Link className= "nav-link active" aria-current="page" to="/Projects">Projects</Link></li>
        <li><Link className= "nav-link active" aria-current="page" to="/About">About</Link></li>
        <li><Link className= "nav-link active" aria-current="page" to="/Contact">Contact</Link></li>
        <li><a href="https://docs.google.com/document/d/1XdHICPxgh4AiuTCPEPn9xyjpVpehl1zH5_49hzCjJ-w/edit#heading=h.628phil8unj9">Resume</a></li>
      </ul>
    </div>
    </body>
  );
}

export default Navbar;