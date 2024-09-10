import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../../../public/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full align-baseline pt-4 flex-row-reverse !bg-white container  justify-between ">
      <div
        style={{
          background: " 0% 0% no-repeat padding-box",
          opacity: 1,
        }}
      >
        <Image width={164.9} height={32.22} src={logo} alt="logo" />
        {/* aroovia <span className="text-[#78BAC6]">tm</span> */}
      </div>

      <div className="flex justify-center items-center  ">
        <button
          className="  flex  gap-[3px] !text-white"
          style={{
            background: "#78BAC6 0% 0% no-repeat padding-box ",
            borderRadius: "32px",
            width: "102px",
            height: "31px",
            padding: "6.6px 15px",
            opacity: 1,
          }}
        >
          <FaHome />
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
        <button className="gap-2 !text-primary rounded-full flex items-center w-[102px] h-[31px] justify-center">
          <CgProfile className="!text-primary rounded-full ring-2 ring-primary" />{" "}
          <span
            className="text-[9.75px] text-[#EF3F24]"
            style={{
              color: "#EF3F24",
              font: "normal normal 700 10px/51px Avenir Arabic",
            }}
          >
            يزيد العمري
          </span>
        </button>
        <button className="  !text-primary !text-[#EF3F24] rounded-full  flex items-center w-[102px] h-[31px] justify-center">
          <MdArrowDropDown className="w-[9.25px] h-[4.63px]" size={10} />
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
