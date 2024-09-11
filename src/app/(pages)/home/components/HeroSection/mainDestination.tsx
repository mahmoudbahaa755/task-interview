"use client";
import BoxContainer from "../container/BoxContainer";

export default function MainDestination() {
  return (
    <BoxContainer>
      <div className="flex flex-col  items-start gap-1 justify-center h-full">
        <div className="text-start font-medium text-[9.75px]  ">
          ابحث عن وجهة
        </div>
        <div className="text-start font-bold text-[21.75px]  ">
          هايسيندا باي
        </div>
        <div className="text-right font-medium text-[10px]  ">
          سيدي عبدالرحمن، مرسى مطروح، مصر
        </div>
      </div>
    </BoxContainer>
  );
}
