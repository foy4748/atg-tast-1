import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/Banner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Nav2 from "./components/Nav2";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { faLocationDot, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <Nav2 />
        <Row>
          <Col xs={12} lg={9}>
            <Card />
            <Card />
            <Card />
            <Card />
          </Col>
          <Col className="d-none d-lg-block">
            <div className="mt-5">
              <Form>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center m-0 me-3">
                    <p className="m-0 p-0">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </p>
                  </div>
                  <Form.Control
                    type="search"
                    placeholder="Enter your Location"
                    aria-label="Search"
                  />
                </div>
              </Form>
              <div className="d-flex mt-5">
                <p className="m-0 p-0">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </p>
                <p className="m-0 p-0 ps-2">
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
