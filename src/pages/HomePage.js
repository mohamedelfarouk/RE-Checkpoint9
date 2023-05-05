import React from "react";
import { Link } from "react-router-dom";
import Pics from "../components/Pics";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <>
      <Pics />
      <br />
      <Link to="/todo">
        <Button variant="secondary" className="d-block w-100">
          Go To MY TO DO LIST
        </Button>
      </Link>
    </>
  );
};

export default HomePage;
