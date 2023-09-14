import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Pricing() {
  const plans = [
    {
      title: 'Plano Gratuito',
      price: '0$',
      description: 'Acesso básico a recursos essenciais',
    },
    {
      title: 'Plano Profissional',
      price: '$19.99/mês',
      description: 'Recursos avançados para profissionais',
    },
    {
      title: 'Plano Expert',
      price: '$49.99/mês',
      description: 'Acesso total a todos os recursos',
    },
  ];

  return (
    <div>
        <Menu />
        <Container className="my-5">
        <h1 className="text-center mb-4">Nossos Planos de Preços</h1>
        <Row>
            {plans.map((plan, index) => (
            <Col key={index} md={4} className="mb-4">
                <Card>
                <Card.Body>
                    <Card.Title>{plan.title}</Card.Title>
                    <Card.Text>
                    <h2 className="text-center">{plan.price}</h2>
                    <p className="text-center">{plan.description}</p>
                    </Card.Text>
                    <div className="text-center">
                    <Button variant="primary">Assinar Agora</Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </Container>
        <Footer />
    </div>
  );
}

export default Pricing;
