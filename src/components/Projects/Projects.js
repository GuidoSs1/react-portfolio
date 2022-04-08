import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import bitcoin from "../../Assets/Projects/image.jpg";
import employees from "../../Assets/Projects/image2.jpg";
import portfolio from "../../Assets/Projects/index.jpg";

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
              imgPath={bitcoin}
              isBlog={false}
              title="Bitcoin Shop"
              description="This is a desktop app that is a simulation of a bitcoin shop, this was develop for a final work to the university from scratch usign C# with .NET. Allows the sing up of sellers and buyers, the process of buy an certain quantity of bitcoins, and evry data is recorded on a database local in MS SQL SERVER."
              link="https://github.com/GuidoSs1/tp_laboratorio_ii/tree/master/TP-4/SosaStillante.Guido.2A.TPFinal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employees}
              isBlog={false}
              title="Administration Software"
              description="This is a software for the administration of employees by console made it with C. This software allows to create, modify and delete data of employees and save it on a file .csv and .bit."
              link="https://github.com/GuidoSs1/tp_laboratorio_4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="This is my personal portfolio, you are seeing it right now, I hope do you like it. I modified this template to my likes. This project is made it using Reactjs and Sass."
              link="https://github.com/GuidoSs1/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
