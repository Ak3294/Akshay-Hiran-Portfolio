import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./Certification_Cards";
import Particle from "../Particle";
import DataScience from "../../Assets/Certificate/Data_Science.jpg";
import devops from "../../Assets/Certificate/devops.png";
import dsa from "../../Assets/Certificate/DSA.jpg";
import generativeAI from "../../Assets/Certificate/generativeAI.jpg";
import googleCloud from "../../Assets/Certificate/Google_Cloud.png";
import ibm from "../../Assets/Certificate/IBM.jpg";
import kotlin from "../../Assets/Certificate/Kotlin.png";
import research from "../../Assets/Certificate/research.jpg";
import webdev from "../../Assets/Certificate/web_development.jpg";


function Certification() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates! </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the Certificates of my learning.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={DataScience}
              isBlog={false}
              title="Udemy Data Science Certification"
              demoLink="https://www.udemy.com/certificate/UC-f03076fb-4d1a-4af0-ae1c-f1435c1a78e3/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={webdev}
              isBlog={false}
              title="Linkedin Web Development Course"
              demoLink="https://drive.google.com/file/d/10T1lNdMIPUsKUBCU06wLvS9qcGBYMuru/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={dsa}
              isBlog={false}
              title="Data Structures and Algorithms in C++"  
              demoLink="https://drive.google.com/file/d/19QG4APrMBdA_857gVN-bFFbM6pkkp4wj/view"           
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={devops}
              isBlog={false}
              title="SkillUp Devops Learning Tools"
              demoLink="https://drive.google.com/file/d/1VvVVfxKALgB9UJDpNYC6PH5jqhm-eGNP/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={ibm}
              isBlog={false}
              title="IBM Cybersecurity and OS Security"
              demoLink="https://www.coursera.org/account/accomplishments/verify/3JPNZ92SR8KM"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={generativeAI}
              isBlog={false}
              title="Microsoft & Linkedin Generative AI Roles in IT "
              demoLink="https://lnkd.in/dTPKEQGY"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={googleCloud}
              isBlog={false}
              title="Google Cloud Engineering and ML Track"
              demoLink="https://drive.google.com/file/d/1z0m45hjMn71ExI-jzfd-PzlnMFtnkPbV/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={research}
              isBlog={false}
              title="Research Paper Publish at ICSIS'21 "
              demoLink="https://drive.google.com/file/d/1KROsMDcUvzI6Ve-1ETW1Viq3iMKA5rne/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={kotlin}
              isBlog={false}
              title="Android Development in Kotlin "
              demoLink="https://drive.google.com/file/d/1__vsvMaeOQXAyH6zvpwkv88zq1IVwk3Q/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certification;
