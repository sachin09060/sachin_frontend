import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = ({ title, text, buttonText, buttonLink }) => {
    return (
      <Card style={{ width: '19rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" href={buttonLink}>
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    );
  };
  
  export default CardComponent;
  