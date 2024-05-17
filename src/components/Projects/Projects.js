import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import playwithstring from "../../Assets/Projects/playwithstring.png";
import eShoes from "../../Assets/Projects/E-Shoes.png";
import jobPortal from "../../Assets/Projects/Job_Portal.png";
import olympic from "../../Assets/Projects/olympic.png";
import recommender from "../../Assets/Projects/recommender_system.png";
import portfolio from "../../Assets/Projects/portfolio.png";

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
              imgPath={recommender}
              isBlog={false}
              title="Movie Recommendation System"
              description="The movie recommendation system project utilizes machine learning and NLP to analyze user preferences and behavior, delivering personalized movie suggestions. This enhances user experience by providing tailored recommendations based on individual tastes and viewing history."
              ghLink="https://github.com/Ak3294/Movie_Recommendation"
              demoLink="https://ak3294-movie-recommendation-app-mlsv0h.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobPortal}
              isBlog={false}
              title="Job Portal"
              description="The job portal leverages advanced algorithms and a user-friendly interface to match job seekers with relevant opportunities. It streamlines the job search process by connecting employers with qualified candidates, enhancing the hiring experience for both parties."
              ghLink="https://github.com/Ak3294/Job-Portal-with-Voice-Assistant"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eShoes}
              isBlog={false}
              title="E-Shoes Website"
              description="The E Shoes website offers a wide range of stylish and comfortable footwear for all occasions. With an easy-to-navigate interface, detailed product descriptions, and secure payment options, it provides a seamless shopping experience for shoe enthusiasts."
              ghLink="https://github.com/Ak3294/E-Shoes"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playwithstring}
              isBlog={false}
              title="String Converter"
              description="The string converter website, built with ReactJS, transforms input strings into desired output formats using regular expressions. It offers a user-friendly interface for quick and accurate string manipulation, simplifying complex text processing tasks for developers and non-developers alike."
              ghLink=""
              demoLink="https://playwithstring.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="My portfolio website showcases my comprehensive job profile and projects, highlighting my skills and achievements. It provides detailed insights into my professional journey, featuring examples of my work, and demonstrates my expertise and capabilities to potential employers and collaborators."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olympic}
              isBlog={false}
              title="Olympic Data Visualization"
              description="The Olympic data analysis and visualization project utilizes data science libraries such as NumPy, Pandas, and Seaborn to explore and visualize Olympic datasets. This project provides insights into historical trends, athlete performance, and country statistics, enhancing data-driven storytelling."
              ghLink="https://github.com/Ak3294/Olympic_Analysis"
              demoLink="https://ak3294-olympic-analysis-app-orruky.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
