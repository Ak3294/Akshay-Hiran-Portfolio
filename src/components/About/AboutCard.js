import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshay Kumar Hiran </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            Recently, I complete my B.tech from Poornima Institute of Engineering and Technology in Computer Science and Engineering at Jaipur.
            <br />
            Currently, I am Looking for the New Role, I have done many paid and unpaid internships.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code never lies, comments sometimes do!"{" "}
          </p>
          <footer className="blockquote-footer">Akshay Kumar Hiran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
