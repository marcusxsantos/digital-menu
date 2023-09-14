import React from 'react';
import { Card } from 'react-bootstrap';

const MenuItem = ({ name, description, price }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;