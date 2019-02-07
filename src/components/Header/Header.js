import React from "react";
import "./Header.css";

const Header = props => (
    <header id="nav_bar" className="sticky-top">
        <nav>
            <h1 id="nav_name_init"><a href="/">{props.first_init}</a></h1>
            <div id="nav_menu">
                <ul>
                    <li className="nav_menu_item"><a href="/">About</a></li>
                    <li className="nav_menu_item"><a href="/projects">Projects</a></li>
                </ul>
            </div>
        </nav>
        
    </header>
);

export default Header;