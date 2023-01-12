import React from "react";
import './Home.css';
import {Link} from "react-router-dom";
import { FaAws,FaNode,FaJava,FaReact,FaNpm,FaDocker,FaDatabase,FaLinkedin,FaFacebook,FaInstagram } from "react-icons/fa";
import { SiJavascript, SiMysql,SiSolidity, SiGithub,SiQuora} from "react-icons/si";
import {AiFillMediumCircle} from "react-icons/ai";


function Home() {
  return (
    <>
    <div className="HomeContainer">
    <div className = "DetailsContainer">
        <p id="P1">Hi there ! </p> 
        <p id="P2">I am Ehsan Rasul,</p>
        <p id="P3">A Software Engineer.</p>
        <p id="P4">I am Curious about Learning Blockchain. </p>
        <div className="logos">
        <a href="https://web.facebook.com/maybee.Ehsan/"><FaFacebook size={35}/></a>
        <a href="https://github.com/ehsanrasul"><SiGithub size={35}/></a>
        <a href="https://www.instagram.com/maybee_ehsan/"><FaInstagram size={35}/></a>
        <a href="https://www.linkedin.com/in/ehsan-rasul-687103248/"><FaLinkedin size={35}/></a>
        <a href="https://medium.com/@ehsanrasul0"><AiFillMediumCircle size={35}/></a>
        <a href="https://www.quora.com/profile/Ehsan-Rasul-7"><SiQuora size={35}/></a>
        </div>
    </div>

    <div className="PhotoContainer">
        <img className = "ProfilePhoto" src="fiver.jpeg"></img>        
    </div>
    </div>  
    </>
  );
}

export default Home;