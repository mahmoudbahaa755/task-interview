import { BsCalendarDateFill } from "react-icons/bs";

export default function DateInfo() {
  return (
    <div className="flex  h-[123px] !pt-[44px] !pb-[65px] !px-[37px] md:!w-full text-start bg-white rounded-[15px] border-[3px] border-[#F0F0F0] items-start justify-between ">
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
    </div>
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
    <div className="flex  flex-col items-start justify-center h-full">
      <div className="text-[9.75px] text-[#000000] font-medium mb-[4px]">
        {title}
      </div>
      <button className="gap-[10.11px] rounded-full flex items-center justify-between w-full">
        <div className="text-right font-bold text-[14px] md:text-[20.75px]  text-black">
          {date}
        </div>
        <BsCalendarDateFill className="w-[10.07px] h-[12.41px]" />
      </button>
      <div className="flex gap-2 items-center  ">
        <div className="text-[9.75px] font-medium">
          <a className="cursor-pointer">السابق</a>
          <div className="underline w-[25px] rounded-sm h-[0.9px] bg-black"></div>
        </div>
        <div className="text-left  font-medium  cursor-pointer  text-[9.75px]  text-black">
          التالي
        </div>
      </div>
    </div>
  );
}
