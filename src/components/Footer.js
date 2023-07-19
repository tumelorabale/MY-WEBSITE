import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon className="insta" />
        <TwitterIcon className="twiter" />
        <FacebookIcon className="facebook" />
        <LinkedInIcon className="linkedin" />
      </div>
      <p> &copy; 2023 tumelorabale.com</p>
    </div>
  );
}

export default Footer;