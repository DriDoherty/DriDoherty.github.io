import React from "react";
import "./Footer.css";

const Footer = () => (

    <div className="footer">

        <h2 className="textLight">Get In Touch</h2>

        <div className="buttons">
            <a className="butn" href="mailto:adriana.doherty@hotmail.com">CONTACT ME</a>
        </div>

        <div className="footer-links">
            <a className="footer-link" href="https://www.linkedin.com/in/adrianadoherty/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="footer-link" href="https://github.com/DriDoherty" target="_blank" rel="noopener noreferrer">Github</a>
        </div>

        <footer>
            <p className="copyright">© 2019 Adriana Doherty</p>
        </footer>
    </div>

);

export default Footer;