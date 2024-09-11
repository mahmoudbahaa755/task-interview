import { FaArrowLeft } from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";

export default function FilterHeader() {
  return (
    <div className="flex items-center justify-between mt-[57px] mb-[22px]">
      <div className="flex  items-baseline gap-2 ">
        <FaArrowLeft className="fill-[#EF3F24] w-[12.87px] h-[12.87px]" />
        <div className="text-[24.75px] font-bold text-[#000000]">
          عنوان التصنيف أو الفلتر
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-[15.75px] font-bold text-[#EF3F24]">تصفية</div>
        <RiSoundModuleFill className="fill-[#EF3F24] w-[22px] h-[18px] cursor-pointer transform rotate-[90deg]" />
      </div>
    </div>
  );
}
