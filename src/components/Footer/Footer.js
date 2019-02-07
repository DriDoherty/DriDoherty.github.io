import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="fixed-bottom">
        <span id="footer_text">Adriana Doherty</span>
        <a className="footer_icon_link" href="https://www.linkedin.com/in/adrianadoherty" target="_blank" rel="noopener noreferrer"><i className="footer_icon fab fa-linkedin fa-2x"></i></a>
        <a className="footer_icon_link" href="https://www.github.com/dridoherty" target="_blank" rel="noopener noreferrer"><i className="footer_icon fab fa-github fa-2x"></i></a>
    </footer>
);

export default Footer;