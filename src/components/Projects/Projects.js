import React from "react";
import ProjectCard from "../ProjectCard";
import "./Projects.css";

const Projects = () => (

    <div>

      <br />

      <h3 className="projects_intro">The projects below are representative of the technology stacks I have worked on. More projects can be found on <a href="https://www.github.com/dridoherty" target="_blank" rel="noopener noreferrer">GitHub.</a></h3>

      <h3 className="projects_intro">Click on an application image to be taken to the hosted application or on the GitHub link to be taken to the code repository for that project.</h3>
  
      <br />

      <h2>Individual Projects</h2>

      <div className="row project-row">

        <div className="col-md-6">
          <ProjectCard    name="Trivia Game"
                          img="images/HW-Trivia-Game.png"
                          demo="https://DriDoherty.github.io/TriviaGame"
                          git="https://github.com/DriDoherty/TriviaGame.git"
                          desc="<b>Trivia Game</b> guides the user through a series of trivia questions related to classic cars and tracks the user's progress through the timed game."
                          skills="H-C-J-Q"
          />
        </div>

        <div className="col-md-6">
          <ProjectCard    name="Rock Paper Scissors"
                          img="images/HW-RPS-Game.png"
                          demo="https://DriDoherty.github.io/RPS-Multiplayer"
                          git="https://github.com/DriDoherty/RPS-Multiplayer.git"
                          desc="<b>Rock Paper Scissors</b> is a dynamic 2-player version of the classic game meant to be run via two browser windows.<br>The app generates dynamic interactions and updates between players' screens."
                          skills="H-C-J-Q-F"
          />
        </div>

      </div>

      <div className="row project-row">

        <div className="col-md-6">
          <ProjectCard    name="Headline Scraper"
                          img="images/MongoScraper.png"
                          demo="https://agile-cliffs-23953.herokuapp.com"
                          git="https://github.com/DriDoherty/MongoScraper"
                          desc="<b>Headline Scraper</b><br>is a full-stack app which scrapes the current headlines from the Independent.ie web-site. Each headline is a link to the article and the user has the option of saving articles they like to a general database (i.e. not user specific). The user can also add comments about the articles that have been saved."
                          skills="H-C-N-M"
          />
        </div>

        <div className="col-md-6">
          <ProjectCard    name="Clicky Game"
                          img="images/ClickyGame.png"
                          demo="https://DriDoherty.github.io/clickygame"
                          git="https://github.com/DriDoherty/clickygame"
                          desc="<b>Clicky Game</b> is a simple memory game, where the user earns points for each unique image clicked. There are 12 images on the screen, so the objective is to reach a score of 12. If the user clicks on the same image twice, the round is over but they can try again."
                          skills="H-C-N-R"
          />
        </div>
      </div>
      
      <h2>Group Projects</h2>

      <div className="row project-row">

        <div className="col-md-6">
          <ProjectCard    name="DayTripper"
                          img="images/Project1.png"
                          demo="https://dridoherty.github.io/PROJECT1-Demo/"
                          git="https://github.com/DriDoherty/PROJECT1-Demo"
                          desc="<b>DayTripper</b> is an app for researching and planning a day trip around a primary location. The user will be prompted for search criteria details then, utilizing the Google Places API, the app will present a map with points of interest that match. Each point of interest can be explored (info icon) and saved (heart icon) to an itinerary, which can then be emailed."
                          skills="H-C-J-Q-F"
          />
        </div>

        <div className="col-md-6">
          <ProjectCard    name="RosterItUp!"
                          img="images/RosterItUp.png"
                          demo="https://intense-dawn-30298.herokuapp.com/"
                          git="https://github.com/BabyJace2014/Roster-ITUP.git"
                          desc="<b>RosterItUp!</b> is a fantasy football team tracker app. A user inputs a team they drafted in an outside fantasy football league. They can then retrieve daily/weekly stats on their players to determine which should be played on their weekly roster."
                          skills="H-C-J-N-S"
          />
        </div>
      </div>
      
    </div>
);

export default Projects;