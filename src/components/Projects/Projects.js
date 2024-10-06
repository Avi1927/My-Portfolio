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
              title="𝐌𝐎𝐕𝐈𝐄 𝓐𝓟𝓟𝓢"
              description="Movie App searches your favourite movie you want."
              ghLink="https://github.com/Avi1927/Movie-App"
              demoLink="https://movie-app-by-avi-patel.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather_app}
              isBlog={false}
              title="𝓦𝓔𝓐𝓣𝓗𝓔𝓡 𝓐𝓟𝓟𝓢"
              description="Weather App helps you to find the weather easily of your city or nation."
              ghLink="https://github.com/Avi1927/weather_app"
              demoLink="https://weather-app-by-avi-patel.netlify.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid19}
              isBlog={false}
              title="𝒞𝒪𝒱𝐼𝒟-𝟣𝟫 𝒮𝒯𝒜𝒯𝐼𝒮𝒯𝐼𝒞𝒮"
              description="A React app showing real-time COVID-19 stats by country and date."
              ghLink="https://github.com/Avi1927/Covid19-Stats-Website"
              demoLink="https://covid19-statistics-website.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="𝓣𝓘𝓒-𝓣𝓐𝓒-𝓣𝓞𝓔"
              description="Tic Tac Toe game where users play against computer with random moves."
              ghLink="https://github.com/Avi1927/Tic-Tac-Toe-Game"
              demoLink="https://tic-tac-toe-game-webapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rock_paper_scissor}
              isBlog={false}
              title="𝓡𝓞𝓒𝓚 𝓟𝓐𝓟𝓔𝓡 𝓢𝓒𝓘𝓢𝓢𝓞𝓡𝓢"
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
