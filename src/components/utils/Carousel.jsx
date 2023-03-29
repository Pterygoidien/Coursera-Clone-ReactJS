import React from "react";
import Slider from "react-slick";
import Card from "./Card";

import "../../scripts/scss/components/carousel.scss";

const Carousel = ({ items }) => {
  if (!Array.isArray(items) || items.length <= 0) return null;

  const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, style, onClick } = props;
    return (
      <div
        {...props}
        className='custom-prevArrow'
        onClick={onClick}
        style={{ ...style, display: onClick ? "block" : "none" }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
        </svg>
      </div>
    );
  };
  const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, style, onClick } = props;
    return (
      <div
        {...props}
        className='custom-nextArrow'
        onClick={onClick}
        style={{ ...style, display: onClick ? "block" : "none" }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
        </svg>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 982,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map(card => (
        <Card data={card} key={card.id} />
      ))}
    </Slider>
  );
};

export default Carousel;
