import { FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const CampaignsCard = ({ title, description, photo }) => {
  return (
    <div className="ccard">
      <div>
        <img src={photo} alt={title} />
      </div>

      <div className="campaigns-card-content">
        <h2 className="camp-title">{title}</h2>
        <h4 className="camp-subtitle">
         {description}
        </h4>

        <p className="camp-learn">Learn More  <FaArrowRight style={{fontSize:'12px'}}/> 
        </p>
      </div>
    </div>
  );
};

export default CampaignsCard;
