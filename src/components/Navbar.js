import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { setLanguage } from "../redux/actions/globalActions";
import { useGlobal } from "../redux/selectors";
import { ContactMan, HeaderLogo, PhoneNav } from "./Svgs";

function Navbar() {
  const { language, currentLang } = useGlobal();
  const dispatch = useDispatch();
  const changeLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  const [active, setActive] = useState(false);
  const pathname = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  
  return (
    <div>
      <nav className="px-[7vw] py-[1vw] bg-[#E94B4B] md:rounded-b-[3vw] rounded-b-[6vw] fixed w-[100vw] left-0 top-0 right-0 z-[40]">
        <ul className="md:flex items-center justify-between hidden">
          <li className="md:w-[8vw] text-center">
            <NavLink
              to="/products"
              className="text-[1vw] text-[#fff] hover:opacity-60"
            >
              {language["1"]}
            </NavLink>
          </li>
          <li className="md:w-[8vw] text-center">
            <NavLink
              to="/about"
              className="text-[1vw] text-[#fff] hover:opacity-60"
            >
              {language["2"]}
            </NavLink>
          </li>
          <li className="md:w-[8vw] text-center">
            <a
              href="/#tops"
              className="text-[1vw] text-[#fff] hover:opacity-60"
            >
              {language["tops"]}
            </a>
          </li>
          <li className="md:w-[8vw] text-center">
            <a href="/" className="text-[1vw] text-[#fff] hover:opacity-60">
              {/* <img
                className="w-[10vw]"
                src={require("../assets/img/logo.png")}
                alt=""
              /> */}
              <HeaderLogo />
            </a>
          </li>
          <li className="md:w-[8vw] text-center">
            <NavLink
              to="/terms"
              className="text-[1vw] text-[#fff] hover:opacity-60"
            >
              {language["4"]}
            </NavLink>
          </li>
          <li className="md:w-[8vw] text-center">
            <button className="flex items-center gap-[.4vw] bg-[#ffffff46] p-[.4vw] rounded-[.3vw]  border border-transparent hover:bg-transparent hover:border-white transition cursor-pointer">
              <img
                src={`/assets/img/${currentLang}.png`}
                className="w-[1.8vw] h-[1.3vw] object-cover"
                alt=""
              />
              <select
                name=""
                id=""
                onClick={changeLanguage}
                defaultValue={localStorage["lang"]}
                className="text-[#fff] text-[1vw] bg-transparent outline-none"
              >
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
                <option value="en">En</option>
              </select>
            </button>
          </li>
          <li className="md:w-[8vw] text-center">
            <a href="tel:+998905997273">
              <button className="flex items-center gap-[.4vw] bg-[#ffffff46] p-[.4vw] px-[1vw] rounded-[.3vw] text-[1vw] text-[#fff] border border-transparent hover:bg-transparent hover:border-white transition">
                <ContactMan />
                {language["5"]}
              </button>
            </a>
          </li>
        </ul>
        <div className="md:hidden flex py-[5vw] justify-between items-center">
          <button
            onClick={() => setActive(!active)}
            className="text-[6vw] bg-[#F9F2EB] w-[10vw] h-[10vw] rounded-[50%] text-[#E94B4B]"
          >
            ☰
          </button>
          {/* <img
            className="w-[30vw]"
            src={require("../assets/img/logo.png")}
            alt=""
          /> */}
          <HeaderLogo />
          <a href="tel:+998905997273">
            <button className="text-[6vw] bg-[#F9F2EB] w-[10vw] h-[10vw] rounded-[50%] text-[#E94B4B] flex items-center justify-center">
              <PhoneNav />
            </button>
          </a>
          <ul
            className="absolute bg-[#E94B4B] text-[#fff] flex flex-col gap-[2vw] items-center p-[4vw]  rounded-b-[4vw] text-center text-[4vw] left-[5vw] w-[90vw] transition-[.8s]"
            style={{
              top: active ? "23vw" : "-100vh"
            }}
          >
            <li>
              <NavLink to="/products">{language["1"]}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{language["2"]}</NavLink>
            </li>
            <li>
              <a href="/#tops">{language["tops"]}</a>
            </li>
            <li>
              <NavLink to="/terms">{language["4"]}</NavLink>
            </li>
            <select
              onChange={changeLanguage}
              className="text-[#fff]  bg-transparent outline-none"
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
