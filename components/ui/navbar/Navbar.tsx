import Image from "next/image";
import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import logo from "../../../public/logo.png";
import LanguageChanger from "./LanguageChanger";

const Navbar: React.FC = () => {
  return (
    <div className="container bg-white">
      <div className="flex items-center container mx-[60px] justify-between pt-4 bg-white">
        <Image width={164.9} height={32.22} src={logo} alt="logo" />

        <div className="flex items-center gap-2">
          <button
            style={{
              background: "#78BAC6 0% 0% no-repeat padding-box ",
              borderRadius: "32px",
              width: "108px",
              height: "31px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <FaRegBuilding size={12.76} fill="white" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              اضف عقارك
            </span>
          </button>
          <div className=" gap-[2px] rounded-full flex items-center  justify-center">
            <div className=" rounded-full p-1 ring-2 ring-[#EF3F24]">
              <ImUser fill="#808080" size={15} />
            </div>
            <span className="text-[9.75px] font-bold !text-[#EF3F24]">
              يزيد العمري
            </span>
          </div>
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
