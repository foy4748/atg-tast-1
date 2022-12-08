import { Modal, Button, Form } from "react-bootstrap";

export default function AuthModal({ handleClose, show, modalTitle }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Form className="w-100">
            {modalTitle === "Create Account" ? (
              <div className="d-flex">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </div>
            ) : null}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="w-100">
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </div>
          </Form>
          <div className="d-none d-lg-block">
            <img src="/AuthPage.png" alt="" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
