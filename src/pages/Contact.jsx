import Menu from "../components/Menu";
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Footer from "../components/Footer";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário.
        console.log(formData);
      };
    
      return (
        <div>
            <Menu />
            <Container>
                <h1>Entre em Contato</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Group controlId="email">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Group controlId="message">
                    <Form.Label>Mensagem:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Enviar
                    </Button>
                </Form>
            </Container>
            <Footer />
        </div>

      );
}

export default Contact
