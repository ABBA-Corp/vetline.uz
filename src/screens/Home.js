import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  BargSvg,
  CloseSvg,
  HeartSvg,
  MedSvg,
  ToBottomArrow,
  ViewSvg,
  ViewWhite
} from "../components/Svgs";
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";
import { Link, useLocation } from "react-router-dom";
import HorizontalSlider from "../components/HorizontalSlider";
import { useGlobal } from "../redux/selectors";
import { getRestApi, tabNames } from "../components/utils";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 4000
  };
  const [activeAccardion, setactiveAccardion] = useState();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState([]);
  const [tab, setTab] = useState(0);
  const [faq, setFaq] = useState([]);
  const [notificationOne, setNotificationOne] = useState([]);
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    getRestApi("products/", setProducts);
    getRestApi("categories/", setCategories);
    getRestApi("faqs/", setFaq);
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);

  const onSubmit = (e) => {
    toast.success("Request has been sent");
    let inComing = `
    🗣𝙽𝚎𝚠 𝚙𝚘𝚜𝚝  %0A👤name : ${e.name}, %0A📱phone: ${e.phone}, %0A💬comment: ${e?.comment}, %0A

  `;
    fetch(
      `https://api.telegram.org/bot6252325299:AAFx-LHCiQ06MUyhCw12JjwfhYEDZbXLWI0/sendMessage?chat_id=-820098065&text=${inComing}`
    ).then(() => {
      reset();
    });
  };
  const { language, currentLang } = useGlobal();
  return (
    <>
      <div>
        <div className="md:fixed w-full left-0 top-0">
          <Slider {...settings}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
              <div key={item}>
                <div className="relative">
                  {visible && (
                    <>
                      {notification.includes(i) || (
                        <div className="absolute md:w-[20vw] w-[25vw] h-[6vw] bg-[#F9943B] md:left-[10%] left-[35%] top-[25%] rounded-[1vw] pr-[3vw] hidden md:block notifbg">
                          <div className="flex gap-[1.4vw] relative p-[.4vw] items-start">
                            <button
                              className="text-[#fff] text-[2vw] leading-[1.7vw]"
                              onClick={() => {
                                setNotification([...notification, i]);
                              }}
                            >
                              &times;
                            </button>
                            <div className="flex flex-col">
                              <h1 className="font-medium text-[#fff] text-[1.2vw] mt-[.5vw]">
                                {language.cat}
                              </h1>
                              <p className="font-medium text-[#fff] text-[.8vw]">
                                {language.top1}
                              </p>
                              <img
                                src={require("../assets/img/multicat.png")}
                                className="w-[4vw] absolute top-[-2vw] right-[-1vw]"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {notificationOne.includes(i) || (
                        <div className="absolute md:w-[20vw] w-[26vw] h-[6vw] bg-[#F9943B] md:left-[70%] left-[36%] md:top-[35%] top-[20%] z-[9] rounded-[1vw] pl-[3vw]  notifbg2">
                          <div className="flex gap-[1.4vw] relative p-[.4vw] items-start justify-between">
                            <div className="flex flex-col pl-[2vw]">
                              <h1 className="font-medium text-[#fff] text-[1.2vw] mt-[.5vw]">
                                {language.cat1}
                              </h1>
                              <img
                                src={require("../assets/img/multicat2.png")}
                                className="w-[4vw] absolute top-[-2vw] left-[-2vw]"
                                alt=""
                              />
                              <p className="font-medium text-[#fff] text-[.8vw]">
                                {language.top2}
                              </p>
                            </div>
                            <button
                              className="text-[#fff] text-[2vw] leading-[1.7vw]"
                              onClick={() => {
                                setNotificationOne([...notificationOne, i]);
                              }}
                            >
                              &times;
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <img
                    src={require("../assets/img/cat.png")}
                    className="absolute md:w-[20vw] w-[80vw] md:left-[40vw] left-[10vw] md:top-auto md:bottom-[20vw] top-[60vw]"
                    alt=""
                  />
                  <div className="bg-[#F0D7B3] bg-slide flex justify-center items-end p-[5vw] md:h-[100vh] h-[220vw]">
                    <div className="bg-[#E94A4A] p-[1vw] md:pt-[1vw] pt-[6vw] px-[4vw] md:w-[70%] w-[100%] items-center md:rounded-[2vw] rounded-[5vw] relative z-20 flex justify-between md:flex-row flex-col-reverse md:h-auto h-[80vw]">
                      <div className="flex flex-col ">
                        <h1 className="font-medium text-[#fff] md:text-[1.8vw] text-[5.2vw] md:text-left text-center md:whitespace-normal whitespace-nowrap text-ellipsis md:m-0 m-auto w-[90%] overflow-hidden">
                          {language.top["1"]}
                        </h1>
                        <ul className="md:text-[1vw] text-[4vw]  text-[#fff] list-disc md:px-0 px-[6vw]">
                          <li>{language.top["2"]}</li>
                          <li>{language.top["3"]}</li>
                          <li>{language.top["4"]}</li>
                        </ul>
                        <div className="md:flex grid grid-cols-2 items-center mt-[2vw] gap-[1vw] md:pb-0 pb-[3vw]">
                          <Link to={"/products"}>
                            <button className="md:p-[.7vw] p-[2vw] px-[1.4vw] md:text-[1vw] text-[4.2vw] md:rounded-[.6vw] rounded-[2.6vw] text-[#fff] bg-[#ffffff3d] hover:bg-[#ffffff9a] md:w-auto w-full">
                              {language.top["5"]}
                            </button>
                          </Link>
                          <Link to={"/about"}>
                            <button className="md:p-[.7vw] p-[2vw] px-[1.4vw] md:text-[1vw] text-[4.2vw] md:rounded-[.6vw] rounded-[2.6vw] text-[#fff] bg-[#ffffff3d] hover:bg-[#ffffff9a] md:w-auto w-full">
                              {language.top["6"]}
                            </button>
                          </Link>
                        </div>
                      </div>
                      <img
                        className="md:w-[12vw] w-[42vw] md:relative absolute md:top-0 top-[-30vw]"
                        src={require("../assets/img/banner.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bg-[#f0d7b3] relative z-20">
        <div className="p-[2vw] pt-[0]  md:mt-[100vh]">
          <div className="p-[2vw] bg-[#F9F2EB] rounded-t-[1vw] relative">
            <div className="md:block hidden absolute top-[-4vw] text-[1vw] left-[50%] translate-x-[-50%] translate-y-0 text-center bg-scrolbottom px-[7vw] p-[2vw] pt-[1.5vw]">
              {language.top["7"]}
            </div>
            <div className="flex md:flex-row flex-col justify-between overflow-hidden rounded-t-[1vw]">
              {categories?.map((item) => (
                <Link
                  to={"/products/" + item?.id}
                  className="md:w-[32.8%] w-full relative md:h-[40vw] bg-cover p-[4vw] flex items-end card cursor-pointer justify-center gap-[4vw]"
                  style={{
                    backgroundImage:
                      window.innerWidth > 768 && `url(${item?.photo})`
                  }}
                >
                  <img
                    src={item?.photo}
                    className="max-w-[30vw] w-full h-[25vw] object-cover rounded-[2vw]  md:hidden block"
                    alt=""
                  />
                  <div className="w-full md:bg-[#00000065] h-full absolute top-0 left-0 to-top transition-[.3s] "></div>
                  <div className="md:static flex flex-col gap-[2vw] items-start">
                    <p className="md:text-[#fff] z-[20] md:text-[2vw] text-[5vw] md:text-center md:font-normal font-semibold">
                      {item[`title_${currentLang}`]}
                    </p>
                    <button className="bg-[#E94A4A] p-[1vw] px-[5vw] text-[#fff] rounded-[2vw] md:hidden block">
                      {language.top["6"]}
                    </button>
                  </div>
                </Link>
              ))}
            </div>
            <div>
              <div className="text-center" id="tops">
                <h1 className="md:text-[3vw] text-[5vw] color-[#000] my-[4vw] font-extrabold uppercase">
                  {language.tops}
                </h1>
              </div>
              <HorizontalSlider products={products} lang={language} />
            </div>
          </div>
          <div className="relative  bg-[#F9F2EB] md:h-[130vw] h-[230vw] md:overflow-visible overflow-hidden">
            <div className="relative md:h-[80vw]">
              <div className="h-[80vw] absolute w-full z-[99]" id="blackdoor">
                <div className="w-[150%] relative left-[-25%] bg-black h-full rounded-[50%] flex items-center justify-center flex-col gap-[4vw]">
                  <div className="relative left-[-25vw]">
                    <div className="feather"></div>
                    <div className="feather2"></div>
                    <div className="feather3"></div>
                  </div>
                  <img
                    src={require("../assets/img/animal.png")}
                    className="md:w-[40vw] w-[60vw]"
                    alt=""
                  />
                  <h1 className="md:text-[2vw] text-[4vw] font-bold text-[#fff] uppercase">
                    {language.more}
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-[3vw] md:relative md:top-[-10vw] absolute bottom-[-10vw] pt-[10vw] pb-[18vw] border-t-transparent">
              <div className="bg-[#FFE7C3] p-[3vw] md:rounded-[1vw] rounded-[3vw] px-[6vw] md:mt-0 mt-[4vw]">
                <div className="flex justify-between items-center md:flex-row flex-col">
                  <div className="md:w-[60%]">
                    <h1 className="md:text-[2vw] text-[5vw] font-[900] md:text-left text-center">
                      {language.abouttitle}
                    </h1>
                    <div className="relative right-[-25vw]">
                      <div className="feather"></div>
                      <div className="feather2"></div>
                      <div className="feather3"></div>
                    </div>
                    <p className="md:text-[1.2vw] text-[3.2vw] font-medium">
                      {language.abouttext}
                    </p>
                    <div className="flex mt-[4vw] gap-[2vw]">
                      <Link to="/about" className="md:w-auto w-full">
                        <button className="border-black border px-[1.6vw] md:py-[.5vw] py-[1.5vw] md:rounded-[2vw] rounded-[5vw] md:text-[1vw] text-[4vw]  md:w-auto w-full hover:bg-[#000] hover:text-[#fff] transition">
                          {language.top["6"]}
                        </button>
                      </Link>
                      <a href="#contact" className="w-full">
                        <button className="border-black border px-[1.6vw] md:py-[.5vw] py-[1.5vw]  md:rounded-[2vw] rounded-[5vw] md:text-[1vw] text-[4vw]  md:w-auto w-full hover:bg-[#000] hover:text-[#fff] transition">
                          {language["5"]}
                        </button>
                      </a>
                    </div>
                  </div>
                  <iframe
                    className="md:w-[35%] w-full md:h-[17vw] h-[41vw] md:mt-0 mt-[4vw]  rounded-[2vw] relative z-30"
                    src="https://www.youtube.com/embed/ZvWbYsqNUpQ"
                    title="Vetline Animal Health Care Products IPEMA 2015"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <img
              src={require("../assets/img/hen.png")}
              alt=""
              className="absolute bottom-[2vw] right-0 w-[44vw] md:block hidden"
            />
          </div>
          <div className="flex flex-col my-[4vw] items-start" id="after">
            <div className="flex justify-between w-full pr-[2vw] items-end">
              <h1 className="text-[3vw] relative pb-[1vw] bottom-[-1vw] z-[40] font-bold text-[#E94A4A] bg-[#F8F3EC] pt-[1vw] px-[2vw] rounded-t-[1vw] md:block hidden uppercase captie">
                {language["feedback"]["1"]}
              </h1>
              <div className="flex gap-[3vw] relative md:w-auto w-full ">
                {tabNames?.map((item, i) => (
                  <button
                    className="uppercase md:py-[.4vw] md:pb-[1.5vw] py-[1.8vw] md:rounded-t-[1vw] rounded-t-[3vw] px-[3vw] pb-[1.4vw] relative bottom-[-1vw] tabbg font-semibold md:w-auto w-full"
                    onClick={() => setTab(i)}
                    style={{
                      zIndex: tab === i ? 40 : 0
                    }}
                  >
                    {item?.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full relative z-[30] shadow-[0px_0px_10px_rgba(0,0,0,0.7)] bg-[#F8F3EC] p-[2vw] rounded-[1vw] rounded-tl-[0vw]">
              <div className="relative md:h-[50vw] md:min-h-[50vw] min-h-[70vw] overflow-hidden">
                {tabNames?.map(
                  (item, i) =>
                    tab === i && (
                      <ReactCompareSlider
                        itemOne={
                          <ReactCompareSliderImage
                            src={item?.before}
                            className="w-full h-[50vw] object-cover rounded-[1vw] overflow-hidden"
                            alt=""
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={item?.after}
                            className="w-full h-[50vw] object-cover rounded-[1vw] overflow-hidden"
                            alt=""
                          />
                        }
                      />
                    )
                )}
                <div className="md:absolute md:text-[#fff] text-[#000] md:font-medium font-bold md:text-[1.6vw] text-[3.6vw] rounded-[1vw] md:bg-[#E94A4A] p-[2vw] px-[3vw] z-40 md:w-[80%] flex justify-center left-[10%] bottom-[3vw]">
                  <div className="flex gap-[1vw] items-center md:w-[35%] w-[45%]">
                    <h1>{language["feedback"]["2"]}</h1>
                    <button className="p-[.4vw] rounded-[5vw] border border-white md:block hidden">
                      <ViewWhite />
                    </button>
                  </div>
                  <button className="mx-[4vw] md:border-white border-black border"></button>
                  <div className="flex gap-[1vw] items-center  md:w-[35%] w-[45%]">
                    <h1>{language["feedback"]["3"]}</h1>
                    <button className="p-[.4vw] rounded-[5vw] border border-white md:block hidden">
                      <ViewWhite />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white w-full mt-[2vw] rounded-[1vw] p-[2vw] px-[4vw]">
                <h1 className="font-bold text-[2vw] uppercase mb-[2vw] md:block hidden">
                  {language["special"]}
                </h1>
                <div className="flex items-center gap-[4vw] justify-between ">
                  <div className="grid gap-[3vw] md:grid-cols-2 gap-x-[6vw] md:w-auto w-full">
                    <div className="flex items-center gap-[2vw]">
                      <h1 className="font-bold md:text-[1.6vw] text-[3.6vw]">
                        {language["feedback"]["4"]}
                      </h1>
                      <button className="bg-[#E94A4A] w-[45%] p-[.4vw] rounded-[.6vw] text-[#fff] font-bold md:text-[2vw] text-[4vw]">
                        80 kg
                      </button>
                    </div>
                    <div className="flex items-center gap-[2vw]">
                      <h1 className="font-bold md:text-[1.6vw] text-[3.6vw]">
                        {language["feedback"]["5"]}
                      </h1>
                      <button className="bg-[#E94A4A] w-[45%] p-[.4vw] rounded-[.6vw] text-[#fff] font-bold md:text-[2vw] text-[4vw]">
                        120 kg
                      </button>
                    </div>
                    <div className="flex items-center gap-[2vw]">
                      <h1 className="font-bold md:text-[1.6vw] text-[3.6vw]">
                        {language["feedback"]["6"]}
                      </h1>
                      <button className="bg-[#E94A4A] whitespace-nowrap w-[45%] p-[.4vw] rounded-[.6vw] text-[#fff] font-bold md:text-[2vw] text-[4vw]">
                        90 {language["day"]}
                      </button>
                    </div>
                    <div className="flex items-center gap-[2vw]">
                      <h1 className="font-bold md:text-[1.6vw] text-[3.6vw]">
                        {language["feedback"]["7"]}
                      </h1>
                      <button className="bg-[#E94A4A] whitespace-nowrap w-[45%] p-[.4vw] rounded-[.6vw] text-[#fff] font-bold md:text-[2vw] text-[4vw]">
                        40 {language["day"]}
                      </button>
                    </div>
                  </div>
                  <img
                    className="md:w-[17vw] w-[30vw]"
                    src={require("../assets/img/banner.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F2EB] rounded-[1vw] mt-[2vw] p-[2vw]">
            <div className="md:p-[4vw] p-[6vw] md:gap-0 gap-[4vw] justify-between bg-[#FFE7C3] md:rounded-[1vw] rounded-[3vw] md:flex grid">
              <div className="flex md:flex-col hover:opacity-[.7] cursor-pointer transition items-center md:w-[20%] text-center md:gap-[2vw] gap-[4vw]">
                <BargSvg />
                <h1 className="text-[#E94A4A] md:text-[1.7vw] text-[3.7vw] font-bold">
                  {language?.features?.["1"]}
                </h1>
              </div>
              <div className="flex md:flex-col hover:opacity-[.7] cursor-pointer transition items-center md:w-[20%] text-center md:gap-[2vw] gap-[4vw]">
                <MedSvg />
                <h1 className="text-[#E94A4A] md:text-[1.7vw] text-[3.7vw] font-bold">
                  {language?.features?.["2"]}
                </h1>
              </div>
              <div className="flex md:flex-col hover:opacity-[.7] cursor-pointer transition items-center md:w-[20%] text-center md:gap-[2vw] gap-[4vw]">
                <HeartSvg />
                <h1 className="text-[#E94A4A] md:text-[1.7vw] text-[3.7vw] font-bold">
                  {language?.features?.["3"]}
                </h1>
              </div>
            </div>
            <div className="flex p-[3vw] justify-center gap-[4vw] md:py-[3vw] py-[6vw]">
              <Link to={"/products"} className={"md:w-auto w-full"}>
                <button className="md:border-black md:bg-transparent bg-[#E94A4A] border px-[1.6vw] md:py-[.5vw] py-[1.5vw] md:w-auto w-full rounded-[2vw] md:text-[1vw] text-[3.2vw] md:text-[#000] text-[#fff] hover:bg-[#000] hover:text-[#fff] transition">
                  {language["1"]}
                </button>
              </Link>
              <div className="relative md:w-auto w-full">
                <a href="#contact">
                  <button className="md:border-black border px-[1.6vw] md:py-[.5vw] py-[1.5vw] md:w-auto w-full rounded-[2vw] md:text-[1vw] text-[3.2vw] relative z-20 md:bg-[#F8F3EC] bg-[#fff] md:text-[#000] text-[#E94A4A] hover:bg-[#000] hover:text-[#fff] transition">
                    {language["5"]}
                  </button>
                </a>
                <img
                  src={require("../assets/img/dog.png")}
                  className="absolute  bottom-0 md:w-[9vw] w-[29vw]"
                  alt=""
                />
              </div>
            </div>
            <div className=" bg-[#FFE7C3] md:rounded-[1vw] rounded-[3vw] md:p-[4vw] p-[2vw]">
              <div
                className="md:p-[4vw] p-[4vw] justify-between flex flex-col md:gap-[2vw] bg-white md:rounded-0 rounded-[2vw]"
                id="faq"
              >
                {faq?.map((item, i) => (
                  <div
                    key={i}
                    className=" md:rounded-[1vw] md:border-b-0 border-b border-b-[#00000080] md:bg-[#fffcf87e] bg-[#fff] overflow-hidden"
                  >
                    <div
                      onClick={() => {
                        if (activeAccardion === i) {
                          setactiveAccardion();
                        } else {
                          setactiveAccardion(i);
                        }
                      }}
                      className={`flex md:p-[1vw] p-[2vw] px-[3vw] justify-between items-center ${
                        activeAccardion === i
                          ? "bg-[#fff]"
                          : "md:bg-[#fffcf87e]"
                      }  rounded-[1vw] cursor-pointer`}
                    >
                      <h1 className="md:text-[1.4vw] text-[3.4vw] font-bold whitespace-nowrap overflow-hidden text-ellipsis  w-[90%]">
                        {item[`faq_${currentLang}`]}
                      </h1>

                      {activeAccardion === i ? <CloseSvg /> : <ToBottomArrow />}
                    </div>
                    {activeAccardion === i && (
                      <p className="md:text-[1.2vw] text-[3.2vw] p-[2vw] px-[4vw]">
                        {item[`answer_${currentLang}`]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:p-[3vw] md:px-[6vw] bg-[#F8F3EC] mt-[3vw] rounded-[1vw]"
            id="contact"
          >
            <div className="grid md:grid-cols-2 gap-[4vw]">
              <div className="md:grid hidden gap-[2vw]">
                <h1 className="text-[2vw] font-bold">
                  {language["questions"]}
                </h1>
                <p className="text-[1.3vw]">{language["questions2"]}</p>
                <img
                  src={require("../assets/img/question.png")}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center  bg-[#FDEAD0] rounded-[2vw] gap-[2vw] md:p-[2vw] p-[4vw] py-[4vw]">
                <h1 className="md:text-[2vw] text-[5vw] font-bold">
                  {language["questions"]}
                </h1>
                <input
                  required
                  type="text"
                  {...register("name")}
                  placeholder={language["name"]}
                  className="bg-[#fff] outline-[#E94A4A] md:rounded-[.4vw] rounded-[1.4vw] md:p-[1vw] p-[2vw] md:px-[2vw] px-[3vw] md:text-[1vw] text-[3vw]"
                />
                <input
                  required
                  type="number"
                  {...register("phone")}
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/(\..*?)\..*/g, "$1"))
                  }
                  placeholder={language["phone"]}
                  maxLength={12}
                  className="bg-[#fff] outline-[#E94A4A] md:rounded-[.4vw] rounded-[1.4vw] md:p-[1vw] p-[2vw] md:px-[2vw] px-[3vw] md:text-[1vw] text-[3vw]"
                />
                <textarea
                  required
                  cols="30"
                  rows="10"
                  {...register("comment")}
                  placeholder={language["comment"]}
                  className="bg-[#fff] outline-[#E94A4A] md:rounded-[.4vw] rounded-[1.4vw] md:p-[1vw] p-[2vw] md:px-[2vw] px-[3vw] md:text-[1vw] text-[3vw]"
                ></textarea>
                <div className="flex gap-[1vw]">
                  <button className="md:p-[.4vw]  p-[1.4vw] md:px-[2.2vw] px-[2.2vw] bg-[#e94a4a] hover:bg-[#d11c1c] md:rounded-[.4vw] rounded-[1.8vw] md:text-[1.3vw] text-[3.6vw] text-[#fff] w-full transition">
                    {language["send"]}
                  </button>
                  <button className="md:p-[.4vw]  p-[1.4vw] md:px-[2.2vw] px-[2.2vw] bg-[#ffffff] md:rounded-[.4vw] rounded-[1.8vw] md:text-[1.3vw] text-[3.6vw] text-[#000] w-full hover:bg-[#e94a4a] hover:text-[#fff] transition">
                    {language["address"]}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
