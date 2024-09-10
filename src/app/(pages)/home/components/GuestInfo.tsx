import BoxContainer from "./BoxContainer";
export default function GuestInfo() {
  return (
    <BoxContainer>
      <div className="flex    items-start justify-between h-full">
        <div className="flex flex-col items-start justify-center h-full">
          <div
            style={{
              textAlign: "left",
              font: "normal normal medium 10px/51px IBM Plex Arabic",
              letterSpacing: "0px",
              fontSize: "9.75px ",
              opacity: 1,
            }}
          >
            الضيوف
          </div>
          <div
            style={{
              textAlign: "left",
              font: "normal normal bold IBM Plex Arabic",
              letterSpacing: "0px",
              color: "#000000",
              fontSize: "21.75px !important",
              opacity: 1,
            }}
          >
            2 كبار، 2 أطفال
          </div>
          <span
            style={{
              textAlign: "left",
              font: "normal normal medium 10px/51px IBM Plex Arabic !important",
              color: "#000000",
              opacity: 1,
              fontSize: "9.75px",
            }}
          >
            2 غرفة
          </span>
        </div>
      </div>
    </BoxContainer>
  );
}
