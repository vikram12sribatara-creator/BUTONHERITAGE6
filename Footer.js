import React from "react";

const Footer = () => (
  <footer className="footer">
    <div>
      &copy; {new Date().getFullYear()} Buton Heritage. All Rights Reserved.
      <br />
      <span>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </span>
    </div>
  </footer>
);

export default Footer;