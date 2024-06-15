/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import { PiGreaterThanThin, PiLessThan, PiLessThanThin } from "react-icons/pi";
import { GiHidden } from "react-icons/gi";
import { FaChevronLeft } from "react-icons/fa";
import { LuChevronLeft } from "react-icons/lu";
import { HiChevronLeft } from "react-icons/hi";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
const Company = () => {
  const logoList = [logo1, logo2, logo3, logo4, logo5];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{}} onClick={onClick}>
        <VscChevronRight
          className="hitter"
          style={{
            width: "35",
            height: "35px",
            position: "absolute",
            right: 0,
            top: -12,
            fontSize: "35px",
            color: "black",
            fontWeight: 300,
          }}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "hidden" }}
        onClick={onClick}
      >
        <VscChevronLeft
          className=""
          style={{
            width: "35",
            height: "35px",
            position: "absolute",
            left: -2,
            top: -12,
            fontSize: "35px",
            color: "black",
            fontWeight: 300,
          }}
        />
      </div>
    );
  }
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    // centerPadding: "60px",
    autoplay: true,
    speed: 1000,
   
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <div className=" company-main">
      <div className="container">
        <Slider {...settings}>
          {logoList.map((logo) => (
            <div key={logo} style={{}} >
              <img src={logo} alt="company logo" style={{margin:"auto"}}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Company;
