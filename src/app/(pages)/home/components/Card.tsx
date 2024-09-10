import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import defaultImg from "../../../../../public/loc.webp";
export default function Card({
  img,
  title,
  rate,
  price,
  location,
  like,
}: {
  like: boolean;
  img?: string;
  title: string;
  rate: number;
  price: number;
  location: string;
}) {
  return (
    <div className="bg-white rounded-lg  overflow-hidden max-w-sm">
      <div className="relative h-48">
        <div className="!w-[269px] rounded-md !h-[204px]">
          <Image
            src={img || defaultImg}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <button className="absolute bg-white rounded-full p-2 top-[23px] left-[18px] w-[27px] h-[25px] text-white text-2xl z-10">
          {!like ? (
            <div>
              <FaHeart className="fill-[#EF3F24] w-[14px] h-[14px]" />
            </div>
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex bg-[#EF3F24] text-[12px] items-center rounded-md text-white p-1">
            <span>{rate.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center w-full mb-2">
          <span className="text-sm text-gray-600">{location}</span>
        </div>

        <div className="flex gap-1 justify-start items-end">
          <span
            style={{
              textAlign: "right",
              font: "normal normal bold 14px/51px IBM Plex Arabic",
              letterSpacing: "0px",
              color: "#000000",
              opacity: 1,
            }}
          >
            {price} ريال
          </span>
          <span
            style={{
              textAlign: "right",
              font: "normal normal bold 10px/51px IBM Plex Arabic",
              color: "#7E7E7E",
              fontSize: "9.75px",
            }}
          >
            في الليلة
          </span>
        </div>
      </div>
    </div>
  );
}
