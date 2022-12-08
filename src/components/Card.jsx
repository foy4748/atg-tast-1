import styles from "./Card.module.css";
import { Container } from "react-bootstrap";

import {
  faEllipsis,
  faPencil,
  faShareNodes,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Dropdown, DropdownButton } from "react-bootstrap";

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <img src="/CardImg1.png" alt="" />
      <Container className="mt-3">
        <p>
          <FontAwesomeIcon icon={faPencil} /> Article
        </p>
        <div className="d-flex justify-content-between">
          <p className="border">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </p>
          <DropdownButton
            title={<FontAwesomeIcon icon={faEllipsis} />}
            drop="start"
            variant="btn-outline"
            className="mt-2"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </DropdownButton>
        </div>
        <p>I’ve worked in UX for the better part of a decade. F..</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="/AuthorImg1.png" className={styles.AuthorImg} alt="" />
            <div className="p-3">
              <h5 className="m-0">Sarthak Kamra</h5>
              <p className="d-block d-md-none">
                <FontAwesomeIcon icon={faEye} />
                1.4k views
              </p>
            </div>
          </div>
          <p className="d-none d-md-block">
            <FontAwesomeIcon icon={faEye} /> 1.4k views
          </p>
          <p>
            <FontAwesomeIcon icon={faShareNodes} />
          </p>
        </div>
      </Container>
    </div>
  );
}
