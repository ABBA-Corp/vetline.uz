import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ViewSvg } from "../components/Svgs";
import { getRestApi } from "../components/utils";
import { useGlobal } from "../redux/selectors";

function Products() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [activeCategory, setActiveCategory] = useState();
  const { id } = useParams();
  // alert(id);
  useEffect(() => {
    document.body.style.overflowY = "scroll";
    getRestApi("products/", setProducts);
    getRestApi("categories/", setCategorys);
  }, []);
  useEffect(() => {
    console.log(categorys?.[0]?.id);
    if (id) {
      categorys?.map((item) => {
        if (item?.id === Number(id)) {
          setActiveCategory(item?.id);
        }
      });
    } else {
      setActiveCategory(categorys?.[0]?.id);
    }
  }, [categorys]);

  const { language, currentLang } = useGlobal();
  function Card({ data }) {
    const [visible, setVisible] = useState(false);
    const [purchase, setPurchase] = useState(false);

    return (
      <>
        {visible && (
          <div className="fixed left-0 top-0 w-full h-screen bg-[#08080841] z-[999] flex justify-center items-center">
            <div className="bg-white p-[2vw] rounded-[1vw] w-[60vw] relative modal-income">
              <button
                className="absolute text-[2vw] right-[2vw] top-[1vw] w-[2vw] h-[2vw] bg-[#E94B4B] text-[#fff] rounded-[3vw] flex items-center justify-center"
                onClick={() => setVisible(false)}
              >
                &times;
              </button>
              <div className="flex">
                <img
                  src={data?.thumbnail}
                  alt="img"
                  className="w-[25vw] h-[25vw] object-contain bg-[#F3F3F3] p-[2vw] rounded-[1vw]"
                />
                <div className="flex flex-col items-start p-[4vw]">
                  <h1 className="text-[2vw]"> {data[`name_${currentLang}`]}</h1>
                  <p className="text-[1vw] font-[500]">
                    {data[`subtitle_${currentLang}`]}
                  </p>
                  <p className="text-[1vw] font-[500] my-[2vw] mb-[4vw]">
                    {data[`description_${currentLang}`]}
                  </p>
                  <button
                    className="p-[.4vw] px-[3.2vw] bg-[#E94B4B] hover:bg-[#c51515] transition rounded-[6vw] text-[1.3vw] text-[#fff] font-extralight"
                    onClick={() => setPurchase(true)}
                  >
                    {language["send"]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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

                <p className="text-[1.4vw] pl-[1vw]">
                  {language["typeproduct"]}
                </p>
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
        <div className="h-[30vw] w-[20vw] min-w-[20vw] bg-[#F6DABA] hover:bg-[#FF6557] cursor-pointer transition-[1.1s] rounded-[1vw]  md:flex hidden flex-col items-center  overflow-hidden">
          <img
            src={data?.thumbnail}
            alt="img"
            className="w-[15vw] h-[15vw] object-contain relative bottom-[-2vw]"
          />
          <div className="h-[15vw] bg-[#ffffff63] w-full flex flex-col gap-[.4vw] items-center p-[2vw] md:pt-[4vw] justify-between">
            <h1 className="font-bold text-[1.5vw] text-center whitespace-nowrap">
              {data[`name_${currentLang}`]}
            </h1>
            <p className="text-[1vw] text-center whitespace-nowrap">
              {data[`subtitle_${currentLang}`]}
            </p>
            <div className="flex gap-[1vw]">
              {/* <Link to="/product"> */}
              <button
                className="border-black border transition-[1.1s] hover:bg-black hover:text-[#fff] px-[1.6vw] py-[.5vw] rounded-[2vw] text-[1vw]"
                onClick={() => setPurchase(true)}
              >
                {language["top"]["5"]}
              </button>
              {/* </Link> */}

              <button onClick={() => setVisible(true)}>
                <ViewSvg />
              </button>
            </div>
          </div>
        </div>
        <div className="h-[65vw] w-full min-w-[20vw] bg-[#F6DABA] rounded-[1vw] md:hidden  flex flex-col items-center  overflow-hidden justify-between">
          <img
            src={data?.thumbnail}
            alt="img"
            className="md:w-[15vw] md:h-[15vw] w-[30vw] h-[30vw] object-contain relative md:bottom-[-2vw] bottom-[-7vw]"
          />
          <div className="h-[30vw] bg-[#FFEED6] w-full flex flex-col gap-[.4vw] items-center justify-center  p-[4vw]  pt-[5vw]">
            <h1 className="font-bold md:text-[1.5vw] text-[3.5vw] text-center whitespace-nowrap">
              {data[`name_${currentLang}`]}
            </h1>
            <p className="md:text-[1vw] text-[3vw] text-center whitespace-nowrap overflow-hidden text-ellipsis w-[100%]">
              {data[`subtitle_${currentLang}`]}
            </p>
            <div className="flex md:gap-[1vw] gap-[2vw] md:mt-0 mt-[2vw] items-center ">
              <button className="border-black border md:bg-transparent bg-[#000] md:text-[#000] text-[#fff] hover:bg-black hover:text-[#fff] md:px-[1.6vw] md:py-[.5vw] px-[4.6vw] py-[1.5vw] md:rounded-[2vw] rounded-[6vw] md:text-[1vw] text-[3vw] whitespace-nowrap">
                {language.top["5"]}
              </button>

              <button>
                <ViewSvg />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="p-[7vw] md:pt-[10vw] pt-[20vw] bg-[#E94B4B] font-semibold">
      <h1 className="text-[2.3vw] text-[#fff] text-center">{language["1"]}</h1>
      <div className="flex md:flex-nowrap flex-wrap justify-between  font-normal md:text-[1.2vw] text-[3.2vw] md:text-[#fff] text-[#000] my-[2vw] md:gap-0 gap-[1vw]">
        {/* <button className="md:w-full  md:border-0 md:border-b-[.3vw] transition md:border-b-[#fff] md:p-[1vw] md:opacity-100 hover:opacity-100 md:bg-transparent bg-[#ffeed6] md:rounded-[0px] rounded-[4vw] md:px-[1vw] px-[2.4vw] p-[1vw] hover:bg-[#E94B4B] hover:text-[#fff]  border border-[#ffeed6] ">
          Tovuqlar uchun
        </button> */}
        {categorys?.map((item) => (
          <button
            key={item?.id}
            className="md:w-full md:border-0 md:border-b-[.3vw] transition md:border-b-[#fff] md:p-[1vw]  md:bg-transparent bg-[#ffeed6] md:rounded-[0px] rounded-[4vw] md:px-[1vw] px-[2.4vw] p-[1vw] hover:bg-[#E94B4B] hover:text-[#fff] border border-[#ffeed6]"
            style={{
              opacity: item?.id === Number(activeCategory) ? 1 : 0.4
            }}
            onClick={() => setActiveCategory(item?.id)}
          >
            {item[`title_${currentLang}`]}
          </button>
        ))}
        {/* <button className="md:w-full md:border-0 md:border-b-[.3vw] transition md:border-b-[#fff] md:p-[1vw] md:opacity-50 hover:opacity-100 md:bg-transparent bg-[#ffeed6] md:rounded-[0px] rounded-[4vw] md:px-[1vw] px-[2.4vw] p-[1vw] hover:bg-[#E94B4B] hover:text-[#fff] border border-[#ffeed6]  ">
          Otla uchun
        </button>
        <button className="md:w-full md:border-0 md:border-b-[.3vw] transition md:border-b-[#fff] md:p-[1vw] md:opacity-50 hover:opacity-100 md:bg-transparent bg-[#ffeed6] md:rounded-[0px] rounded-[4vw] md:px-[1vw] px-[2.4vw] p-[1vw] hover:bg-[#E94B4B] hover:text-[#fff] border border-[#ffeed6]  ">
          Quyonlar uchun
        </button> */}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[1vw] gap-[3vw]">
        {products?.map(
          (item) =>
            item.category === activeCategory && (
              <Card key={item?.id} data={item} />
            )
        )}
      </div>
    </div>
  );
}

export default Products;
