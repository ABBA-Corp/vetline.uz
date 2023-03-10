import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Slider from "react-slick";
import { getRestApi } from "../components/utils";
import { useGlobal } from "../redux/selectors";
function About() {
  const [activeHover, setActiveHover] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    getRestApi("results", setData);
  }, []);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (e) => {
    toast.success("Request has been sent");
    let inComing = `
    🗣Call me! %0A👤name : ${e.name}, %0A📱phone: ${e.phone}, %0A
  `;
    fetch(
      `https://api.telegram.org/bot6252325299:AAFx-LHCiQ06MUyhCw12JjwfhYEDZbXLWI0/sendMessage?chat_id=-820098065&text=${inComing}`
    ).then(() => {
      reset();
    });
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  const { currentLang, language } = useGlobal();
  return (
    <div>
      <header className="md:h-screen bg-[#EBEBEB] md:pt-[8vw] pt-[30vw] px-[5vw] relative md:pb-0 pb-[8vw]">
        <div className="relative z-[30] md:w-[50vw] w-[70vw] pl-[10vw]">
          <h1 className="md:text-[2vw] text-[5vw] text-[#E94B4B] my-[4vw] uppercase font-bold">
            {language["company"]}
          </h1>
          <p className="text-black mt-[5vw] md:text-[1.2vw] text-[3.2vw]">
            {language["about_p"]}
          </p>
          <div className="flex gap-[2vw] mt-[2vw]">
            <a href="https://youtu.be/ZvWbYsqNUpQ" target="_blank">
              <button className=" md:px-[3.6vw] px-[6.6vw] md:py-[.5vw] py-[1.5vw] rounded-[7vw] md:text-[1vw] text-[3.5vw] relative z-20 bg-[#EA5252] text-[#fff] hover:bg-[#db1616] transition">
                {language["video"]}
              </button>
            </a>
            <a href="#contact">
              <button className="border-black border md:px-[3.6vw] px-[6.6vw] md:py-[.5vw] py-[1.5vw] rounded-[7vw] md:text-[1vw] text-[3.5vw] relative z-20 bg-transparent hover:bg-[#000] hover:text-[#fff] transition">
                {language["5"]}
              </button>
            </a>
          </div>
          <div className="md:flex hidden items-center absolute bottom-[-8vw]">
            <img
              src="https://i.giphy.com/media/deKZM8D0orxwQ18qtB/giphy.webp"
              alt=""
              className="w-[4vw] h-[4vw] object-contain invert-[1]"
            />
            <p className="text-[1.2vw]">{language["scroll"]}</p>
          </div>
        </div>
        <img
          src={require("../assets/img/about.png")}
          className="absolute right-0 top-[5vw] h-[40vw] md:block hidden"
          alt=""
        />
      </header>
      <div className="bg-[#EA5252] p-[5vw]">
        <div className="md:flex grid grid-cols-2 gap-[5vw] justify-between md:w-[60%] w-[80%] m-auto relative z-20">
          <div className="flex flex-col hover-on one">
            <h1
              className="text-[#fff] font-bold md:text-[3.4vw] text-[6.4vw] "
              onMouseEnter={() => setActiveHover(0)}
            >
              1000
            </h1>
            <p className="md:text-[1vw] text-[3vw] text-[#fff]">
              {language?.sps["1"]}
            </p>
          </div>
          <div className="flex flex-col hover-on two">
            <h1
              className="text-[#fff] font-bold md:text-[3.4vw] text-[6.4vw] "
              onMouseEnter={() => setActiveHover(25)}
            >
              95
            </h1>
            <p className="md:text-[1vw] text-[3vw] text-[#fff]">
              {language?.sps["2"]}
            </p>
          </div>
          <div className="flex flex-col hover-on three">
            <h1
              className="text-[#fff] font-bold md:text-[3.4vw] text-[6.4vw] "
              onMouseEnter={() => setActiveHover(50)}
            >
              304
            </h1>
            <p className="md:text-[1vw] text-[3vw] text-[#fff]">
              {language?.sps["3"]}
            </p>
          </div>
          <div className="flex flex-col hover-on four">
            <h1
              className="text-[#fff] font-bold md:text-[3.4vw] text-[6.4vw] "
              onMouseEnter={() => setActiveHover(75)}
            >
              394
            </h1>
            <p className="md:text-[1vw] text-[3vw] text-[#fff]">
              {language?.sps["4"]}
            </p>
          </div>
          <div className={`md:block hidden after-bg left-${activeHover}`}></div>
        </div>
        <p className="text-[#fff] md:text-[1.2vw] text-[3.2vw] md:w-[60%] w-[80%] m-auto mt-[5vw] relative z-20">
          {language["aboutdesc"]}
        </p>
      </div>
      <div className="bg-[#E94B4B] py-[5vw]">
        <h1 className="text-[#fff] font-bold md:text-[2.4vw] text-[4.4vw] text-center">
          {language["results_treatment"]}
        </h1>
        <div className="py-[4vw] pl-[6vw]">
          <Slider {...settings}>
            {data?.map((item, i) => (
              <div className="pr-[2vw]" key={i}>
                <div className="relative min-w-[24vw] pr-[2vw] hoverer">
                  <img
                    src={item?.photo}
                    alt=""
                    className="w-full md:h-[30vw] h-[60vw] object-cover rounded-t-[2vw]"
                  />
                  <div className="absolute w-full bottom-0 p-[2vw] bg-gradient-to-b from-[#ffffff00] to-[#00000073] opacity-hover">
                    <h2 className="text-[#ffff] text-[1.4vw] font-bold">
                      {item?.[`title_${currentLang}`]}
                    </h2>
                    <p className="text-[#ffff] text-[1.4vw]">
                      {item?.[`subtitle_${currentLang}`]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bg-[#EA5252] p-[5vw]">
        <h1 className="text-[#fff] font-bold md:text-[2.4vw] text-[4.4vw] text-center">
          {language["ovideo"]}
        </h1>
        <div className="bg-phone md:p-[1vw] p-[2vw] bg-cover md:w-[45vw] md:h-[22vw] w-[85vw] h-[42vw] m-auto mt-[3vw]">
          <iframe
            src="https://www.youtube.com/embed/ZvWbYsqNUpQ"
            title="Vetline Animal Health Care Products IPEMA 2015"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-[3vw]"
          />
        </div>
        <p className="text-[#fff] md:text-[1.2vw] text-[3.2vw] mt-[2vw] md:w-[80%] w-[90%] m-auto ">
          {language["ovideotx"]}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}
        className="bg-[#E94B4B] p-[5vw] md:pl-0 flex items-center gap-[5vw]"
        id="contact"
      >
        <img
          src={require("../assets/img/contactcat.png")}
          className="h-[30vw] md:block hidden"
          alt=""
        />
        <div className="flex flex-col justify-center  bg-[#ffffff] rounded-[2vw] gap-[2vw] md:p-[2vw] p-[4vw] py-[3vw] md:w-[35vw] w-[75vw] md:m-0 m-auto">
          <h1 className="md:text-[2vw] text-[4vw] font-bold">
            {language["questions"]}
          </h1>
          <input
            type="text"
            placeholder={language["name"]}
            {...register("name")}

            className="bg-[#F9F9F9] outline-[#E94A4A] rounded-[.4vw] md:p-[1vw] p-[2vw]  md:px-[2vw] px-[4vw] md:text-[1vw] text-[2.6vw]"
          />
          <input
            type="text"
            placeholder={language["phone"]}
            className="bg-[#F9F9F9] outline-[#E94A4A] rounded-[.4vw] md:p-[1vw] p-[2vw]  md:px-[2vw] px-[4vw] md:text-[1vw] text-[2.6vw]"
            {...register("phone")}

            maxLength={12}
            onInput={(e) =>
              (e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1"))
            }
          />
          <p className="md:text-[1vw] text-[2.6vw]">{language["que"]}</p>
          <div className="flex gap-[1vw]">
            <button className="md:p-[.4vw]  p-[1.4vw] px-[1.2vw] bg-[#e94a4a] hover:bg-[#ee1f1f] md:rounded-[.4vw] rounded-[1vw] md:text-[1.3vw] text-[3.3vw] text-[#fff] w-full">
              {language["send"]}
            </button>
            <a
              href="https://www.google.com/maps/place/Amir+Temur+Square/@41.311139,69.279593,75358m/data=!3m1!1e3!4m5!3m4!1s0x0:0x81095e06b654b845!8m2!3d41.3111391!4d69.2795927?hl=en"
              className="w-full"
            >
              <button className="md:p-[.4vw]  p-[1.4vw] px-[1.2vw] bg-[#F9F9F9] md:rounded-[.4vw] rounded-[1vw] md:text-[1.3vw] text-[3.3vw] text-[#000] w-full hover:text-[#fff] hover:bg-[#000] transition" type="button">
                {language["address"]}
              </button>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default About;
