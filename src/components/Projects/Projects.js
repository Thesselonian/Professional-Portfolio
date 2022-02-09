import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Projects(props) {
    return (
        <Container>
            <section className="project-section">
                <Row>
                    {/* Pawgers */}
                    <Col>
                        <div className="project-div">
                            <a className="project-h2" href="https://pawgers.herokuapp.com/">
                                <h2>Pawgers</h2>
                            </a>
                            <a href="https://pawgers.herokuapp.com/">
                                <img className="project-image" alt="Pawgers Logo" src="/assets/images/pawgers.jpg"></img>
                            </a>
                            <a className="center-text" href="https://github.com/Thesselonian/Pawgers">
                                Pawgers GitHub Repo
                            </a>
                        </div>
                    </Col>
                    {/* Deep Thoughts */}
                    <Col>
                        <div className="project-div">
                            <a className="project-h2" href="https://deep-thoughts-1991.herokuapp.com/">
                                <h2>Deep Thoughts</h2>
                            </a>
                            <a href="https://deep-thoughts-1991.herokuapp.com/">
                                <img className="project-image" alt="Deep Thoughts Logo" src="/assets/images/deep-thoughts.jpg"></img>
                            </a>
                            <a className="center-text" href="https://github.com/Thesselonian/deep-thoughts">
                                Deep Thoughts GitHub Repo
                            </a>
                        </div>
                    </Col>
                    {/* Note Taker */}
                    <Col>
                        <div className="project-div">
                            <a className="project-h2" href="https://note-taker-1991.herokuapp.com/">
                                <h2>Note Taker</h2>
                            </a>
                            <a href="https://note-taker-1991.herokuapp.com/">
                                <img className="project-image" alt="Note Taker Logo" src="/assets/images/note-taker.jpg"></img>
                            </a>
                            <a className="center-text" href="https://github.com/Thesselonian/express-note-take">
                                Deep Thoughts GitHub Repo
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* Tech Blog */}
                    <Col>
                        <div className="project-div">
                            <a className="project-h2" href="https://tech-blog-1991.herokuapp.com/">
                                <h2>Tech Blog</h2>
                            </a>
                            <a href="https://tech-blog-1991.herokuapp.com/">
                                <img className="project-image" alt="Tech Blog Logo" src="/assets/images/tech-blog.jpg"></img>
                            </a>
                            <a className="center-text" href="https://github.com/Thesselonian/Tech-Blog">
                                Tech Blog GitHub Repo
                            </a>
                        </div>
                    </Col>
                    {/* Budget Tracker */}
                    <Col>
                        <div className="project-div">
                            <a className="project-h2" href="https://budget-tracker-1991.herokuapp.com/">
                                <h2>Budget Tracker</h2>
                            </a>
                            <a href="https://budget-tracker-1991.herokuapp.com/">
                                <img className="project-image" alt="Budget Tracker Logo" src="/assets/images/budget-tracker.jpg"></img>
                            </a>
                            <a className="center-text" href="https://github.com/Thesselonian/budget-tracker">
                                Budget Tracker GitHub Repo
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-div">
                            <a className="project-h2" href="https://budget-tracker-1991.herokuapp.com/">
                                <h2>Budget Tracker</h2>
                            </a>
                            <a href="https://budget-tracker-1991.herokuapp.com/">
                                <img className="project-image" alt="Budget Tracker Logo" src="/assets/images/budget-tracker.jpg"></img>
                            </a>
                            <a className="center-text" href="https://github.com/Thesselonian/budget-tracker">
                                Budget Tracker GitHub Repo
                            </a>
                        </div>
                    </Col>
                </Row>
            </section>

        </Container>
    )
}

export default Projects