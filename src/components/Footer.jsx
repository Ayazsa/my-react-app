import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Easy Learning</h2>
            <p>
              Empowering learners with high-quality education and career
              support.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#programs-section">Our Programs</a>
              </li>
              <li>
                <a href="#choose-us-section">About Us</a>
              </li>
              <li>
                <a href="#testimonial-section">Enquire</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: support@easylearning.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#">
            <Facebook size={24} color="white" />
          </a>
          <a href="#">
            <Twitter size={24} color="white" />
          </a>
          <a href="#">
            <Instagram size={24} color="white" />
          </a>
          <a href="#">
            <Linkedin size={24} color="white" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Easy Learning. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
