import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="description">
        Copyright &copy; {new Date().getFullYear()} by René Meier.
        <br />
        This App was built with React.JS
        <span className="react-icon">
          <img src="react.svg" alt="React Logo spinning" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
