import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie_app from "../../Assets/Projects/movie_app.jpeg";
import weather_app from "../../Assets/Projects/weather-app.jpeg";
import covid19 from "../../Assets/Projects/covid19.jpeg";
import tictactoe from "../../Assets/Projects/tic-tac-toe.jpeg";
import rock_paper_scissor from "../../Assets/Projects/rock-paper-scissor.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie_app}
              isBlog={false}
              title="MOVIE APPS"
              description="Movie App searches your favourite movie you want."
              ghLink="https://github.com/Avi1927/Movie-App"
              demoLink="https://movie-app-by-avi-patel.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather_app}
              isBlog={false}
              title="WEATHER APPS"
              description="Weather App helps you to find the weather easily of your city or nation."
              ghLink="https://github.com/Avi1927/weather_app"
              demoLink="https://weather-app-by-avi-patel.netlify.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid19}
              isBlog={false}
              title="COVID-19 STATISTICS"
              description="A React app showing real-time COVID-19 stats by country and date."
              ghLink="https://github.com/Avi1927/Covid19-Stats-Website"
              demoLink="https://covid19-statistics-website.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="TIC TAC TOE"
              description="Tic Tac Toe game where users play against each-other."
              ghLink="https://github.com/Avi1927/Tic-Tac-Toe-Game"
              demoLink="https://tic-tac-toe-game-webapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rock_paper_scissor}
              isBlog={false}
              title="ROCK PAPER SCISSORS"
              description="A game where users compete against a computer and track scores."
              ghLink="https://github.com/Avi1927/Rock-Paper-Scissor-Game"
              demoLink="https://rock-paper-scissor-mini-project.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
