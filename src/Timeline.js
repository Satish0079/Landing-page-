import React from "react";
import "./Timeline.css";
function Timeline() {
  return (
    <div className="Timelinebody">
      <div className="title">
        <div>
          <h1 className="Timelineh1">The North Pole 2022</h1>
        </div>
        <p className="Timelinep">The ultimate arctic adventure</p>
      </div>

<div class="timeline">
    <div class="container left-container">
        <img src="Images/amazon.png" >
        <div class="text-box">
            <h2> Registration Starts</h2>
            <small>5<sup>th</sup> December 2023 </small>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span class="left-container-arrow"></span>
        </div>
    </div>

    <div class="container right-container">
        <img src="Images/google.png" >
        <div class="text-box">
            <h2> Submission Deadline </h2>
            <small> 10<sup>th</sup> January 2023 </small>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span class="right-container-arrow"></span>
        </div>
    </div>

    <div class="container left-container">
        <img src="Images/tesla.png" >
        <div class="text-box">
            <h2> Announcement of Shortlisted Teams </h2>
            <small> 12<sup>th</sup> January 2024</small>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span class="left-container-arrow"></span>
        </div>
    </div>

   

    <div class="container right-container">
        <img src="Images/flipkart.png" >
        <div class="text-box">
            <h2> Grand Finale @TCET</h2>
            <small> 20<sup>th</sup> January 2024</small>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span class="right-container-arrow"></span>
        </div>
    </div>

    <div class="container left-container">
        <img src="Images/toyota.png" >
        <div class="text-box">
            <h2> Announcement of Finalists </h2>
            <small> 21<sup>th</sup> January 2024</small>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span class="left-container-arrow"></span>
        </div>
    </div>
</div>
  );
}

export default Timeline;
