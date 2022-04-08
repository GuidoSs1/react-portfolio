import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiVisualstudio,
  SiXampp,
  SiPostgresql,
  SiVirtualbox,
  SiGitkraken,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/" target='_blank' rel="noopener noreferrer nofollow">
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/" target='_blank' rel="noopener noreferrer nofollow">
          <SiVisualstudio />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.apachefriends.org/es/index.html" target='_blank' rel="noopener noreferrer nofollow">
          <SiXampp />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.linux.org/" target='_blank' rel="noopener noreferrer nofollow">
          <SiLinux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.virtualbox.org/" target='_blank' rel="noopener noreferrer nofollow">
          <SiVirtualbox />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/" target='_blank' rel="noopener noreferrer nofollow">
          <SiGithub />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://about.gitlab.com/" target='_blank' rel="noopener noreferrer nofollow">
          <SiGitlab />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.gitkraken.com/" target='_blank' rel="noopener noreferrer nofollow">
          <SiGitkraken />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postgresql.org/" target='_blank' rel="noopener noreferrer nofollow">
          <SiPostgresql />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
