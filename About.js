import React from 'react';
import Navbar from './Navbar';
import about from '../assets/about.gif';


function About() {
  return (
    <>
      <Navbar/>
      <div style={{ color: "white", height: "100%", backgroundColor: "#1D4355", padding: "20px", display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "28px" }}>About Us</h2>
          <p style={{ textAlign: "justify", lineHeight: "1.6", fontSize: "16px" }}>
            At Digital Dunes, we are committed to providing our customers with the best possible experience. We strive to offer
            high-quality products and services that meet the unique needs of each individual customer. Our team is made up of
            skilled professionals who are passionate about what they do. We believe that by working together, we can create a
            positive impact on the world and make a difference in the lives of our customers. We are dedicated to providing
            exceptional customer service and support. Whether you have a question about our products or services, need help
            placing an order, or just want to share feedback, our team is here to assist you every step of the way. Thank you
            for choosing Digital Dunes. We look forward to working with you and helping you achieve your goals.
          </p>
          <h3 style={{ marginTop: "30px", fontSize: "24px" }}>Our Team</h3>
          <ul style={{ marginLeft: "30px", fontSize: "18px", listStyleType: "none" }}>
            <li>Muhammad Ahmed Suhail - Founder and CEO</li>
          </ul>
        </div>
        <div style={{ flex: 1, marginLeft: "40px" }}>
          <img src={about} alt="Company" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default About;
