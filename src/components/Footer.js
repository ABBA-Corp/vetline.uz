import React from "react";
import { HeaderLogo } from "./Svgs";
import { useGlobal } from "../redux/selectors";
import { Link } from "react-router-dom";
function Footer() {
  const { language } = useGlobal();
  return (
    <>
      <div className="md:bg-[#F8F3EC] bg-[#E94A4A] md:p-[2vw] p-[10vw] px-[6vw] relative z-20">
        <div className="flex gap-[10vw] justify-center md:items-center">
          <div className="flex flex-col md:justify-center justify-between">
            <div className="flex items-center gap-[1vw] md:w-[20vw] w-[40vw] md:flex-row flex-col md:mb-[1vw]">
              {/* <img
                src={require("../assets/img/logo.png")}
                className="w-[10vw] md:block hidden"
                
              /> */}
              <HeaderLogo footer />

              {/* <div className="w-[40vw] md:hidden block">
                <HeaderLogo />
              </div> */}
              <p className="md:text-[1vw] text-[3vw] md:text-[#000] text-[#fff]">
                {language['footerlogo']}
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95901.41990287435!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1665299729902!5m2!1sen!2s"
              style={{ border: 0 }}
              className="md:w-[25vw] w-[40vw] md:h-[15vw] h-[40vw] md:rounded-[1vw] rounded-[3vw]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex md:gap-[10vw] gap-[4vw] justify-center md:items-center md:flex-row flex-col">
            <div className="flex flex-col gap-[.6vw]">
              <h1 className="font-bold md:text-[1.7vw] text-[3.7vw] uppercase md:text-black text-[#fff]">
                {language["6"]}
              </h1>
              <a
                href="#tops"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                {language["6"]}
              </a>
              <Link
                to={"/about"}
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                {language["2"]}
              </Link>
              <a
                href="#tops"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                {language["tops"]}
              </a>
              <Link
                to={"/terms"}
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                {language["4"]}
              </Link>
              <a
                href="/#faq"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] "
              >
                F.A.Q
              </a>
              <a
                href="/#after"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                {language["after"]}
              </a>
            </div>

            <div className="flex flex-col gap-[.6vw]">
              <h1 className="font-bold md:text-[1.7vw] text-[3.7vw] uppercase md:text-black text-[#fff]">
                {language["5"]}
              </h1>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                +998995595353
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                +998946776769
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                info@vetline.uz
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                info@neolit.uz
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw] "
              >
                Toshkent shahar
              </a>
              <a
                href="#"
                className="md:text-[#9F9B97] hover:text-[#000] text-[#ffffff9d] md:text-[1.2vw] text-[3.2vw]"
              >
                Uchtepa tumani 12-uy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-[2vw] justify-center items-center flex gap-[3vw] relative z-20">
        <p className="md:text-[1.2vw] text-[2.2vw] md:text-black text-[#E94A4A]">
          Copyright © Neolit | Designed by
        </p>
        <p className="md:text-[1.2vw] text-[2.2vw] text-[#E94A4A]">
          abba marketing
        </p>
        <p className="md:text-[1.2vw] text-[2.2vw] md:text-black text-[#E94A4A]">
          - Powered by
        </p>
        <p className="md:text-[1.2vw] text-[2.2vw] text-[#E94A4A]">Abba marketing</p>
      </div>
    </>
  );
}

export default Footer;
