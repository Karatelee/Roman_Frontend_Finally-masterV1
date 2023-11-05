import Navbar from "@/components/Navbar";
import React from "react";
import logoImage from '@/images/logo.png'


const About = () => {
  return (
    <>
      <div className="containerStyle">
        <div className="header">
          <div className="header-line">
            <div className="header-logo">
              <img src={logoImage} alt="" />
            </div>
            <Navbar />
          </div>
        </div>
        <div className="card">
          <h1>Welcome to Our Website</h1>
          <p>
            My phone:+77008388346
          </p>
        </div>
      </div>
    </>
  );
};


export default About;