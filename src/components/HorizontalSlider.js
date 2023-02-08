import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useGlobal } from "../redux/selectors";
import { ViewSvg } from "./Svgs";
import { getRestApi } from "./utils";
export default function HorizontalSlider({ lang }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false
  };
  const [products, setProducts] = useState([]);
  const [purchase, setPurchase] = useState(false);
  useEffect(() => {
    getRestApi("products/", setProducts);
  }, []);
  const { currentLang, language } = useGlobal();
  return (
    <>
      {purchase && (
        <div className="fixed left-0 top-0 w-full h-screen bg-[#08080841] z-[999] flex justify-center items-center">
          <form className="bg-white p-[2vw] rounded-[1vw] w-[40vw] relative modal-income">
            <button
              className="absolute text-[2vw] right-[2vw] top-[1vw] w-[2vw] h-[2vw] bg-[#E94B4B] text-[#fff] rounded-[3vw] flex items-center justify-center"
              onClick={() => setPurchase(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-start">
              <h1 className="text-[2vw] uppercase mb-[2vw]">
                {language["form"]}
              </h1>
              <p className="text-[1.4vw] pl-[1vw]">{language["name"]}</p>
              <input
                type="text"
                placeholder={language["name"]}
                className="font-[200] text-[1vw] outline-none w-full mb-[1vw] border-b p-[1vw] focus:border-b-[#0097d3]"
                required
              />

              <p className="text-[1.4vw] pl-[1vw]">{language["phone"]}</p>
              <input
                type="number"
                placeholder={language["phone"]}
                className="font-[200] text-[1vw] outline-none w-full mb-[1vw] border-b p-[1vw] focus:border-b-[#0097d3]"
                required
              />

              <p className="text-[1.4vw] pl-[1vw]">{language["typeproduct"]}</p>
              <input
                defaultValue={"Tovuqlar uchun korm"}
                className="font-[500] text-[1vw] outline-none w-full mb-[1vw] border-b p-[1vw] focus:border-b-[#0097d3]"
                required
                disabled
              />
              <div className="flex gap-[1vw]">
                <button
                  type="submit"
                  className="p-[.4vw] px-[1.2vw] bg-[#E94B4B] hover:bg-[#c51515] transition rounded-[6vw] text-[1vw] text-[#fff] font-extralight"
                >
                  {language["send"]}
                </button>
                <button
                  className="p-[.4vw]  px-[1.2vw] bg-[#ffffff] rounded-[6vw] text-[1vw] text-[#000] border border-[black]"
                  type="button"
                >
                  {language["writetelegram"]}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <div className="md:block hidden">
        <Slider {...settings}>
          {products?.map((item, i) => (
            <div key={i} className="px-[1vw]">
              <div className="h-[30vw] w-[20vw] min-w-[20vw] bg-[#F6DABA] hover:bg-[#FF6557] cursor-pointer transition-[1.1s] rounded-[1vw]  flex flex-col items-center  overflow-hidden">
                <img
                  src={item?.thumbnail}
                  alt="img"
                  className="w-[15vw] h-[15vw] object-contain relative bottom-[-2vw]"
                />
                <div className="h-[15vw] bg-[#ffffff63] w-full flex flex-col gap-[.4vw] items-center justify-center p-[2vw]">
                  <h1 className="font-semibold text-[1.5vw] text-center whitespace-nowrap">
                    {item[`name_${currentLang}`]}
                  </h1>
                  <p className="text-[1vw] text-center whitespace-nowrap">
                    {item[`subtitle_${currentLang}`]}
                  </p>
                  <div className="flex gap-[1vw]">
                    <button
                      className="border-black border transition-[1.1s] hover:bg-black hover:text-[#fff] px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw]"
                      onClick={() => setPurchase(true)}
                    >
                      {lang.top["5"]}
                    </button>

                    <Link to={"/product/" + item?.id}>
                      <ViewSvg />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex md:gap-[1vw] gap-[3vw] md:hidden flex-wrap justify-between">
        {products?.map((item) => (
          <div
            key={item}
            className="h-[65vw] w-[48%] min-w-[20vw] bg-[#F6DABA] rounded-[1vw]  flex flex-col items-center  overflow-hidden justify-between"
          >
            <img
              src={item?.thumbnail}
              alt="img"
              className="md:w-[15vw] md:h-[15vw] w-[30vw] h-[30vw] object-contain relative md:bottom-[-2vw] bottom-[-7vw]"
            />
            <div className="md:h-[15vw] h-[30vw] bg-[#FFEED6] w-full flex flex-col gap-[.4vw] items-center justify-center md:p-[2vw] p-[4vw] md:pt-[2vw] pt-[8vw]">
              <h1 className="font-bold md:text-[1.5vw] text-[3.5vw] text-center whitespace-nowrap">
                {item[`name_${currentLang}`]}
              </h1>
              <p className="md:text-[1vw] text-[3vw] text-center whitespace-nowrap">
                {item[`subtitle_${currentLang}`]}
              </p>
              <div className="flex md:gap-[1vw] gap-[2vw] md:mt-0 mt-[2vw] items-center ">
                <button
                  className="border-black border md:bg-transparent bg-[#000] md:text-[#000] text-[#fff] hover:bg-black hover:text-[#fff] md:px-[1.6vw] md:py-[.5vw] px-[4.6vw] py-[1.5vw] md:rounded-[2vw] rounded-[6vw] md:text-[1vw] text-[3vw] whitespace-nowrap"
                  onClick={() => setPurchase(true)}
                >
                  {language.top["5"]}
                </button>
                <Link to={"/product/" + item?.id}>
                  <button>
                    <ViewSvg />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
