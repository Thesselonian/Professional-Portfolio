import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About () {

    return (
        <Container className="body">
            <Row>
                <Col> 
                    <img src="/assets/images/eric.jpg" alt="Eric on a mountain" width="550" height="320"></img>
                </Col>
                <Col>
                    <Card className="about-card text-center">
                        <Card.Header>
                            <h2>
                                About Me
                            </h2>
                        </Card.Header>
                        <Card.Text>
                            I love writing clean, performant code that is easy to read and creates a fantastic
                            user experience.
                            When I am not designing awesome web applications I like to run with my dog,
                            cook tasty food, play Apex Legends, read novels and go for hikes
                            with my girlfriend. 
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About