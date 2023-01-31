import React from "react";
import "../Footer/Footer.css";
export default function Footer() {
  return (
    <div className="footer_container">
      <img className="footer_logo" src="./assets/logo.png" alt="" />
      <div className="footer_bottom">
        <ul className="footer_social">
          <li>
            <img src="./assets/Social_icons/facebook.svg" alt="facebook" />
          </li>
          <li>
            <img src="./assets/Social_icons/google.svg" alt="facebook" />
          </li>
          <li>
            <img src="./assets/Social_icons/whatsapp.svg" alt="facebook" />
          </li>
        </ul>

        <p className="copyright">© 2023 Tuulai. Built using AQUA and Tuulai Theme. 
        Terms and Conditions </p>
      </div>
    </div>
  );
}
