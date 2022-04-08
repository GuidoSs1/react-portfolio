import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Guido Sosa Stillante </span>
            from <span className="purple">Buenos Aires, Argentina. </span>
            I am a student of the University Technician in Programming degree at the Technological National University. I felt in love with the programming when I print 'Hello World' on the console of my first computer that my father gifted me when I was 12. Since then I don't stop of learning about everything I interest to know on technology field. 
            <br />
            <br />
            My fields of interest right now are <span className="purple">Backend Development</span>, <span className="purple">Machine Learning</span> and <span className="purple">AI</span>.
            <br />
            <br />
            At the moment I'm learning the follow things...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> PHP
            </li>
            <li className="about-activity">
              <ImPointRight /> API's Development
            </li>
            <li className="about-activity">
              <ImPointRight /> PostgreSQL
            </li>
            <li className="about-activity">
              <ImPointRight /> Javascript, HTML, CSS, Sass, React, SPA development
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
