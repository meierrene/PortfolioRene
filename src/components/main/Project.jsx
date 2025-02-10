import "./Project.css";

const Project = (props) => {
  return (
    <button className={`project-icon ${!props.description ? "postcard" : ""}`}>
      <div className={!props.description ? "gallery-img" : ""}>
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          <img
            src={`./img/projects/${props.image}`}
            className={props.description && "d-block w-100"}
            alt={props.name}
          />
        </a>
      </div>
      {props.description ? (
        <p className="description">{props.description}</p>
      ) : (
        <p className="description">{props.name}</p>
      )}
    </button>
  );
};

export default Project;
