import { FaArrowRight, FaCheck } from "react-icons/fa";
import ResourcesCard from "./ResourcesCard";
import { TbTool } from "react-icons/tb";
import { LuFileSpreadsheet } from "react-icons/lu";

const Resources = () => {
  return (
    <section className="rescources-main">
      <div className="container">
        <h2 className="resources-title">Latest Resources</h2>
        <h4 className="resources-subtitle">
          The latest resources includes Transparency Toolkit, Evidence, <br />
          Best Practices
        </h4>

        <div className="resources-cards">
          <div className="resourcecard-main">
            <div className="resourcescard-icon">
              <div className="resourcescard-icon-box">
                <TbTool style={{ color: "#A276FF", fontSize: "32px" }} />
              </div>
              <h2 className="resourcescard-icon-title">Tool</h2>
            </div>
            <h3 className="resourcecard-title">Defence Elvis</h3>
            <h5 className="resourcecard-subtitle">
              It allows creating networks of public spending on goods services
              used in defense in 28 EU countries It allows creating networks of
              public spending on goods services used in defense in 28 EU
              countries
            </h5>

            <div className="resourcecard-seemore">
              Learn more <FaArrowRight style={{ fontSize: "12px" }} />
            </div>
          </div>
          <div className="resourcecard-main">
            <div className="resourcescard-icon">
              <div
                className="resourcescard-icon-box"
                style={{ backgroundColor: "#F3F6FF" }}
              >
                <LuFileSpreadsheet
                  style={{ color: "#7291FF", fontSize: "32px" }}
                />
              </div>
              <h2 className="resourcescard-icon-title">Tool</h2>
            </div>
            <h3 className="resourcecard-title">Defence Elvis</h3>
            <h5 className="resourcecard-subtitle">
              It allows creating networks of public spending on goods services
              used in defense in 28 EU countries It allows creating networks of
              public spending on goods services used in defense in 28 EU
              countries
            </h5>

            <div className="resourcecard-seemore">
              Learn more <FaArrowRight style={{ fontSize: "12px" }} />
            </div>
          </div>
          <div className="resourcecard-main">
            <div className="resourcescard-icon">
              <div
                className="resourcescard-icon-box"
                style={{ background: "#FAE6E0" }}
              >
                <FaCheck style={{ color: "#FF5400", fontSize: "26px" }} />
              </div>
              <h2 className="resourcescard-icon-title">Tool</h2>
            </div>
            <h3 className="resourcecard-title">Defence Elvis</h3>
            <h5 className="resourcecard-subtitle">
              It allows creating networks of public spending on goods services
              used in defense in 28 EU countries It allows creating networks of
              public spending on goods services used in defense in 28 EU
              countries
            </h5>

            <div className="resourcecard-seemore">
              Learn more <FaArrowRight style={{ fontSize: "12px" }} />
            </div>
          </div>
        </div>

        <div className="resources-button-div">
          <button type="button" className="resources-button">
            View all resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
