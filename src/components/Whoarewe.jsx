import { FaArrowRight } from "react-icons/fa";
import people1 from "../assets/people1.png";
import people2 from "../assets/people2.png";
import people3 from "../assets/people3.png";
import people4 from "../assets/people4.png";
import PeopleCard from "./PeopleCard";
const Whoarewe = () => {
  return (
    <section className="container">
      <div className="whor-main">
        <div className="whor-sec1">
          <h3 className="whor-sec1-title">Who we are</h3>
          <h5 className="whor-sec1-subtitle">
            We are a collaboration of Non Govt. and professionals working to
            ensure that government spending is done fairly, openly, efficiently,
            and creates the best value for money and best outcomes for Europe.
            We are working at the national and EU levels to advance the
            principles of openness in spending of funds, procurement, and
            company ownership within the EU.
          </h5>

          <p className="whor-sec1-seemore">
            see more <FaArrowRight style={{fontSize:'12px'}}/>
          </p>
        </div>
        <div className="whor-sec2">
          <div className="whor-sec21">
            <PeopleCard photo={people1} name={"Adriana Homolova"} />
            <PeopleCard name={"Karolis Granickas"} photo={people4} />
          </div>
          <div className="whor-sec22">
            <PeopleCard photo={people2} name={"Sandor Lederer"}  />
            <PeopleCard photo={people3}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoarewe;
