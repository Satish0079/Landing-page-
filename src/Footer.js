import React from "react";
import "./Footer.css";

function Footer() {
  return (
   <footer>
        <div class="container">
            <div class="sec">
                <h2>About Us</h2>
                <p>A hackathon is an exciting and collaborative event that brings together creative individuals, often including programmers, designers, and innovators, for a focused period to develop innovative solutions to real-world problems.</p>
                <ul class="sci">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-discord"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            <div class="sec quiz">
                <h2>Support</h2>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Code of Conduct</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div class="sec contact">
                <h2>Contact Us</h2>
                <ul class="info">
                    <li>
                        <span><i class="fas fa-phone"></i></span>
                        <p><a href="tel:+12345645556">+0121510021566</a></p>
                    </li>
                    <li>
                        <span><i class="fas fa-envelope"></i></span>
                        <p><a href="mailto:hackanova3.0@gmail.com">hackanova3.0@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div class="copyrightText">
        <p>Copyright © 2023 Hackanova 3.0. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
