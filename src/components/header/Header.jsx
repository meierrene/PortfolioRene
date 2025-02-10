import "./Header.css";
import { sections } from "../../utils/portfolioData";
import MyIcon from "../ui/MyIcon";

function Header() {
  const initUrl = "#";

  const closeNavbar = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark nav-container "
      id="home-btn"
    >
      <a className="menu-icons" href={initUrl}>
        <MyIcon className="logo" />
        <span>René Meier</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {sections.map((s) => {
            return (
              <li className="nav-item" key={s.title}>
                <a
                  className="menu-icons"
                  href={initUrl + s.ref}
                  onClick={closeNavbar}
                >
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
