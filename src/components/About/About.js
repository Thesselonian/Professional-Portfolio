import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About (props) {

    return (
        <Container className="body">
            <Row>
                <Col> 
                    <img src="/assets/images/eric.jpg" alt="Eric on a mountain" width="550" height="320"></img>
                </Col>
                <Col>
                    <Card className="about-card">
                        <Card.Header>About Me</Card.Header>
                        <Card.Text>
                            My name is Eric and I like web developing
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About