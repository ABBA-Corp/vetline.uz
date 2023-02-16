import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import HorizontalSlider from "../components/HorizontalSlider";
import { ViewSvg } from "../components/Svgs";
import { getRestApi } from "../components/utils";
import { useGlobal } from "../redux/selectors";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [purchase, setPurchase] = useState(false);
  const pathname = useLocation();
  useEffect(() => {
    getRestApi("products/" + id, setProduct);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    getRestApi("products/" + id, setProduct);
  }, [pathname]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (e) => {
    toast.success("Request has been sent");
    let inComing = `
      🗣𝙽𝚎𝚠 𝚙𝚘𝚜𝚝 𝚘𝚛𝚍𝚎𝚛 %0A👤name : ${e.name}, %0A📱phone: ${e.phone}, %0A📦product: ${product?.name_uz}, %0A
    `;
    fetch(
      `https://api.telegram.org/bot6252325299:AAFx-LHCiQ06MUyhCw12JjwfhYEDZbXLWI0/sendMessage?chat_id=-820098065&text=${inComing}`
    ).then(() => {
      reset();
      setPurchase(false);
    });
  };

  const { language, currentLang } = useGlobal();
  return (
    <div className=" pt-[5vw] bg-[#E94B4B]">
      {purchase && (
        <div className="fixed left-0 top-0 w-full h-screen bg-[#08080841] z-[999] flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-[2vw] rounded-[1vw] w-[40vw] relative modal-income"
          >
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
                {...register("name")}
              />

              <p className="text-[1.4vw] pl-[1vw]">{language["phone"]}</p>
              <input
                type="number"
                placeholder={language["phone"]}
                className="font-[200] text-[1vw] outline-none w-full mb-[1vw] border-b p-[1vw] focus:border-b-[#0097d3]"
                required
                {...register("phone")}
              />

              <p className="text-[1.4vw] pl-[1vw]">{language["typeproduct"]}</p>
              <input
                defaultValue={product[`name_${currentLang}`]}
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
                  type="submit"
                >
                  {language["writetelegram"]}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <div className="feather"></div>
      <div className="feather2"></div>
      <div className="feather3"></div>
      <div className="grid linear-bg  grid-cols-2 gap-[6vw] px-[17vw] py-[6vw]">
        <div>
          <img src={product?.thumbnail} className="w-[70%]" alt="" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-[2vw] text-[#fff] font-semibold mb-[1vw]">
              {product?.[`name_${currentLang}`]}
            </h1>
            <p className="text-[1.2vw] text-[#fff] leading-[2.2vw] mb-[10vw]">
              {product?.[`subtitle_${currentLang}`]}
            </p>
          </div>
          <div className="flex gap-[1vw]">
            <button
              className="p-[.4vw] px-[1.5vw] min-w-[11vw] bg-[#ffffff] rounded-[6vw] text-[1.3vw] text-[#000] hover:bg-[#000] hover:text-[#fff] transition"
              onClick={() => setPurchase(true)}
            >
              Sotib olish
            </button>
            <a href="tel:+998995595353">
              <button className="p-[.4vw] px-[1.5vw] min-w-[11vw] bg-[#E94B4B] hover:bg-[#e60d0d] rounded-[6vw] text-[1.3vw] text-[#fff]  transition">
                Aloqa
              </button>
            </a>
          </div>
          <div className="flex items-center mt-[5vw]">
            <img
              src="https://i.giphy.com/media/deKZM8D0orxwQ18qtB/giphy.webp"
              alt=""
              className="w-[4vw] h-[4vw] object-contain invert-[1]"
            />
            <p className="text-[1.2vw]">Ko'proq ma'lumot uchun scroll qiling</p>
          </div>
        </div>
      </div>
      <div className="p-[7vw]">
        <div className="py-[4vw]">
          {/* <h1 className="text-[2vw] text-[#fff] font-bold">
            Davolanish natijalari
          </h1> */}
          <p className="text-[1.2vw] text-[#fff] ">
            {product?.[`description_${currentLang}`]}
          </p>
        </div>
        <div className="py-[4vw]">
          <h1 className="text-[2vw] text-[#fff] font-bold mb-[2vw]">
            Davolanish natijalari
          </h1>
          <div className="grid grid-cols-2 gap-[3vw]">
            {product?.results_set?.map((item, i) => (
              <div className="relative hoverer" key={i}>
                <img
                  src={item?.photo}
                  alt=""
                  className="w-full h-[30vw] object-cover rounded-t-[2vw]"
                />
                <div className="absolute w-full opacity-hover bottom-0 p-[2vw] bg-gradient-to-b from-[#ffffff00] to-black">
                  <h2 className="text-[#ffff] text-[1.4vw] font-bold">
                    {item?.[`title_${currentLang}`]}
                  </h2>
                  <p className="text-[#ffff] text-[1.4vw]">
                    {item?.[`subtitle_${currentLang}`]}
                  </p>
                </div>
              </div>
            ))}
            {/* <div className="relative hoverer">
              <img
                src="https://cdn.pixabay.com/photo/2019/05/16/19/38/cock-4207970_1280.jpg"
                alt=""
                className="w-full h-[30vw] object-cover rounded-t-[2vw]"
              />
              <div className="absolute w-full opacity-hover bottom-0 p-[2vw] bg-gradient-to-b from-[#ffffff00] to-[#00000073]">
                <h2 className="text-[#ffff] text-[1.4vw] font-bold">
                  3 oy “Vetline” yegan
                </h2>
                <p className="text-[#ffff] text-[1.4vw]">
                  Самый лучший корм для ваших кошек
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="py-[4vw]">
          <HorizontalSlider lang={language} />
        </div>
      </div>
    </div>
  );
}

export default Product;
