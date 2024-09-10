import { FaArrowLeft } from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";

export default function FilterHeader() {
  return (
    <div className="flex items-center justify-between mt-[57px] mb-[22px]">
      <div className="flex  items-baseline gap-2 ">
        <FaArrowLeft className="fill-[#EF3F24] w-[12.87px] h-[12.87px]" />
        <div
          style={{
            textAlign: "center",
            font: "normal normal bold 25px/51px IBM Plex Arabic",
            letterSpacing: "0px",
            color: "#000000",
            fontSize: "24.75px",

            opacity: 1,
          }}
        >
          عنوان التصنيف أو الفلتر
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          style={{
            textAlign: "center",
            font: "normal normal bold 16px/51px IBM Plex Arabic",
            letterSpacing: "0px",
            color: "#EF3F24",
            fontSize: "15.75px",
            opacity: 1,
          }}
        >
          تصفية
        </div>
        <RiSoundModuleFill className="fill-[#EF3F24] w-[22px] h-[18px] cursor-pointer transform rotate-[90deg]" />
      </div>
    </div>
  );
}
