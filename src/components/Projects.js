import React from "react";
import './Projects.css';
import {Link} from "react-router-dom";

function Projects() {
  return (
    <>
    <body>
        <div class="container">
            <div class="card">
              <div class="circle">
                <img src="Workoholic.jpeg"/>
              </div>
              <div class="content">
 
                <p>A Web APP Developed on MERN Stack named <b>Workoholic</b>. A dummy Freelance Web APP containing Basic CRUD operations</p>
                 
                <a href="https://github.com/ehsanrasul/assignment-1-ehsanrasul">CODE</a>
              </div>
            </div>
            <div class="card">
              <div class="circle">
              <img src="VMS.jpg"/>
              </div>
              <div class="content">
 
                <p>A Desktop Application Built on JavaFX. It was a <b>Vehicle Rental System</b> which allowed people to rent a vehicle, book a ride and perfomr many other operations</p>
                <a href="https://github.com/ehsanrasul/RentAVehicle">CODE</a>
              </div>
            </div>
            <div class="card">
              <div class="circle">
               <img src="SIS.jpg"/>
              </div>
              <div class="content">
 
                <p> A Java console based project cloned from github. It was modified by adding some other operations and then Junit testing was Performed on this.</p>
                <a href="https://github.com/ehsanrasul/Student-Information-System">CODE</a>
              </div>
            </div>

            <div class="card">
              <div class="circle">
                <img src="Algorithm.jpg"/>
              </div>
              <div class="content">
 
                <p> An Algorithm Project dealing with Data cleaning and Performing <b>Prims and Kruskals Algorithm</b> on the dataset. The Project was Performed in Java.</p>
                 
                <a href="https://github.com/ehsanrasul/AlgoProject">CODE</a>
              </div>
            </div>
    
            <div class="card">
              <div class="circle">
                <img src="Calculator.jpg"/>
              </div>
              <div class="content">
 
                <p> A calculator developed with HTML and Javascript. Containg Basic Operations and Some Advance Operations like Probability and Selection.</p>
                 
                <a href="https://github.com/ehsanrasul/Calculator.git">CODE</a>
              </div>
            </div> 
          </div>
    </body> 
   
    </>
  );
}

export default Projects;