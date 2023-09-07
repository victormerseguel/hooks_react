import githubIcon from "../assets/github-icon.svg";

import "./Footer.css";

const Footer = ({ url }) => {
  return (
    <div className="github">
      <span className="divider2"></span>
      <a href={url} target="_blank">
        <button className="githubButton">
          <img src={githubIcon} alt="GitHub" />
          Acesse o repositório desta página aqui
        </button>
      </a>
    </div>
  );
};

export default Footer;
