"use client";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

export default function LanguageChanger() {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="!text-[#EF3F24] rounded-full flex items-center w-[102px] h-[31px] justify-center"
        onClick={toggleDropdown}
      >
        <MdArrowDropDown
          fill="#EF3F24"
          className="w-[9.25px] h-[4.63px]"
          size={10}
        />
        <span
          style={{
            color: "#EF3F24",
            font:
              language === "en"
                ? "normal normal 700 10px/51px Avenir"
                : "normal normal 700 10px/51px Avenir Arabic",
          }}
          className="text-[9.75px] text-[#EF3F24]"
        >
          {language === "en" ? "En" : "Ar"}
        </span>
      </button>
      {false && (
        <div className="absolute  top-full mt-2 w-[102px] bg-white shadow-md rounded-md border border-gray-200">
          <ul className="divide-y p-2 rounded-md divide-gray-100">
            <li
              className={` cursor-pointer hover:bg-gray-50 flex items-center justify-center ${
                language === "en" ? "!text-[#EF3F24]" : "text-black"
              }`}
              onClick={() => handleLanguageChange("en")}
            >
              <span className="text-[10px] font-bold">En</span>
            </li>
            <li
              className={` cursor-pointer hover:bg-gray-50 flex items-center justify-center ${
                language === "ar" ? "!text-[#EF3F24]" : "text-black"
              }`}
              onClick={() => handleLanguageChange("ar")}
            >
              <span className="text-[10px] font-bold">Ar</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
