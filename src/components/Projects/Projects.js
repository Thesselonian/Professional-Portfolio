import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../ProjectCard';
import projects from '../../utils/projects/projects.js'

function Projects() {
    return (
        <Container>
            <section className="project-section">
                {/* Map through projects, creating card for each */}
                {projects.map((project) => {
                    // <div>this is my project</div>
                    return <ProjectCard project={project} />
                })}
            </section>
        </Container>
    )
}

export default Projects