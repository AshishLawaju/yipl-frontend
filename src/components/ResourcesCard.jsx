import { FaArrowRight } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { TbTool } from "react-icons/tb";

const ResourcesCard = () => {
  return (
    <div className="resourcecard-main">

      <div className="resourcescard-icon">
        <div className="resourcescard-icon-box">
        <TbTool  style={{color:'#A276FF' ,fontSize:"32px"}} />
        </div>
      <h2 className="resourcescard-icon-title">Tool</h2>
      </div>
      <h3 className="resourcecard-title">Defence Elvis</h3>
      <h5 className="resourcecard-subtitle">
        It allows creating networks of public spending on goods services used in
        defense in 28 EU countries It allows creating networks of public
        spending on goods services used in defense in 28 EU countries
      </h5>

      <div className="resourcecard-seemore">Learn more  <FaArrowRight style={{ fontSize: "12px" }} /></div>
    </div>
  );
};

export default ResourcesCard;
