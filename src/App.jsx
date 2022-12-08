import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/Banner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <Card />
      </Container>
    </>
  );
}

export default App;
