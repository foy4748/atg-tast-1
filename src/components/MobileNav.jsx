import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileNav() {
  return (
    <Navbar
      bg="light"
      variant="light"
      sticky="top"
      className="mt-3 d-flex d-lg-none"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#features" active>
            Posts(368)
          </Nav.Link>
        </Nav>
      </Container>
      <Container>
        <Nav className="ms-auto">
          <Nav.Link href="#features">
            Filter All <FontAwesomeIcon icon={faCaretDown} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
