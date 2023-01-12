import React from "react";
import './About.css';
import {Link} from "react-router-dom";
import { FaAws,FaNode,FaJava,FaReact,FaNpm,FaDocker,FaDatabase } from "react-icons/fa";
import { SiJavascript, SiMysql,SiSolidity} from "react-icons/si";



function About() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="MainContainer">
    <div className = "AboutContainer">
        <h1 id="Desc">About Me</h1> 
        <p>🌟 My Skill set include Full Stack Development, Developing and Dealing with the Complex Algorithms</p>
        <br/>
        <p>🌟 Proficient in Databases, MERN App deployment, java and C++ programming.</p>
        <br/>
        <p>🌟 Other than that, you would usually find me playing football or learning Blockchain</p>
    </div>

    <div className="TechStackContainer">
    <div className="TechDescription">
    <p>Tech Stacks that i Love 🥰</p>
    </div>
    <div className="TechContainer">
    <a><FaAws size={40}/>  AWS </a>
    <a><FaNode size={40}/> NodeJS </a>
    <a><FaJava size={40}/> Java </a>
    <a><SiJavascript size={40}/> Javascript</a>
    <a><FaReact size={40}/> React</a>
    <a><FaNpm size={40}/> NPM </a>
    <a><FaDocker size={40}/> Docker</a>
    <a><SiMysql size={40}/> MySql</a> 
    <a><SiSolidity size={40}/> Solidity</a>
    <a><FaDatabase size={40}/>Sql DB</a>     
    </div>    
    </div>
    </div>  
    </>
  );
}

export default About;

