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

      <h1>

      Beautiful analytics to grow smarter
      </h1>

      <h3>
      Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </h3>

      <button>Why Catalog?  </button>
    </section>
  );
};

export default Hero;
