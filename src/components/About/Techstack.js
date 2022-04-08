import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript,
  DiReact,
  DiHtml5,
  DiPython,
  DiGit,
  DiCss3,
  DiPhp,
} from "react-icons/di";
import {
  SiMicrosoftsqlserver,
  SiCsharp,
  SiDotnet
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target='_blank' rel="noopener noreferrer nofollow">
          <SiCsharp />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.php.net/manual/es/intro-whatis.php" target='_blank' rel="noopener noreferrer nofollow">
          <DiPhp />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://developer.mozilla.org/es/docs/Web/HTML" target='_blank' rel="noopener noreferrer nofollow">
          <DiHtml5 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.microsoft.com/es-es/sql-server/sql-server-downloads" target='_blank' rel="noopener noreferrer nofollow">
          <SiMicrosoftsqlserver />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target='_blank' rel="noopener noreferrer nofollow">
          <DiCss3 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/" target='_blank' rel="noopener noreferrer nofollow">
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/" target='_blank' rel="noopener noreferrer nofollow">
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target='_blank' rel="noopener noreferrer nofollow">
          <DiJavascript />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://es.reactjs.org/" target='_blank' rel="noopener noreferrer nofollow">
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://dotnet.microsoft.com/en-us/" target='_blank' rel="noopener noreferrer nofollow">
          <SiDotnet />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
