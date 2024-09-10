import React from "react";
import { FaChevronDown, FaHome, FaUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full pt-4 flex-row-reverse !bg-white container  justify-between ">
      <div
        className="text-[#EF3F24] font-bold text-[20px] leading-[27px] tracking-[-0.4px]"
        style={{
          background: " 0% 0% no-repeat padding-box",
          opacity: 1,
        }}
      >
        aroovia
      </div>

      <div className="flex gap-2 ">
        <button
          className="!rounded-sm flex !bg-[#78BAC6] !text-white"
          style={{
            background: "#78BAC6 ",
            borderRadius: "10px",
            width: "102px",
            height: "31px",
            padding: "6.6px 15px",
            opacity: 1,
          }}
        >
          <FaHome /> <span className="!text-[11px] text-white">اضف عقارك</span>
        </button>
        <button className="  gap-2  !text-primary  rounded-full  flex items-center w-[102px] h-[31px] justify-center">
          <FaUser className=" !text-primary rounded-full border-red-500 " />{" "}
          <span
            style={{
              color: "#EF3F24",
            }}
          >
            يزيد العمري
          </span>
        </button>
        <button className="  !text-primary !text-[#EF3F24] rounded-full  flex items-center w-[102px] h-[31px] justify-center">
          <FaChevronDown />
          <span
            style={{
              color: "#EF3F24",
            }}
          >
            {" "}
            En
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
