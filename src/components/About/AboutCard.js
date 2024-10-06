import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Avi Patel</span>
            from <span className="purple"> Vadodara, Gujarat, India.</span>
            <br />
            I am currently doing training & internship as ReactJs Developer Trainee.
            <br />
            I have completed  B.tech in Computer Science Engineering from Parul University.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
         
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You can achieve each & everything, if you really need it!"{" "}
          </p>
          <footer className="blockquote-footer">Avi Patel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
