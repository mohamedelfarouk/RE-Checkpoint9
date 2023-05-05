import React from "react";
import bootstrap from "bootstrap";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/imgs/1.jpg";
import img2 from "../assets/imgs/2.jpg";
import img3 from "../assets/imgs/3.jpeg";

const Pics = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Pics;
