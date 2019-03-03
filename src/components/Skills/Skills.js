import React from "react";
import "./Skills.css";

const Skills = () => (
    <div className="skills">
        <h2 className="textLight">My Skills.</h2>
        <div className="row skillsRow">
            <img className="skillicon" src="images/HTML5.svg" alt="HTML5" />
            <img className="skillicon" src="images/CSS3.svg" alt="CSS3" />
            <img className="skillicon" src="images/JS.svg" alt="JS" />
            <img className="skillicon" src="images/jQuery.svg" alt="jQuery" />
            <img className="skillicon" src="images/firebase.svg" alt="jQuery" />
            <img className="skilliconS" src="images/Node-JS.svg" alt="jQuery" />
            <img className="skilliconS" src="images/express.svg" alt="jQuery" />
            <img className="skilliconL" src="images/mySQL.svg" alt="jQuery" />
            <img className="skilliconL" src="images/mongo.svg" alt="jQuery" />
            <img className="skilliconL" src="images/react.svg" alt="jQuery" />
        </div>
    </div>
);

export default Skills;