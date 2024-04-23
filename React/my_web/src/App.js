import './App.css';
import NavbarComponent from './components/Navbar';
import HeroSection from './components/HeroSection';
import CardComponent from './components/Card';
import { Container, Row } from 'react-bootstrap';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <NavbarComponent /> 
      <HeroSection /> 

      <section className="cards" style={{display: 'flex'}}>
        <Container>
          <Row xs={1} md={3} className="g-3"> 
            <CardComponent
              title="Card Title 1"
              text="This is the content for the first card."
              buttonText="Learn More"
              buttonLink="#"
            />
            <CardComponent
              title="Card Title 2"
              text="This is the content for the second card."
              buttonText="Explore"
              buttonLink="#"
            />
              <CardComponent
              title="Card Title 3"
              text="This is the content for the first card."
              buttonText="Learn More"
              buttonLink="#"
            />
            <CardComponent
              title="Card Title 4"
              text="This is the content for the second card."
              buttonText="Explore"
              buttonLink="#"
            />
            <CardComponent
              title="Card Title five"
              text="This is the content for the first card."
              buttonText="Learn More"
              buttonLink="#"
            />
          </Row>
        </Container>
        <Container style={{paddingLeft: '0px',paddingRight: '0px', width: '500px', height:'700px', border:'1px solid #96959580'}}>
          <p><a href=" ">Have you ever visited this site before?</a>
          </p>
        </Container>
      </section>
    </div>
  );
};

export default App; 
