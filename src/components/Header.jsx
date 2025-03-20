import { useState } from "react";
import EnquireModal from "./EnquireModal"; // Import Modal Component
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const programs = [
    { title: "Web Development", subItems: ["React", "Angular", "Vue"] },
    {
      title: "Data Science",
      subItems: ["Python", "Machine Learning", "Deep Learning"],
    },
    {
      title: "Cyber Security",
      subItems: ["Network Security", "Ethical Hacking"],
    },
    { title: "Cloud Computing", subItems: ["AWS", "Azure", "Google Cloud"] },
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <h1>Easy Learning</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Main Navigation */}
      <nav
        className={`nav ${menuOpen ? "show" : ""}`}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>

          {/* Dropdown for Our Programs */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#programs-section">Our Programs</a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {programs.map((program, index) => (
                  <li key={index} className="dropdown-item">
                    {program.title}
                    <ul className="sub-dropdown-menu">
                      {program.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href="#">{subItem}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="#choose-us-section">About Us</a>
          </li>

          {/* Enquire Link (Opens Modal) */}
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
            >
              Enquire
            </a>
          </li>
        </ul>
      </nav>

      {/* Enquire Modal Component */}
      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
