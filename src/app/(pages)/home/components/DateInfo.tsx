import { FaChevronDown } from "react-icons/fa";
import BoxContainer from "./BoxContainer";

export default function DateInfo() {
  return (
    <BoxContainer>
      <div className="flex   items-start justify-between h-full">
        <div className="flex flex-col items-start justify-center h-full">
          <div className="text-[9.75px] text-gray-500 mb-2">تاريخ الدخول</div>
          <button className="  rounded-full flex items-center justify-between w-full">
            <div className="text-left font-bold text-[21.75px]  text-black">
              22 ديسيمبر
            </div>
            <FaChevronDown className="ml-2" />
          </button>
          <div className="flex items-center gap-2 ">
            <div className="text-left text-[9.75px]font-bold   text-black">
              <a className="underline  ">السابق</a>
            </div>
            <div className="text-left font-bold text-[9.75px]  text-black">
              التالي
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center h-full">
          <div className="text-[9.75px] text-gray-500 mb-2"> تاريخ الخروج</div>
          <button className="  rounded-full flex items-center justify-between w-full">
            <div className="text-left font-bold text-[21.75px]  text-black">
              22 ديسيمبر
            </div>
            <FaChevronDown className="ml-2" />
          </button>
          <div className="flex items-center gap-2 ">
            <div className="text-[9.75px]">
              <a className="underline ">السابق</a>
            </div>
            <div className="text-left font-bold  text-[9.75px]  text-black">
              التالي
            </div>
          </div>
        </div>
      </div>
    </BoxContainer>
  );
}
