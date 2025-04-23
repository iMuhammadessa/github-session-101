import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1a1a1a",
    color: "white",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  };

  const footerContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const footerSectionStyle = {
    flex: 1,
    minWidth: "250px",
  };

  const headingStyle = {
    fontSize: "18px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "14px",
    color: "#ccc",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const linkStyle = {
    color: "#ccc",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    color: "white",
  };

  const footerBottomStyle = {
    textAlign: "center",
    paddingTop: "20px",
    marginTop: "30px",
    borderTop: "1px solid #333",
    fontSize: "13px",
    color: "#888",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        {/* About Section */}
        <div style={footerSectionStyle}>
          <h2 style={headingStyle}>About Us</h2>
          <p style={paragraphStyle}>
            We are a team of passionate developers and designers building modern
            and responsive websites.
          </p>
        </div>

        {/* Quick Links */}
        <div style={footerSectionStyle}>
          <h2 style={headingStyle}>Quick Links</h2>
          <ul style={listStyle}>
            <li>
              <a
                href="#"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={footerSectionStyle}>
          <h2 style={headingStyle}>Contact Us</h2>
          <ul style={listStyle}>
            <li style={paragraphStyle}>Phone: +123 456 7890</li>
            <li style={paragraphStyle}>Email: info@example.com</li>
            <li style={paragraphStyle}>
              Address: 123 Developer Lane, Code City
            </li>
          </ul>
        </div>
      </div>

      <div style={footerBottomStyle}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
