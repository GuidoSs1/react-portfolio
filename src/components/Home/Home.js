import React, {useEffect,useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import AnimatedLetters from './AnimatedLetters';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ','G','U','I','D','O',' ','S','O','S','A',' ','S','T','I','L','L','A','N','T','E','.'];

  useEffect(() => {
      return setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="text-zone">
                <h1><b>
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i!</span> 
                  <br/>
                  <span className={`${letterClass} _13`}>I</span> 
                  <span className={`${letterClass} _14`}>'m</span> 
                  <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                </b></h1>
                <Type />
              </div>
            </Col>
            <Col md={5} className="myAvtar" >
              <Tilt>
                <img src={homeLogo} className="img-fluid" alt="home pic" />
              </Tilt>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row>
          <Col md={12} className="home-about-social">
            <h3>FIND ME ON</h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GuidoSs1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Guidosti1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/guido-s-858351204"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/guidosti1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
