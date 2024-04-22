import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function MainContent() {
  return (
    <main>
      <Container>
        <Row >
          <Col sm={12} className="text-center mt-5" >
            <div className="mt-6 btn btn-primary bg-primary-subtle text-primary border rounded-pill fw-bold">
              Portfolio
            </div>
          </Col>
        </Row>
      </Container>
      <Container >
        <Row>
          <Col sm={12} className="text-center mt-3">
            <h2>
              Check our <span className="text-primary fw-bold">Portfolio</span>
            </h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row >
          <Col sm={12} className="text-center mb-4" >
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem tenetur quibusdam dolorum vel beatae facilis architecto quasi amet laborum saepe.
            </p>
          </Col>
        </Row>
        <Row >
          <Col sm={12} style={{display: 'flex' , justifyContent: 'center'}} >
            <p style={{marginRight:'25px'}}>ALL 
            </p>
            <p style={{marginRight:'25px'}}>APP 
            </p>
            <p style={{marginRight:'25px'}}>CARD 
            </p>
            <p style={{marginRight:'25px'}}>WEB
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col sm={12} md={6} lg={3} style={{marginRight:"45px", marginLeft:"45px"}}>
            <Card
                style={{ width: "20rem", height: "12rem" }}
              className="shadow me-4"
            >
              <Card.Img
                variant="top"
                style={{ width: "20rem", height: "12rem" }}
                src="https://m.media-amazon.com/images/I/51OQ3sPBAsL._AC_UY1100_.jpg"
              />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} style={{marginRight:"45px"}}>
            <Card
                style={{ width: "20rem", height: "12rem" }}
              className="shadow me-4"
            >
              <Card.Img
                style={{ width: "20rem", height: "12rem" }}
                variant="top"
                src="https://qph.cf2.quoracdn.net/main-qimg-cc7a9cb656a1851337c7dce3ce7d4e33-lq"
              />

            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} style={{marginRight:"45px"}}>
            <Card
                style={{ width: "20rem", height: "12rem" }}
              className="shadow me-4"
            >
              <Card.Img
                style={{ width: "20rem", height: "12rem" }}
                variant="top"
                src="data:image/jpeg;base64,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"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default MainContent;
