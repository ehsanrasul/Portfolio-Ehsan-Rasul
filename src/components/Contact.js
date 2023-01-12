import React from "react";
import './Contact.css';
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";

function Contact() {
    
  return (
    <>
    <div className="ContactContainer">
    <h1>Contact Me</h1>
    <h3>I am actively seeking remote job opportunities and am available to start work immediately. Feel free to send me an email for queries.</h3>
    <div><Button  onClick={(e) => {
                window.location.href ="mailto:ehsanrasul0@gmail.com";
                e.preventDefault();
            }}>Email</Button></div>
    </div>     
    </>
  );
}

export default Contact;