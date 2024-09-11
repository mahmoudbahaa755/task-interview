"use client";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
export default function Card({
  img,
  title,
  rate,
  price,
  location,
  like,
}: {
  like: boolean;
  img: string;
  title: string;
  rate: number;
  price: number;
  location: string;
}) {
  const [isLiked, setIsLiked] = useState(like);
  return (
    <div className="  rounded-xl  overflow-hidden max-w-sm">
      <div className="relative ">
        <div className=" relative rounded-xl !h-[204px]">
          <Image
            src={img}
            alt={title}
            layout="fill"
            className="!rounded-[20px]"
          />
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute bg-white rounded-full  flex justify-center items-center  top-[14px] left-[21.5px] w-[27px] h-[25px] text-white z-10"
        >
          {!isLiked ? (
            <FaHeart className="  fill-[#EF3F24]  w-[15px] h-[16px]" />
          ) : (
            <FaRegHeart className="  fill-[#EF3F24] w-[15px] h-[16px]" />
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
          <span className="font-bold text-[14px]">{price.toFixed(2)} ريال</span>
          <span className="text-[9.75px] font-bold text-[#7E7E7E]">
            في الليلة
          </span>
        </div>
      </div>
    </div>
  );
}
