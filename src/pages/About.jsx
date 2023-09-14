import { Container, Row, Col } from 'react-bootstrap';
import Menu from "../components/Menu";
import Footer from '../components/Footer';

function About(){
    return (
        <div>
            <Menu />
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                    <h1>Quem Somos</h1>
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
            <Footer />
        </div>
    )
}

export default About