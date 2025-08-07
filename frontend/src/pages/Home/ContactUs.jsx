import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Anuj from '../../assets/Anuj.jpeg';
import Pritam from '../../assets/Pritam.jpeg';
import Ram from '../../assets/Ram.jpeg';
import Rushi from '../../assets/Rushi.jpeg';
import Ajay from '../../assets/Ajay.jpeg';
import VideoBackground from '../../assets/video2.mp4';

const teamMembers = [
  {
    name: "Anuj Joshi",
    email: "joshianuj0505@gmail.com",
    linkedIn: "https://www.linkedin.com/in/anuj-joshi-223887236/",
    imgSrc: Anuj,
  },
  {
    name: "Pritam Hiras",
    email: "pritamhiras280802@gmail.com",
    linkedIn: "https://www.linkedin.com/in/pritam-hiras-a2a767126",
    imgSrc: Pritam,
  },
  {
    name: "Ram Gaigol",
    email: "ramgaigol9@gmail.com",
    linkedIn: "https://www.linkedin.com/in/ram-gaigol-5a771b236",
    imgSrc: Ram,
  },
  {
    name: "Rushi Mohite",
    email: "rushikeshsujaymohite20@gmail.com",
    linkedIn: "https://www.linkedin.com/in/rushikesh-mohite-a6b25b22b",
    imgSrc: Rushi,
  },
  {
    name: "Ajay Jadhav",
    email: "ajay.j8721@gmail.com",
    linkedIn: "https://www.linkedin.com/in/ajayjadhav09",
    imgSrc: Ajay,
  },
];

const ContactUs = () => {
  return (
    <div className="position-relative min-vh-100 overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ objectFit: 'cover', zIndex: -1 }}
      >
        <source src={VideoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="position-relative z-1 py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <Container>
          <h1 className="text-center mb-5">Contact Us</h1>

          <Row>
            {teamMembers.map((person, idx) => (
              <Col key={idx} md={4} className="mb-4">
                <Card className="bg-dark text-white h-100 shadow">
                  <Card.Img variant="top" src={person.imgSrc} alt={person.name} />
                  <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${person.email}`} className="text-info">
                        {person.email}
                      </a>
                      <br />
                      <strong>LinkedIn:</strong>{' '}
                      <a
                        href={person.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-info"
                      >
                        {person.name}
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="bg-dark text-white mt-5 shadow">
            <Card.Header className="fs-5 fw-bold">
              Centre for Development of Advanced Computing, Acts Pune
            </Card.Header>
            <Card.Body>
              <p>
                C-DAC, ACTS, 4th Floor, Innovation Park, Sr. No. 34/B/1, Panchvati,
                Pashan, Pune Maharashtra 411008
              </p>
              <p>
                Phone: +91-20-25503100 <br />
                Fax: +91-20-25503131
              </p>
              <iframe
                title="CDAC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.129502509959!2d73.79639101427602!3d18.56725928738202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be4df393631d%3A0x19e6797be8a03b81!2sC-DAC%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1720787740926!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
