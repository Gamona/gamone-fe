import React from "react";
import Icons from "../../assets/images/icons header.png";
import CardHeader from "../../components/CardHeaderLogin";
const Konsultasi = () => {
  return (
    <div className="flex flex-col justify-center items-center relative mb-20">
      <div
        className="absolute left-2 right-2 lg:left-8 lg:right-8 h-[250px] rounded-xl top-0"
        style={{ background: "rgb(125, 135, 151)" }}
      ></div>
      <h1 className="text-[#112340] text-2xl md:text-[32px] mt-20 leading-[38px] text-center font-semibold relative">
        Mau Konsultasi Apa Hari Ini?
      </h1>
      <div className="max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 mb-8 gap-4 md:gap-8">
          <CardHeader img={Icons} title="Hukum Bisnis" />
          <CardHeader img={Icons} title="Hukum Pidana" />
          <CardHeader img={Icons} title="Hukum Kontrak" />
          <CardHeader img={Icons} title="Hukum Properti" />
        </div>
      </div>
    </div>
  );
};

export default Konsultasi;
