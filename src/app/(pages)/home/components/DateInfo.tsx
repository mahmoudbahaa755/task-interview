import { BsCalendarDateFill } from "react-icons/bs";
import BoxContainer from "./BoxContainer";

export default function DateInfo() {
  return (
    <BoxContainer>
      <div className="flex    items-start justify-between h-full">
        <DateDetails
          title="تاريخ الدخول"
          date="22 ديسيمبر"
          previousLink="السابق"
          nextLink="التالي"
        />
        <DateDetails
          title="تاريخ الخروج"
          date="22 ديسيمبر"
          previousLink="السابق"
          nextLink="التالي"
        />
        {/* <div className="flex flex-col items-start justify-center h-full">
          <div className="text-[9.75px] text-gray-500 mb-2">تاريخ الدخول</div>
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
        </div> */}
      </div>
    </BoxContainer>
  );
}

function DateDetails({
  title,
  date,
}: // previousLink,
// nextLink,
{
  title: string;
  date: string;
  previousLink: string;
  nextLink: string;
}) {
  return (
    <div className="flex flex-col items-start justify-center h-full">
      <div className="text-[9.75px] text-gray-500 mb-2"> {title}</div>
      <button className="  gap-2 rounded-full flex items-center justify-between w-full">
        <div className="text-left font-bold text-[21.75px]  text-black">
          {date}
        </div>
        <BsCalendarDateFill className="w-[11.07px] h-[13.41px]" />
      </button>
      <div className="flex gap-2 items-center  ">
        <div className="text-[9.75px]">
          <a className="">السابق</a>
          <div className="underline w-[25px] rounded-sm h-[0.9px] bg-black"></div>
        </div>
        <div
          style={{
            textAlign: "left",
            font: "normal normal medium 10px/51px IBM Plex Arabic",
            letterSpacing: "0px",
            color: "#000000",
            opacity: 1,
          }}
          className="text-left font-bold  text-[9.75px]  text-black"
        >
          التالي
        </div>
      </div>
    </div>
  );
}
