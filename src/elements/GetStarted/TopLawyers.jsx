import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CardLawyers from '../../components/CardLawyers';
import Lawyers1 from '../../assets/images/lawyers.png';
import Lawyers2 from '../../assets/images/lawyers2.png';
import Lawyers3 from '../../assets/images/lawyers3.png';
import Lawyers4 from '../../assets/images/lawyers4.png';
import Lawyers5 from '../../assets/images/lawyers5.png';
import Lawyers6 from '../../assets/images/lawyers6.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopLawyers = () => {
  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-0">
      <h1 className="text-center text-2xl lg:text-4xl text-[#112340] font-semibold">
        Top Rated Lawyers
      </h1>
      <div className="mt-9 my-24 relative">
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full flex items-center px-[60px] md:px-0">
          <Link to='/login'>
            <CardLawyers
              name="Alexa Rachel"
              image={Lawyers1}
              hukum="Hukum Pidana"
            />
          </Link>

          <Link to='/login'>
            <CardLawyers
              name="Liu Yue Tian Park"
              image={Lawyers2}
              hukum="Hukum Bisnis"
            />
          </Link>

          <Link to='/login'>
            <CardLawyers
              name="Nairobi Putri Hayza"
              image={Lawyers3}
              hukum="Hukum Kontrak"
            />
          </Link>

          <Link to='/login'>
            <CardLawyers
              name="James Rivillia"
              image={Lawyers4}
              hukum="Hukum Properti"
            />
          </Link>

          <Link to='/login'>
            <CardLawyers
              name="John McParker Steve"
              image={Lawyers5}
              hukum="Hukum Bisnis"
            />
          </Link>

          <Link to='/login'>
            <CardLawyers
              name="Alexander Jannie"
              image={Lawyers6}
              hukum="Hukum Kontrak"
            />
          </Link>
        </Slider>
        <button
          className="absolute top-1/2 left-4 md:left-0 lg:-left-16 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}>
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-4 md:right-0 lg:-right-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => sliderRef.current.slickNext()}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TopLawyers;
