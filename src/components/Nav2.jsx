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

export default function Nav2() {
  return (
    <Navbar bg="light" variant="light" sticky="top" className="mt-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home" active>
            All Posts(32)
          </Nav.Link>
          <Nav.Link href="#features">Article</Nav.Link>
          <Nav.Link href="#features">Event</Nav.Link>
          <Nav.Link href="#features">Education</Nav.Link>
          <Nav.Link href="#features">Job</Nav.Link>
        </Nav>
      </Container>
      <Container>
        <Nav className="ms-auto">
          <Nav.Link href="#features" as={Button} variant="outline-primary">
            Write a Post
          </Nav.Link>
          <Nav.Link href="#features" as={Button} className="text-white ms-2">
            Join a Group
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
