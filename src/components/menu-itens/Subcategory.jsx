import React from 'react';
import { Card } from 'react-bootstrap';

const Subcategory = ({ name }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Subcategory;