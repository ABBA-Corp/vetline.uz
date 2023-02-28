import React, { useEffect } from "react";
import { useGlobal } from "../redux/selectors";

function Terms() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
 const {language} = useGlobal()
  return (
    <div className="p-[7vw] md:pt-[10vw] pt-[30vw] bg-[#E94B4B] font-semibold">
      <div>
        <h1 className="md:text-[2vw] text-[5vw] text-[#fff] font-bold">
          {language['4']}
        </h1>
        <br />
        <p className="md:text-[1.2vw] text-[3.2vw] text-[#fff] font-normal">
          {language['terms']['1']}
          <br />
          <br />
          {language['terms']['2']}

          <br />
          <br />
          {language['terms']['3']}

          <br />
          <br />
          {language['terms']['4']}

          <br />
          <br />
          {language['terms']['5']}

        </p>
        <br />
      </div>
    </div>
  );
}

export default Terms;
