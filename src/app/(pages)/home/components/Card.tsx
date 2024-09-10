"use client";
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
    <div className="bg-white rounded-xl  overflow-hidden max-w-sm">
      <div className="relative ">
        <div className="!w-[269px] relative rounded-xl !h-[204px]">
          <Image
            src={img || defaultImg}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="!rounded-[20px]"
          />
        </div>
        <button className="absolute bg-white rounded-full  flex justify-center items-center top-[18px] left-[23px] w-[27px] h-[25px] text-white z-10">
          {!like ? (
            <FaHeart className="  fill-[#EF3F24]  w-[14px] h-[14px]" />
          ) : (
            <FaRegHeart className="  fill-[#EF3F24] w-[14px] h-[14px]" />
          )}
        </button>
      </div>
      <div className="mt-[14px] mb-[1px]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex ml-[9px] w-[25px] h-[25px] text-center bg-[#EF3F24] text-[12px]  justify-center items-center rounded-md text-white">
            <span>{rate.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center mb-[3px] w-full">
          <span className="text-[9.75px] text-gray-600">{location}</span>
        </div>

        <div className="flex gap-[6px] justify-start items-baseline">
          <span
            style={{
              textAlign: "right",
              font: "normal normal bold 14px/51px IBM Plex Arabic",
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
