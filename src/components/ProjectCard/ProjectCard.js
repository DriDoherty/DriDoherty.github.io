import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
    <div className="card">
        <a  className="cardtip"
            href={props.demo}
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="auto"
            title={props.desc}
        >
            <img className="card-img-top" src={props.img} alt={props.name} />
        </a>
        <div className="card-body">
            <h3 className="card-title">{props.name}
                <a href={props.git} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </h3>
        </div>
        <div className="card-footer">
            { props.skills.includes("H") && <img className="skillicon" src="images/HTML5.svg" alt="HTML5" /> }
            { props.skills.includes("C") && <img className="skillicon" src="images/CSS3.svg" alt="CSS3" /> }
            { props.skills.includes("B") && <img className="skilliconS" src="images/handlebars.svg" alt="CSS3" /> }
            { props.skills.includes("J") && <img className="skillicon" src="images/JS.svg" alt="JS" /> }
            { props.skills.includes("Q") && <img className="skillicon" src="images/jQuery.svg" alt="jQuery" /> }
            { props.skills.includes("F") && <img className="skillicon" src="images/firebase.svg" alt="jQuery" /> }
            { props.skills.includes("N") && <img className="skilliconS" src="images/Node-JS.svg" alt="jQuery" /> }
            { props.skills.includes("E") && <img className="skilliconS" src="images/express.svg" alt="jQuery" /> }
            { props.skills.includes("S") && <img className="skilliconL" src="images/mysql.svg" alt="jQuery" /> }
            { props.skills.includes("M") && <img className="skilliconL" src="images/mongo.svg" alt="jQuery" /> }
            { props.skills.includes("R") && <img className="skilliconL" src="images/react.svg" alt="jQuery" /> }
        </div>
    </div>
);

export default ProjectCard;