import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => (
    <header id="nav_bar" className="sticky-top">
        <nav>
            <h1 id="nav_name_init"><Link to="/">{props.first_init}</Link></h1>
            <div id="nav_menu">
                <ul>
                    <li className="nav_menu_item"><Link to="/">About</Link></li>
                    <li className="nav_menu_item"><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
        
    </header>
);

export default Header;