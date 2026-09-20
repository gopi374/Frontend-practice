const Card = (props) => {
  return (
    <div className="child">
      <div className="top">
        <img src={props.logo} alt={`${props.company} logo`} />
        <button>Save</button>
      </div>

      <div className="center">
        <p className="company">{props.company} · {props.posted}</p>
        <h2>{props.title}</h2>
        <p className="location">{props.location}</p>
      </div>

      <div className="bottom">
        <span>{props.type}</span>
        <strong>{props.salary}</strong>
      </div>
    </div>
  );
};

export default Card;
