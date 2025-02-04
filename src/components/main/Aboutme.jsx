import './Aboutme.css';

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h2 className="h2-title">About me</h2>
      <div className="story-telling">
        <p>
          <span role="img" aria-label="waving hand">
            👋
          </span>
          Hey!
        </p>
        <br />
        <p>
          Greetings, Earthlings! I’m René Meier, an airline captain turned
          full-stack developer, with a cosmic passion for technology and space
          exploration. After navigating the skies as a pilot with over 5000
          flight hours, I’ve set my sights on a new frontier—building innovative
          solutions through code. My journey from the cockpit to coding is
          fueled by curiosity, a knack for problem-solving, and an insatiable
          thirst for innovation. With a Bachelor’s degree in Mechanical
          Engineering and a deep fascination for how things work—whether it's
          the inner workings of an aircraft or the architecture of a complex web
          application—I’ve embraced the vast universe of JavaScript
          technologies. Over the years, I’ve mastered React, Node.js, and CSS
          frameworks, crafting projects that seamlessly combine functionality
          and creativity. My portfolio, themed around my love for outer space,
          is a testament to my technical skills and adventurous spirit. It
          features projects like a quasi-replica of the Super Mario game, the
          fully-fledged MeiersBook social platform, and innovative apps like
          AeroRoster, a mobile app designed for airline pilots to manage their
          schedules and access flight information. Fluent in Portuguese, German,
          and English, with a star map of basic knowledge in Italian, Swedish,
          and Finnish, I’m on a mission to contribute to pioneering projects in
          the Nordic region, Europe, or North America. My aviation background
          has honed my precision, attention to detail, and ability to perform
          under pressure—qualities I now bring to the tech industry. When I’m
          not coding or flying, you’ll find me gazing at the stars, exploring
          advancements in space technology, or diving into new languages. Let’s
          connect and collaborate—because in this universe, the sky is no longer
          the limit.
        </p>
        <br />
        <p>
          <span role="img" aria-label="globe">
            🌍
          </span>
          Where to find me?
        </p>
        <div className="icons-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/meierrene"
          >
            <ion-icon class="icons" name="logo-github"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/renemeierdev/"
          >
            <ion-icon class="icons" name="logo-linkedin"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/renemeier.de/"
          >
            <ion-icon class="icons" name="logo-instagram"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://steamcommunity.com/profiles/76561198223067764/"
          >
            <ion-icon class="icons" name="logo-steam"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
