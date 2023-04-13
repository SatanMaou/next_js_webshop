import React from "react";
import { FaFacebook, FaGooglePlus, FaYoutube, FaInstagram } from "react-icons/fa";
import Style from "/styles/footer.module.css";
import StyleG from "/styles/general.module.css"

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4">
      <hr />
      <div className={Style.styleFooter}>
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className={StyleG.fontTitle}>about us</h5>
              <p>...</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className={StyleG.fontTitle}>liên hệ</h5>
              <ul className={Style.listLink}>
                <li>
                  <a href="#!">
                    <FaFacebook /> facebook
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <FaGooglePlus /> google
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <FaInstagram /> instagram
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <FaYoutube /> youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MyApp.com</a>
        </div>
      </div>
      <span className='pb-1'></span>
    </footer>
  );
};

export default Footer;
