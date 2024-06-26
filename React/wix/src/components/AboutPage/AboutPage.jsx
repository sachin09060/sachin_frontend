import React from "react";
import NavBarUi from "../ReusableComponents/NavBarUi/NavBarUi";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FooterPartUi from "../ReusableComponents/FooterPartUi";
import "../Styles/AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <NavBarUi />
      <Container className="bg-dark-subtle">
        <Row className="flex">
          <Col sm={12} md={6} lg={5}>
            <img
              src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_766,h_884,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg"
              alt=""
              height={800}
              width={600}
              id="page-img"
            />
          </Col>
          <Col sm={12} md={6} lg={6} className="p-4">
            <div className="d-flex flex-column justify-content-center h-100">
              <h2 id="main-name" className="ml-5">
                About Jade
              </h2>
              <div style={{ textAlign: "initial" }}>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page.
                </p>
                <p>
                  This is a great space to write long text about your company
                  and your services. You can use this space to go into a little
                  more detail about your company.
                </p>
                <label>
                  <h5>Education:</h5>
                </label>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
                <label>
                  <h2>Awards & Nominations:</h2>
                </label>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  Let your users get to know you.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterPartUi />
    </>
  );
};

export default AboutPage;
