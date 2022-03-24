import React from "react";
import footerImg from "../../img/logo.png";
import "./footer.css"

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img src={footerImg} alt="" className="footer-logo" />
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © Ideia feita com {' '} <a
          href="https://www.youtube.com/watch?v=hGAaWhxUPfY&t=330s" target="_blank" rel="noreferrer">VIDEO</a>.
      </span>
    </div>
  );
}

export default Footer;
