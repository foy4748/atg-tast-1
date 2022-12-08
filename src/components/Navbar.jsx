import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavBar({ handleShow, handleClose }) {
  return (
    <Navbar className="d-none d-lg-block" bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <img src="/Brand.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <div className="d-lg-flex justify-content-center">
          <Navbar.Collapse>
            <Nav className="my-2 my-lg-0" navbarScroll>
              <Form className="d-flex mx-5">
                <Button variant="outline-none">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <NavDropdown
                title="Create your account it's free"
                id="navbarScrollingDropdown"
                className="mx-5"
              >
                <NavDropdown.Item
                  href="#"
                  onClick={() => handleShow("Create Account")}
                >
                  Create Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    handleShow("Login");
                  }}
                >
                  Login
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
