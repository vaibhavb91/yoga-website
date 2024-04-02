import React from "react";
import { FaInstagram } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

import "./footer.css";
const socialMediaLinks = [
  {
    logo: <FaInstagram />,
    link: "https://www.google.com/",
  },
  {
    logo: <FaFacebook />,
    link: "https://www.google.com/",
  },
  {
    logo: <FaWhatsapp />,
    link: "https://www.google.com/",
  },
  {
    logo: <FaXTwitter />,
    link: "https://www.google.com/",
  },
  {
    logo: <FaYoutube />,
    link: "https://www.google.com/",
  },
];
const Footer = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "black",
          paddingTop: 40,
          paddingBottom: 20,
          color: "white",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center mt-3">
              <GrYoga className="logo" />
              <h4 className="mt-3 ">Yoga website</h4>
            </div>

            <div className="col-md-4 text-center">
              <h4 className="header-text">Links</h4>
              <ul className="footclass">
                <li className="list-footer">
                  <a href="">classes</a>
                </li>
                <li className="list-footer">
                  <a href="">Programs</a>
                </li>
                <li className="list-footer">
                  <a href="">Teachers</a>
                </li>
                <li className="list-footer">
                  <a href="">Articles</a>
                </li>
                <li className="list-footer">
                  <a href="">Resources</a>
                </li>
                <li className="list-footer">
                  <a href="">Academy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="header-text">Contact Us</h4>
              <p>
                <span>
                  <IoIosCall style={{ fontSize: "25px" }} />
                </span>
                <span style={{ fontWeight: "bolder" }}> +91 1234567999</span>
              </p>
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  className="social-link"
                >
                  {link.logo}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mt-1 bg-secondary p-1">
        <p className="fw-bold mt-3">
          © Copyright <span> Yoga.com </span> | All Rights Reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
