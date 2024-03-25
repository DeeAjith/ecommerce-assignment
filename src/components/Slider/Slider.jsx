import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Include theme for styling
import $ from "jquery";

const slides = [
  { id: 1, content: "Get 10% off on business sign up" },
  { id: 2, content: "Free Shipping on orders of $599" },
];

const SliderWithArrows = () => {
  const [offerWidth, setOfferWidth] = useState(30);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false, // Hide navigation dots (optional)
    arrows: true,
    infinite: false, // Enable infinite loop
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll by one slide
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Change autoplay interval in milliseconds
    beforeChange: (current, next) => {
      setOfferWidth($(`[data-index=${current}]`).text().length);
    }, // Update current slide index
  };

  return (
    <section className="text-sm px-4 text-center font-medium py-2 bg-gray-100 flex justify-center">
      <div className="slider-container w-[30ch] overflow-hidden text-ellipsis">
        <Slider
          {...settings}
          className="flex"
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {slides.map((slide) => {
            return (
              <div key={slide.id} className="slide">
                {slide.content}
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SliderWithArrows;
const NextArrow = ({ onClick }) => {
  return (
    <button className="slider-arrow next relative" onClick={onClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.53979 12.5405L5.5398 12.5405L10.0806 8.00028L5.5398 3.4601L5.53979 3.46009C5.41784 3.33814 5.34933 3.17274 5.34933 3.00028C5.34933 2.82781 5.41784 2.66241 5.53979 2.54046C5.66174 2.41851 5.82714 2.35 5.99961 2.35C6.17207 2.35 6.33747 2.41851 6.45942 2.54046L11.4594 7.5404C11.4594 7.54042 11.4594 7.54044 11.4594 7.54046C11.5198 7.60082 11.5678 7.67248 11.6005 7.75137C11.6332 7.83028 11.65 7.91486 11.65 8.00028C11.65 8.0857 11.6332 8.17028 11.6005 8.24919C11.5678 8.32807 11.5198 8.39974 11.4594 8.46009C11.4594 8.46011 11.4594 8.46013 11.4594 8.46015L6.45942 13.4601C6.39904 13.5205 6.32735 13.5684 6.24846 13.6011C6.16956 13.6337 6.085 13.6506 5.99961 13.6506C5.91421 13.6506 5.82965 13.6337 5.75076 13.6011C5.67186 13.5684 5.60017 13.5205 5.53979 13.4601C5.47941 13.3997 5.43151 13.328 5.39883 13.2491C5.36615 13.1702 5.34933 13.0857 5.34933 13.0003C5.34933 12.9149 5.36615 12.8303 5.39883 12.7514C5.43151 12.6725 5.47941 12.6008 5.53979 12.5405Z"
          fill="black"
          stroke="black"
          strokeWidth="0.3"
        />
      </svg>
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="slider-arrow prev relative" onClick={onClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4602 12.5405L10.4602 12.5405L5.91941 8.00028L10.4602 3.4601L10.4602 3.46009C10.5822 3.33814 10.6507 3.17274 10.6507 3.00028C10.6507 2.82781 10.5822 2.66241 10.4602 2.54046C10.3383 2.41851 10.1729 2.35 10.0004 2.35C9.82793 2.35 9.66253 2.41851 9.54058 2.54046L4.54064 7.5404C4.54062 7.54042 4.5406 7.54044 4.54058 7.54046C4.48017 7.60082 4.43225 7.67248 4.39955 7.75137C4.36684 7.83028 4.35 7.91486 4.35 8.00028C4.35 8.0857 4.36684 8.17028 4.39955 8.24919C4.43225 8.32807 4.48017 8.39974 4.54058 8.46009C4.5406 8.46011 4.54062 8.46013 4.54064 8.46015L9.54058 13.4601C9.60096 13.5205 9.67265 13.5684 9.75154 13.6011C9.83044 13.6337 9.915 13.6506 10.0004 13.6506C10.0858 13.6506 10.1703 13.6337 10.2492 13.6011C10.3281 13.5684 10.3998 13.5205 10.4602 13.4601C10.5206 13.3997 10.5685 13.328 10.6012 13.2491C10.6339 13.1702 10.6507 13.0857 10.6507 13.0003C10.6507 12.9149 10.6339 12.8303 10.6012 12.7514C10.5685 12.6725 10.5206 12.6008 10.4602 12.5405Z"
          fill="black"
          stroke="black"
          strokeWidth="0.3"
        />
      </svg>
    </button>
  );
};
