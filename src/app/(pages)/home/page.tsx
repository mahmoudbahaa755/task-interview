import FilterSection from "./components/FilterScetion/FilterSection";
import Hero from "./components/HeroSection/Hero";
import MainHeroContainer from "./components/container/MainHeroContainer";

export default async function HomePage() {
  const data = await fetch("https://wovenclouds.com/arrovia/api/search/random");
  console.log(data);
  return (
    <div className="container ">
      <Hero />

      <MainHeroContainer />
      <FilterSection />
      {/* Rest of your home page content */}
    </div>
  );
}
// https://xd.adobe.com/view/843729cc-7d46-4592-9ed7-9fe5c46df5fc-d164/specs/
