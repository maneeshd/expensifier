'use strict';


import React from 'react';
import { Container, Card, Badge  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from '../img/profile_pic.jpg';


const About = () => (
    <Container fluid className="w-50 mx-auto text-center text-dark p-0">
        <Card bg="light" border="secondary" className="shadow-lg rounded">
            <Card.Header><h4>About Me</h4></Card.Header>
            <Card.Img id="profile-pic" variant="top" src={ProfilePic} className="img-fluid rounded-circle mx-auto border border-info shadow mt-2" />
            <Card.Title><p className="display-4 my-0">Maneesh Divana</p></Card.Title>
            <h5 className="my-0">
                <Badge pill variant="primary" className="p-2">Full Stack Developer</Badge>
            </h5>
            <Card.Body>
                <Card.Text>
                    <h6>
                        <FontAwesomeIcon icon={faEnvelope}  className="md-link" />&nbsp;
                        <a href="mailto:maneeshd77@gmail.com">maneeshd77@gmail.com</a>
                        &nbsp; | &nbsp;
                        <FontAwesomeIcon icon={faMobile} className="md-link" />&nbsp;
                        <span>+1 312-973-9216</span>
                    </h6>
                </Card.Text>

                <Card.Text>
                    <h3>
                        <a href="https://github.com/maneeshd/" target="_blank" rel="noopener noreferrer" className="text-dark mr-2" title="Github">
                            <FontAwesomeIcon icon={faGithub} className="md-link" />
                        </a>
                        <a href="https://www.linkedin.com/in/maneeshdivana/" target="_blank" rel="noopener noreferrer" className="text-dark ml-2 mr-2" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} className="md-link" />
                        </a>
                        <a href="https://twitter.com/ManeeshD7/" target="_blank" rel="noopener noreferrer" className="text-dark ml-2" title="Twitter">
                            <FontAwesomeIcon icon={faTwitter} className="md-link" />
                        </a>
                    </h3>
                </Card.Text>
            </Card.Body>
        </Card>
    </Container>
);

export default About;
