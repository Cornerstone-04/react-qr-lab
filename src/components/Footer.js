import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <span> Ephraim Cornerstone &copy;2020</span>|
        <a href="https://github.com/Cornerstone-04/">
          <i className="fab fa-github-alt"></i>
        </a>
        |
        <a href="https://www.facebook.com/profile.php?id=100070679834824">
          <i className="fab fa-facebook-f"></i>
        </a>
        |{" "}
        <a href="https://www.instagram.com/cornerstone.01/">
          <i className="fab fa-instagram"></i>
        </a>
        |
        <a href="https://www.linkedin.com/in/cornerstone-ephraim/">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
