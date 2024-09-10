import Image from "next/image";
import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import logo from "../../../public/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between pt-4 bg-white">
      <Image width={164.9} height={32.22} src={logo} alt="logo" />

      <div className="flex items-center gap-2">
        <div>
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
            <FaRegBuilding fill="white" />
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
        </div>
        <div className=" gap-[2px] rounded-full flex items-center w-[102px] h-[31px] justify-center">
          <TiUser className="fill-gray-600 ring-[#EF3F24] ring-2 rounded-full" />{" "}
          <span
            className="text-[9.75px]  text-[#EF3F24]"
            style={{
              color: "#EF3F24",
              font: "normal normal 700 10px/51px Avenir Arabic",
            }}
          >
            يزيد العمري
          </span>
        </div>
        <button className="   !text-[#EF3F24] rounded-full  flex items-center w-[102px] h-[31px] justify-center">
          <MdArrowDropDown
            fill=""
            className="w-[9.25px] h-[4.63px]"
            size={10}
          />
          <span
            style={{
              color: "#EF3F24",
              font: "normal normal 700 10px/51px Avenir Arabic",
            }}
            className="text-[9.75px] text-[#EF3F24]"
          >
            En
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
