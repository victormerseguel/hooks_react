import githubIcon from "../assets/github-icon.svg";

import "./Footer.css";

const Footer = ({ name }) => {
  const urlHref = `https://github.com/victormerseguel/hooks_react/blob/main/src/components/${name}.jsx`;
  const urlMain = "https://github.com/victormerseguel/hooks_react/tree/main";
  let url;
  let text;

  if (name) {
    url = urlHref;
    text = "Acesse o repositório desta página aqui";
  } else {
    url = urlMain;
    text = "Acesse o repositório deste projeto aqui";
  }

  return (
    <div className="github">
      <span className="divider2"></span>
      <a href={url} target="_blank">
        <button className="githubButton">
          <img src={githubIcon} alt="GitHub" />
          {text}
        </button>
      </a>
    </div>
  );
};

export default Footer;
