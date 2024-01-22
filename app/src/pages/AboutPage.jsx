import React from "react";
import "./AboutPage.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <div className="hero-section">
          <h1>About Us</h1>
          <div className="section">
            <h2>Introduction</h2>
            <p>
            Welcome to Flixxit - your ultimate destination for streaming movies. 
            We are committed to providing an unparalleled entertainment experience that 
            transcends the boundaries of conventional streaming platforms.
            </p>
          </div>
        </div>
        <div className="section">
          <h2>Unlimited Entertainment</h2>
          <p>
          Embark on a journey of unlimited entertainment as you explore our vast library of movies 
          and series spanning various genres. Flixxit brings you an extensive collection, ensuring 
          there's something for every mood and preference, all conveniently available at your fingertips.
          </p>
        </div>
        <div className="section">
          <h2>Original Content</h2>
          <p>
          Immerse yourself in a world of exclusive original content that sets Flixxit apart. Our platform 
          showcases unique productions that you won't find anywhere else, adding a distinctive flavor to your streaming experience.
          </p>
        </div>
        <div className="section">
          <h2>Seamless Streaming</h2>
          <p>Experience seamless streaming like never before. Flixxit offers high-quality playback on any device, providing you with the 
            flexibility to enjoy your favorite content anywhere, anytime. Whether you're at home, on the go, or exploring new places, we ensure 
            your entertainment journey remains uninterrupted.</p>
        </div>
        <div className="section">
          <h2>Personalized Recommendations</h2>
          <p>
          At Flixxit, we understand the importance of tailored content. Benefit from personalized recommendations based on your viewing history, 
          allowing you to discover new favorites effortlessly. Our algorithm refines your entertainment choices, ensuring each recommendation aligns 
          with your unique preferences.
          </p>
        </div>

        <div className="section">
          <h2>Copyrights, Terms, and Conditions</h2>
          <p>
          Respecting intellectual property is a cornerstone of our values. All content on Flixxit is protected by copyright, 
          and usage without permission is strictly prohibited. By utilizing our service, you agree to adhere to our terms and 
          conditions, promoting a fair and respectful streaming environment for all.
          </p>
        </div>
        <div className="section">
          <h2>Help Desk</h2>
          <p>
          For any further assistance or inquiries, our dedicated Help Desk is at your service:
          </p>
          <p>
            {" "}
            Email: avirat@gmail.com | Phone: 7020186981
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
