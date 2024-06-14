// eslint-disable-next-line react/prop-types
const PeopleCard = ({photo,name}) => {
  return (
    <div className="peopleCard">

      <div className="person-div">

      <img src={photo} alt="person" className="person-hover" />

      </div>
      <p className="person-name">{name}</p>
    </div>
  );
};

export default PeopleCard;
