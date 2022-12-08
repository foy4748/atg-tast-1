import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/Banner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Nav2 from "./components/Nav2";
import AuthModal from "./components/AuthModal";
import Sidebar from "./components/Sidebar";

import { Container, Row, Col } from "react-bootstrap";

import { useState } from "react";

import MobileNav from "./components/MobileNav";

import {
  faPencil,
  faMicroscope,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
const cardData = [
  {
    genre: "Article",
    genreIcon: faPencil,
    title: " What if famous brands had regular fonts? Meet RegulaBrands! ",
    content:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei...",
    authorName: "Sarthak Kamra",
    cardImg: "/CardImg1.png",
    authorImg: "/AuthorImg1.png",
  },
  {
    genre: "Education",
    genreIcon: faMicroscope,
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    content:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei...",
    authorName: "Sarah West",
    cardImg: "/CardImg2.png",
    authorImg: "/AuthorImg2.png",
  },
  {
    genre: "Meetup",
    genreIcon: faCalendar,
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    content:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei...",
    authorName: "Ronal Jones",
    cardImg: "/CardImg3.png",
    authorImg: "/AuthorImg3.png",
  },
];

function App() {
  // Modal States
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (title) => {
    setModalTitle(title);
    setShow(true);
  };

  return (
    <>
      <AuthModal
        handleClose={handleClose}
        show={show}
        modalTitle={modalTitle}
      />
      <Navbar handleShow={handleShow} handleClose={handleClose} />
      <Banner />
      <Container>
        <Nav2 />
        <MobileNav />
        <Row>
          <Col xs={12} lg={9}>
            {cardData.map((cardDetails, idx) => {
              return <Card cardDetails={cardDetails} key={idx} />;
            })}
          </Col>
          <Col className="d-none d-lg-block">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
