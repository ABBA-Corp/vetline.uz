import React, { useEffect } from "react";

function Terms() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  return (
    <div className="p-[7vw] md:pt-[10vw] pt-[30vw] bg-[#E94B4B] font-semibold">
      <div>
        <h1 className="md:text-[2vw] text-[5vw] text-[#fff] font-bold">
          Foydalanish shartlari
        </h1>
        <br />
        <p className="md:text-[1.2vw] text-[3.2vw] text-[#fff] font-normal">
          Vet Line Animal Health - uy hayvonlari va chorva mollari uchun
          qo'shimchalar, vitaminlar va dori-darmonlar kabi turli xil hayvonlar
          salomatligi mahsulotlarini taklif qiluvchi brend. Ushbu mahsulotlardan
          foydalanish hayvonning o'ziga xos ehtiyojlariga va veterinar
          tavsiyasiga qarab farq qilishi mumkin.
          <br />
          Vet Line Animal Health mahsulotlaridan foydalanish bo'yicha ba'zi
          umumiy ko'rsatmalar:
          <br />
          Hayvoningizga biron bir mahsulotni ishlatishdan oldin veterinar bilan
          maslahatlashing, chunki ular hayvonning sog'lig'i va shaxsiy
          ehtiyojlariga qarab aniq tavsiyalar berishi mumkin.
          <br />
          Mahsulot yorlig'ida yoki veterinar ko'rsatmasida tavsiya etilgan
          dozalash va qo'llash bo'yicha ko'rsatmalarga rioya qiling.
          <br />
          Barcha mahsulotlarni salqin, quruq, bolalar va hayvonlar qo'li
          etmaydigan joyda saqlang.
          <br />
          Agar mahsulotdan foydalangandan so'ng hayvoningiz biron bir nojo'ya
          ta'sirga duch kelsa, darhol foydalanishni to'xtating va
          veterinaringizga murojaat qiling.
          <br />
          Odamlar yoki boshqa hayvonlar uchun Vet Line Animal Health
          mahsulotidan foydalanmang.
          <br />
          Umuman olganda, hayvoningizning salomatligi va farovonligini
          ta'minlash uchun Vet Line Animal Health mahsulotlaridan mas'uliyat
          bilan va professional tavsiyalarga muvofiq foydalanish muhimdir.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Terms;
