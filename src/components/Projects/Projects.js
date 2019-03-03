import React from "react";
import ProjectCard from "../ProjectCard";
import "./Projects.css";

const Projects = () => (

    <div>

      <div className="individualProjects">
        <h2>Individual Projects</h2>

        <div id="individualProj-carousel" className="carousel slide"  data-interval="false">
          <ol className="carousel-indicators">
            <li data-target="#individualProj-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#individualProj-carousel" data-slide-to="1"></li>
            <li data-target="#individualProj-carousel" data-slide-to="2"></li>
            <li data-target="#individualProj-carousel" data-slide-to="3"></li>
          </ol>

          <div className="carousel-inner">
            <ProjectCard  itemState="active"
                          name="Trivia Game"
                          img="images/HW-Trivia-Game.png"
                          demo="https://DriDoherty.github.io/TriviaGame"
                          git="https://github.com/DriDoherty/TriviaGame.git"
                          desc="guides the user through a series of questions related to classic cars and tracks the user's progress through the timed game."
            />
            <ProjectCard  name="Rock Paper Scissors"
                          img="images/HW-RPS-Game.png"
                          demo="https://DriDoherty.github.io/RPS-Multiplayer"
                          git="https://github.com/DriDoherty/RPS-Multiplayer.git"
                          desc="is a dynamic 2-player version of the classic game meant to be run via two browser windows.<br>The app generates dynamic interactions and updates between players' screens."
            />
            <ProjectCard  name="Headline Scraper"
                          img="images/MongoScraper.png"
                          demo="https://agile-cliffs-23953.herokuapp.com"
                          git="https://github.com/DriDoherty/MongoScraper"
                          desc="is a full-stack app which scrapes the headlines from the Independent.ie web-site. The user can save articles they like and add comments to articles that have been saved."
            />
            <ProjectCard  name="Clicky Game"
                          img="images/ClickyGame.png"
                          demo="https://DriDoherty.github.io/clickygame"
                          git="https://github.com/DriDoherty/clickygame"
                          desc="is a memory game, where the user earns points for each unique image clicked. There are 12 images on the screen, so the objective is to reach a score of 12. The round is over when the user clicks on an image more than once."
            />
          </div>

          <a className="carousel-control-prev" href="#individualProj-carousel" role="button" data-slide="prev">
            <i className="fas fa-caret-left caret-style"></i>
            <span className="sr-only">Previous</span>
          </a>

          <a className="carousel-control-next" href="#individualProj-carousel" role="button" data-slide="next">
            <i className="fas fa-caret-right caret-style"></i>
            <span className="sr-only">Next</span>
          </a>

        </div>
      </div>
      
      <div className="groupProjects">
        <h2>Group Projects</h2>

        <div id="groupProject-carousel" className="carousel slide"  data-interval="false">
          <ol className="carousel-indicators">
            <li data-target="#groupProject-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#groupProject-carousel" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner">
            <ProjectCard  itemState="active"
                          name="DayTripper"
                          img="images/Project1.png"
                          demo="https://dridoherty.github.io/PROJECT1-Demo/"
                          git="https://github.com/DriDoherty/PROJECT1-Demo"
                          desc="is an app for planning a day trip around a primary location. The user enters search criteria then, utilizing the Google Places API, the app presents a map with points of interest that match. The user can explore points of interest and create an itinerary which can be shared."
            />
            <ProjectCard  name="RosterItUp!"
                          img="images/RosterItUp.png"
                          demo="https://intense-dawn-30298.herokuapp.com/"
                          git="https://github.com/BabyJace2014/Roster-ITUP.git"
                          desc="is a fantasy football team tracker app. A user inputs a team they drafted in an outside fantasy football league. They can then retrieve daily/weekly stats on their players to determine which should be played on their weekly roster."
            />
          </div>

          <a className="carousel-control-prev" href="#groupProject-carousel" role="button" data-slide="prev">
            <i className="fas fa-caret-left caret-style"></i>
            <span className="sr-only">Previous</span>
          </a>

          <a className="carousel-control-next" href="#groupProject-carousel" role="button" data-slide="next">
            <i className="fas fa-caret-right caret-style"></i>
            <span className="sr-only">Next</span>
          </a>
      </div>
    </div>
      
  </div>
);

export default Projects;