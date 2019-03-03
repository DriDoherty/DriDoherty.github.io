import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
    <div className={"carousel-item project-row " + props.itemState }>
            <a  href={props.demo}
                target="_blank"
                rel="noopener noreferrer">
                <img className="project-image" src={props.img} alt={props.name} />
            </a>
            <h3><a  href={props.demo}
                    target="_blank"
                    rel="noopener noreferrer">{props.name}</a>
                <a href={props.git} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </h3>
            <p>{props.desc}</p>
    </div>
);

export default ProjectCard;
