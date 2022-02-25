import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
    console.log(project)
    return (
        <Col lg={4}>
            <div className="project-div">
                <a className="project-h2" href={project.deployedURL}>
                    <h2>{project.name}</h2>
                </a>
                <a href={project.deployedURL}>
                    <img className="project-image" alt={project.altTag} src={project.imagePath}></img>
                </a>
                <a className="center-text" href={project.githubURL}>
                    {project.name} GitHub Repo
                </a>
            </div>
        </Col>
    )
}

export default ProjectCard