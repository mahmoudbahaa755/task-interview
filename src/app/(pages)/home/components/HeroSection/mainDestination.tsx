"use client";
import { useGlobalLoading } from "../../../../../../utils/Loading";
import BoxContainer from "../container/BoxContainer";

export default function MainDestination() {
  const loading = useGlobalLoading();
  console.log(loading);
  return (
    <BoxContainer>
      <div className="flex flex-col items-start gap-1 justify-center h-full">
        <div
          // style={{
          //   textAlign: "start",
          //   fontWeight: "medium",
          //   letterSpacing: "0px",
          //   color: "#000000",
          //   fontSize: "9.75px",
          // }}
          className="text-start font-medium text-[9.75px] text-[#000000]"
        >
          ابحث عن وجهة
        </div>
        <div
          // style={{
          //   textAlign: "start",
          //   fontWeight: "bold",
          //   fontSize: "21.75px",
          //   letterSpacing: "0px",
          //   color: "#000000",
          //   opacity: 1,
          // }}
          className="text-start font-bold text-[21.75px] text-[#000000]"
        >
          هايسيندا باي
        </div>
        <div
          // style={{
          //   textAlign: "right",
          //   fontWeight: "medium",
          //   letterSpacing: "0px",
          //   color: "#000000",
          //   opacity: 1,
          //   fontSize: "9.75px",
          // }}
          className="text-right font-medium text-[9.75px] text-[#000000]"
        >
          سيدي عبدالرحمن، مرسى مطروح، مصر
        </div>
      </div>
    </BoxContainer>
  );
}
