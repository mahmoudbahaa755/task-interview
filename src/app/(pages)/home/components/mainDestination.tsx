import BoxContainer from "./BoxContainer";

export default function MainDestination() {
  return (
    <BoxContainer>
      <div className="flex flex-col items-start gap-2 justify-center h-full">
        <div
          style={{
            textAlign: "start",
            fontWeight: "medium",
            letterSpacing: "0px",
            color: "#000000",
            fontSize: "9.75px",
          }}
        >
          ابحث عن وجهه
        </div>
        <div
          style={{
            textAlign: "start",
            fontWeight: "bold",
            fontSize: "21.75px",
            letterSpacing: "0px",
            color: "#000000",
            opacity: 1,
          }}
        >
          هايسيندا باي
        </div>
        <div
          style={{
            textAlign: "right",
            fontWeight: "medium",
            letterSpacing: "0px",
            color: "#000000",
            opacity: 1,
            fontSize: "9.75px",
          }}
        >
          سيدي عبدالرحمن، مرسى مطروح، مصر
        </div>
      </div>
    </BoxContainer>
  );
}
