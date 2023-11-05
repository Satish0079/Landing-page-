import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="sec">
          <h2>About Us</h2>
          <p>A hackathon is an exciting and collaborative event that brings together creative individuals, often including programmers, designers, and innovators, for a focused period to develop innovative solutions to real-world problems.</p>
          <ul className="sci">
            <li><a href="#"><img src= "facebook.png" alt="Facebook" /></a></li>
            <li><a href="#"><img src="discord.png" alt="Discord" /></a></li>
            <li><a href="#"><img src="instagram.jpeg" alt="Instagram" /></a></li>
          </ul>
        </div>
        <div className="sec quiz">
          <h2>Support</h2>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Code of Conduct</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div className="sec contact">
          <h2>Contact Us</h2>
          <ul className="info">
            <li>
              <span><i className="fas fa-phone"></i></span>
              <p><a href="tel:+12345645556"><img src="phone.png" alt="Phone" />+0121510021566</a></p>
            </li>
            <li>
              <span><i className="fas fa-envelope"></i></span>
              <p><a href="mailto:hackanova3.0@gmail.com"><img src="mail.png" alt="Email" />hackanova3.0@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div className="copyrightText">
      <p>Copyright © 2023 Hackanova 3.0. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
