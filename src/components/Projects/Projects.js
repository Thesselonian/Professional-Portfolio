import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../ProjectCard';
import projects from '../../utils/projects/projects.js'

function Projects() {
    return (
        <Container>
            <section className="project-section">
                {/* Map through projects, creating card for each */}
                {projects.map((project) => {
                    return <ProjectCard project={project} key={project.name}/>
                })}
            </section>
        </Container>
    )
}

export default Projects