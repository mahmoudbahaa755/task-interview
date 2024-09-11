import BoxContainer from "../container/BoxContainer";
export default function GuestInfo() {
  return (
    <BoxContainer>
      <div className="flex    items-start justify-between h-full">
        <div className="flex flex-col items-start justify-center h-full">
          <div className="text-left font-medium text-[9.75px] ">الضيوف</div>
          <div className="text-[21.75px] font-bold">2 كبار، 2 أطفال</div>
          <span className="text-[9.75px] font-medium">2 غرفة</span>
        </div>
      </div>
    </BoxContainer>
  );
}
