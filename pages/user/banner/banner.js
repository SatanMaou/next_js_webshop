import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Img from "react-bootstrap/Image";
import Style from "/styles/slider.module.css";
import React, { useState } from "react";
import Post from "../comments_User/post";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={Style.banner}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={Style.slider}
      >
        <Carousel.Item>
          <Img
            className={Style.sliderImg}
            src="/img/slider1.jpg"
            alt="slider 1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Img
            className={Style.sliderImg}
            src="/img/slider2.jpg"
            alt="slider 2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Img
            className={Style.sliderImg}
            src="/img/slider3.jpg"
            alt="slider 3"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Img
            className={Style.sliderImg}
            src="/img/slider2.jpg"
            alt="slider 4"
          />
        </Carousel.Item>
      </Carousel>

      <span className={Style.line}></span>

      <div className={Style.boxPost}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Slider;
