import React from 'react'
import { Container, Card, CardBody, Badge, CardTitle, CardHeader } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import ProfilePic from '../img/profile_pic.jpg'

const Contact = () => (
  <Container fluid={true} className="text-center justify-content-center align-content-center d-flex my-4">
    <Card className="w-auto rounded shadow-lg">
      <CardHeader>
        <h3>Contact Me</h3>
      </CardHeader>

      <div className="my-2">
        <img src={ProfilePic} className="round-img img-fluid" />
      </div>

      <CardTitle className="mb-1">Maneesh Divana</CardTitle>
      <h6>
        <Badge color="primary" className="p-2" pill>
          Full Stack Developer
        </Badge>
      </h6>

      <CardBody>
        <Container fluid={true} className="text-center mb-2" style={{ fontSize: '1rem' }}>
          <FontAwesomeIcon icon={faEnvelope} className="md-link" />
          &nbsp;
          <a className="text-dark" href="mailto:maneeshd77@gmail.com" title="Email">
            <span className="md-link">maneeshd77@gmail.com</span>
          </a>
          <br />
          <FontAwesomeIcon icon={faMobile} className="md-link" />
          &nbsp;
          <span className="md-link" title="Phone">
            +1 312-973-9216
          </span>
        </Container>

        <Container fluid={true} className="text-center" style={{ fontSize: '28px' }}>
          <a
            href="https://github.com/maneeshd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mr-2"
            title="Github"
          >
            <FontAwesomeIcon icon={faGithub} className="md-link" />
          </a>
          <a
            href="https://www.linkedin.com/in/maneeshdivana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark ml-2 mr-2"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="md-link" />
          </a>
        </Container>
      </CardBody>
    </Card>
  </Container>
)

export default Contact
