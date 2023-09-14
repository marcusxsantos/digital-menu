import { Container, Row, Col } from 'react-bootstrap';
import Menu from "../components/Menu";

function About(){
    return (
        <div>
            <Menu />
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        at mattis magna. Nullam a ullamcorper quam. In hac habitasse
                        platea dictumst. Duis at bibendum orci. Aliquam erat volutpat.
                    </p>
                    </Col>
                    <Col xs={12} md={6}>
                    <img
                        src="https://via.placeholder.com/300"
                        alt="About Us"
                        className="img-fluid"
                    />
                    </Col>
                </Row>            
            </Container>
        </div>
    )
}

export default About