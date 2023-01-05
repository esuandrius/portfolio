import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/andrius.adomaitis.52"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-facebook-messenger-alt" title="FaceBook"></i>
      </a>

      <a
        href="https://github.com/esuandrius"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt" title="GitHub"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/andrius-adomaitis-1a9975237/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt" title="LinkedIn"></i>
      </a>
    </div>
  );
};

export default Social;
