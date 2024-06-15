import { FaArrowRight } from "react-icons/fa";
import { WiFahrenheit } from "react-icons/wi";
const NewsCard = ({ photo, title, subtitle }) => {
  return (
    <div className="newscard-main">
      <div className="newcard-image">
        <img src={photo} alt={title} />
      </div>

      <h3 className="newscard-title">{title}</h3>
      <h5 className="newscard-subtitle">{subtitle}</h5>
      <div className="newscard-seemore">
        Learn more <FaArrowRight style={{ fontSize: "12px" }} />
      </div>
    </div>
  );
};

export default NewsCard;
