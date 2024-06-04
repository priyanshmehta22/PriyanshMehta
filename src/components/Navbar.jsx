import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { priyanshlogo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } navbarphone w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={priyanshlogo}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Priyansh &nbsp;
            <span className="sm:block hidden"> | Web Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden xl:flex gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <ul className="text-white-500 list-none hidden xl:flex gap-10">
          <li className="hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="mailto:priyansh9571mehta@gmail.com" target="_blank">
              Email
            </a>
          </li>
          <li className="hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="https://github.com/priyanshmehta22" target="_blank">
              Github
            </a>
          </li>
          <li className="text-white hover:text-white font-poppins text-[16px] font-medium cursor-pointer">
            <a
              href="https://www.linkedin.com/in/priyansh-mehta-8b44921bb/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="hover:text-white text-[18px] font-medium cursor-pointer">
            <a
              href="https://www.instagram.com/priyansh._.mehta/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>

        <div className="xl:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li className="text-white hover:text-white text-[16px] font-medium cursor-pointer">
                <a href="mailto:priyansh9571mehta@gmail.com" target="_blank">
                  Email
                </a>
              </li>
              <li className="text-white hover:text-white text-[16px] font-medium cursor-pointer">
                <a href="https://github.com/priyanshmehta22" target="_blank">
                  Github
                </a>
              </li>
              <li className="text-white hover:text-white font-poppins text-[16px] font-medium cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/priyansh-mehta-8b44921bb/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="hover:text-white text-[16px] font-medium cursor-pointer">
                <a
                  href="https://www.instagram.com/priyansh._.mehta/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
