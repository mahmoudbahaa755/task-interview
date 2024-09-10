import { FaFilter } from "react-icons/fa";

export default function FilterHeader() {
  return (
    <div className="flex items-center justify-between">
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
        <FaFilter className="fill-[#EF3F24]" />
      </div>
    </div>
  );
}
