import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="footer footer-center text-base-content rounded p-10 dark:border-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/About" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              className="hover:scale-110 cursor-pointer"
              href="https://www.facebook.com/profile.php?id=61559512087620"
              target="_blank"
            >
              <FaFacebook size={25} />
            </a>
            <a
              className="hover:scale-110 cursor-pointer"
              href=" "
              target="_blank"
            >
              <FaYoutube size={25} />
            </a>
            <a
              className="hover:scale-110 cursor-pointer"
              href="https://www.instagram.com/z_o_r_e_auto_parts/"
              target="_blank"
            >
              <FaInstagramSquare size={25} />
            </a>
            <a
              className="hover:scale-110 cursor-pointer b"
              href="https://maps.app.goo.gl/QDPdoTp4bFimJXyL8"
              target="_blank"
            >
              <FaMapMarkerAlt size={25} />
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-red-600">
            Copyright © {new Date().getFullYear()} - All right reserved by ZORE
            Auto Parts Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
