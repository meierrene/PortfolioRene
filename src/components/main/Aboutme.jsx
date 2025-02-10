import { aboutMeData } from "../../utils/portfolioData";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="aboutme-container">
      <h2 className="h2-title">{aboutMeData.title}</h2>
      <div className="grid-aboutme">
        {aboutMeData.aboutMe.map((item, i) => (
          <div
            key={i}
            // className={`${"row"} ${i % 2 === 0 ? "" : "row-reverse"}`}
            className={`${"row"} ${i === 2 ? "" : "row-reverse"}`} // No picture on second row
          >
            <div className="text">
              <h3 className="h3-title" style={{ marginTop: "24px" }}>
                {item.title}
              </h3>
              <p className="description">{item.description}</p>
            </div>
            {i !== 1 && (
              <div className="image-about-me">
                <img src={"img/" + item.image} alt={item.title} />
              </div>
            )}
          </div>
        ))}
      </div>
      <h3 className="icons-heading h3-title ">🌍 Where to find me?</h3>
      <div className="icons-container">
        {aboutMeData.icons.map((icon, i) => (
          <a key={i} target="_blank" rel="noopener noreferrer" href={icon.href}>
            <ion-icon class="icons" name={icon.name}></ion-icon>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Aboutme;
