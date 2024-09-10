import DateInfo from "./DateInfo";
import GuestInfo from "./GuestInfo";
import MainDestination from "./mainDestination";
import SearchIcon from "./SearchIcon";

export default function MainHeroContainer() {
  return (
    <div
      style={{
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 0px 40px #00000029",
        borderRadius: "25px",
        opacity: 1,
        padding: "40px",
        width: "1124px",
        height: "232px",
      }}
    >
      <div className="grid grid-cols-3 gap-[15px]">
        <MainDestination />
        <DateInfo />
        <GuestInfo />
      </div>
      <SearchIcon />
    </div>
  );
}
