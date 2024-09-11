import Image from "next/image";
import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import logo from "../../../public/logo.png";
import LanguageChanger from "./LanguageChanger";

const Navbar: React.FC = () => {
  return (
    <div
      style={{
        marginTop: "41px",
      }}
      className="container  bg-white"
    >
      <div className="flex items-center container justify-between   bg-white">
        <Image width={164.9} height={32.22} src={logo} alt="logo" />

        <div className="flex items-center gap-2">
          <button
            style={{
              background: "#78BAC6 0% 0% no-repeat padding-box ",
              borderRadius: "32px",
              width: "102px",
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
              className="text-[11px] "
            >
              اضف عقارك
            </span>
          </button>
          <div className=" gap-[2px] rounded-full flex items-center  justify-center">
            <div
              style={{
                height: "22px",
                width: "22px",
                borderColor: "#EF3F24",
                borderWidth: "2px",
                padding: "2px",
                marginLeft: "4px",
              }}
              className="z-10 rounded-full p-2 ring-2 ring-[#EF3F24] flex items-center justify-center border-2 border-[#EF3F24] h-[20px] w-[20px]"
            >
              <ImUser fill="gray" size={22} />
            </div>
            <span
              style={{
                color: "#EF3F24",
                fontSize: "9.75px",
                fontWeight: "bold",
              }}
              className="text-[9.75px] font-bold !text-[#EF3F24]"
            >
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
