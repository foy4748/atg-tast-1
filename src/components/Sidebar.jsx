import { Form } from "react-bootstrap";
import { faLocationDot, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Sidebar() {
  return (
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
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
}
