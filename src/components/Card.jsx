import styles from "./Card.module.css";
import { Container } from "react-bootstrap";

import {
  faEllipsis,
  faShareNodes,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Dropdown, DropdownButton } from "react-bootstrap";

export default function Card({ cardDetails }) {
  const { genre, genreIcon, title, content, authorName, authorImg, cardImg } =
    cardDetails;
  return (
    <div className={`${styles.cardContainer} border rounded w-100`}>
      <img src={cardImg} alt="" className="img-fluid" />
      <Container className="my-3">
        <p>
          <FontAwesomeIcon icon={genreIcon} /> {genre}
        </p>
        <div className="d-flex justify-content-between">
          <p className="h5">{title}</p>
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
        <p>{content}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={authorImg} className={styles.AuthorImg} alt="" />
            <div className="ps-3">
              <h5 className="m-0">{authorName}</h5>
              <p className="d-block d-md-none">
                <FontAwesomeIcon icon={faEye} /> 1.4k views
              </p>
            </div>
          </div>
          <p className="d-none d-md-block m-0 p-0">
            <FontAwesomeIcon icon={faEye} /> 1.4k views
          </p>
          <p className="p-2 m-0">
            <FontAwesomeIcon icon={faShareNodes} />
          </p>
        </div>
      </Container>
    </div>
  );
}
