import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/hero.jpeg";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="gcover" />

      <Navbar />
      <div className="hero-content container">
        <h1 className="title">Beautiful analytics to grow smarter</h1>

        <h3 className="subtitle">
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <br /> and retain more users. Trusted by over 4,000 startups.
        </h3>

        <button className="hero-btn">
          Why Catalog? <FaArrowRight />{" "}
        </button>
      </div>
    </section>
  );
};

export default Hero;
