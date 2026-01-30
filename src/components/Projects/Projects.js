import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import scatch from "../../Assets/Projects/scatch.png";
import techJobAnalyzer from "../../Assets/Projects/tech-job-analyzer.png";

import vibeShare from "../../Assets/Projects/vibeshare.png";

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
              imgPath={vibeShare}
              isBlog={false}
              title="VibeShare"
              description="A social web platform built with Node.js, Express, EJS, and MongoDB that allows users to share memories, personal notes, and images. Supports user authentication, profile management, and media uploads, providing a simple and intuitive space for users to express and store their moments."
              ghLink="https://github.com/prashantsingh428/VibeShare-BlogWesite.git"
              demoLink="https://vibeshare-blogwesite.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scatch}
              isBlog={false}
              title="Scatch"
              description="A modern e-commerce web application designed for discovering and purchasing fashion products from a single platform. Features product browsing, category-based filtering, user authentication, cart management, and a smooth shopping experience with a clean and responsive UI."
              ghLink="https://github.com/prashantsingh428/BackendProject.Scatch.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techJobAnalyzer}
              isBlog={false}
              title="Tech Job Market Analyzer"
              description="A full-stack MERN web application that helps users find relevant tech jobs based on their skills. The platform analyzes job listings to identify in-demand technologies, trending roles, and skill requirements, enabling users to make data-driven career decisions through interactive insights and filters."
              ghLink="https://github.com/prashantsingh428/Tech-Job-Market-Analyzer.git"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
