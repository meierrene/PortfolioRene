import { heroData } from "../../utils/portfolioData";
import "./Hero.css";

function Hero() {
  return (
    <section className="greetings-container">
      <h1 className="h1-title">{heroData.title}</h1>
      <img className="hero-image" src={"img/" + heroData.image} alt="hero" />
      <h2 className="h2-title">{heroData.description}</h2>
    </section>
  );
}

export default Hero;
