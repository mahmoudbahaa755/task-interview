import DateInfo from "../HeroSection/DateInfo";
import GuestInfo from "../HeroSection/GuestInfo";
import MainDestination from "../HeroSection/mainDestination";
import SearchIcon from "../HeroSection/SearchIcon";

export default function MainHeroContainer() {
  return (
    <div
      style={{
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 0px 40px #00000029",
        // width: "1124px",
        height: "232px",
      }}
      className="grid relative md:grid-cols-1 lg:grid-cols-3 gap-[15px] rounded-[25px] p-[40px]"
    >
      {/* <div className="grid grid-cols-3 gap-[15px]"> */}
      <MainDestination />
      <DateInfo />
      <GuestInfo />
      {/* </div> */}
      <div className="absolute bottom-[-55px] left-[50%] transform -translate-x-1/2">
        <SearchIcon />
      </div>
    </div>
  );
}
