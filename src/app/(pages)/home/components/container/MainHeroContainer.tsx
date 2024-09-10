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
        borderRadius: "25px",
        opacity: 1,
        padding: "40px",
        position: "relative",

        width: "1124px",
        height: "232px",
      }}
    >
      <div className="grid grid-cols-3 gap-[15px]">
        <MainDestination />
        <DateInfo />
        <GuestInfo />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-55px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <SearchIcon />
      </div>
    </div>
  );
}
