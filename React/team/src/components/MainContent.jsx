import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function MainContent() {
  return (
    <main>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <div className="mt-6 btn btn-primary bg-primary-subtle text-primary border rounded-pill fw-bold">
              TEAM
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} className="text-center mt-3">
            <h2>
              Our Hardworking <span className="text-primary fw-bold">Team</span>
            </h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} className="text-center mt-3">
            <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita <br />
            at voluptas atque vitae autem
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center mt-3">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Card
              style={{ width: "18rem", height: "30rem" }}
              className="shadow me-4"
            >
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
              />

              <Card.Body>
                <Card.Title className="fw-bold">Walter White</Card.Title>
                <Card.Text>Chief Executive Officer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              style={{ width: "18rem", height: "30rem" }}
              className="shadow me-4"
            >
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title className="fw-bold">Sarah Johnson</Card.Title>
                <Card.Text>Product Manager</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              style={{ width: "18rem", height: "30rem" }}
              className="shadow me-4"
            >
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title className="fw-bold">William Anderson</Card.Title>
                <Card.Text>CTO</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              style={{ width: "18rem", height: "30rem" }}
              className="shadow me-4"
            >
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPouie7FRwSqIZ46XtaWlP_IWkGvUapENIoPM5EY_Ng&s"
              />
              <Card.Body>
                <Card.Title className="fw-bold">Amanda Jepson</Card.Title>
                <Card.Text>Accountant</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default MainContent;