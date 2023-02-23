import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getRestApi } from "../components/utils";
import { useGlobal } from "../redux/selectors";
function About() {
  const [activeHover, setActiveHover] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    getRestApi("results", setData);
  }, []);
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
            Vetline Korxonasi
          </h1>
          <p className="text-black mt-[5vw] md:text-[1.2vw] text-[3.2vw]">
            "Vet Line" korxona - bu uy hayvonlari va qoramollar salomatligi
            uchun turli xil mahsulotlar qo'shimchalar, vitaminlar, vaktsinalar
            va dori-darmonlarn ishlab chiqaruvchi korxona. "Vet Line" korxonasi
            mahsulotlari veterinar tavsiyasiga yoki ko'rsatmalariga muvofiq
            ishlatilishi kerak. Uy hayvonlari egalari mahsulotlarni ishlatishdan
            oldin veterinar bilan gaplashishlari va ularni hayvonlarning o'ziga
            xos ehtiyojlariga qarab qanday ishlatishni so'rashlari kerak
          </p>
          <div className="flex gap-[2vw] mt-[2vw]">
            <a href="https://youtu.be/ZvWbYsqNUpQ" target="_blank">
              <button className=" md:px-[3.6vw] px-[6.6vw] md:py-[.5vw] py-[1.5vw] rounded-[7vw] md:text-[1vw] text-[3.5vw] relative z-20 bg-[#EA5252] text-[#fff] hover:bg-[#db1616] transition">
                Video
              </button>
            </a>
            <a href="#contact">
              <button className="border-black border md:px-[3.6vw] px-[6.6vw] md:py-[.5vw] py-[1.5vw] rounded-[7vw] md:text-[1vw] text-[3.5vw] relative z-20 bg-transparent hover:bg-[#000] hover:text-[#fff] transition">
                Aloqa
              </button>
            </a>
          </div>
          <div className="md:flex hidden items-center mt-[8vw]">
            <img
              src="https://i.giphy.com/media/deKZM8D0orxwQ18qtB/giphy.webp"
              alt=""
              className="w-[4vw] h-[4vw] object-contain invert-[1]"
            />
            <p className="text-[1.2vw]">Ko'proq ma'lumot uchun scroll qiling</p>
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
              Davolangan tovuqlar soni
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
              Davolangan itlar soni
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
              Davolangan mushuklar soni
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
              Davolangan sigirlar soni
            </p>
          </div>
          <div className={`md:block hidden after-bg left-${activeHover}`}></div>
        </div>
        <p className="text-[#fff] md:text-[1.2vw] text-[3.2vw] md:w-[60%] w-[80%] m-auto mt-[5vw] relative z-20">
          Vet Line Animal Health - bu dunyoda ko'plab mamlakatlarda faoliyat
          yuritadigan, hayvonlar uchun tibbiy vositalarni ishlab chiqaruvchi va
          savdo qiluvchi kompaniya. Bu kompaniya hayvonlarni davolash, tibbiy
          xizmat ko'rsatish, o'simlik mahsulotlari va xilma-xil vositalarni
          ta'minlashga yo'naltirilgan. Vet Line Animal Health turli hayvon
          turlari uchun o'z mahsulotlarini ishlab chiqaradi, shular ichida keng
          qamrovli va kichik hayvonlar, kasalliklarga chora berish, ularni
          davolash va muntazam xususiyatli hayvonlarni muhofaza qilishda
          ishlatiladigan dori preparatlari mavjud.
        </p>
      </div>
      <div className="bg-[#E94B4B] py-[5vw]">
        <h1 className="text-[#fff] font-bold md:text-[2.4vw] text-[4.4vw] text-center">
          Davolanish natijalari
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
          Korxonamiz haqida video
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
          Bizning Vet Line Animal Health hayvonlar uchun ishlab chiqarilgan
          barcha mahsulotlarni test qiladi va yuqori sifat natijalarni
          ta'minlash uchun harakat qiladi. Kompaniya ayni vaqtda xaridorga
          ishonchli xizmat ko'rsatishni ta'minlash maqsadida ishlab chiqarilgan
          barcha mahsulotlarga daromadli narxlar bilan ta'minlashga harakat
          qiladi.
        </p>
      </div>
      <div
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
            Savol va takliflar uchun
          </h1>
          <input
            type="text"
            placeholder="Ismingiz"
            className="bg-[#F9F9F9] outline-[#E94A4A] rounded-[.4vw] md:p-[1vw] p-[2vw]  md:px-[2vw] px-[4vw] md:text-[1vw] text-[2.6vw]"
          />
          <input
            type="number"
            placeholder="Telefon raqamingiz"
            className="bg-[#F9F9F9] outline-[#E94A4A] rounded-[.4vw] md:p-[1vw] p-[2vw]  md:px-[2vw] px-[4vw] md:text-[1vw] text-[2.6vw]"
            onInput={(e) =>
              (e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1"))
            }
          />
          <p className="md:text-[1vw] text-[2.6vw]">
            shu yerda o’z savolingiz yoki taklifingiz. bo’lmasam otziv
            qoldirishingiz yoki hamkorlik masalasida{" "}
          </p>
          <div className="flex gap-[1vw]">
            <button className="md:p-[.4vw]  p-[1.4vw] px-[1.2vw] bg-[#e94a4a] hover:bg-[#ee1f1f] md:rounded-[.4vw] rounded-[1vw] md:text-[1.3vw] text-[3.3vw] text-[#fff] w-full">
              {language["send"]}
            </button>
            <a
              href="https://www.google.com/maps/place/Amir+Temur+Square/@41.311139,69.279593,75358m/data=!3m1!1e3!4m5!3m4!1s0x0:0x81095e06b654b845!8m2!3d41.3111391!4d69.2795927?hl=en"
              className="w-full"
            >
              <button className="md:p-[.4vw]  p-[1.4vw] px-[1.2vw] bg-[#F9F9F9] md:rounded-[.4vw] rounded-[1vw] md:text-[1.3vw] text-[3.3vw] text-[#000] w-full hover:text-[#fff] hover:bg-[#000] transition">
                {language["address"]}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
