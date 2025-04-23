import React from "react";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MyLogo</div>
      <div style={linkContainerStyle}>
        <a href="#home" style={linkStyle}>
          Home
        </a>
        <a href="#about" style={linkStyle}>
          About
        </a>
        <a href="#services" style={linkStyle}>
          Services
        </a>
        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
