import { getCard } from "../../../../../apis/card.api";
import Card from "./Card";
import FilterHeader from "./FilterHeader";

export default async function FilterSection() {
  const data = await getCard();
  console.log("data", data);
  return (
    <div className="w-[1124px] mb-[40px]">
      <FilterHeader />
      <div className="grid grid-cols-4 gap-[16px]">
        <Card
          like={true}
          title="شاليهات هايسيندا"
          rate={4.2}
          price={100}
          location="مرسى مطروح، مصر"
        />
        <Card
          like={false}
          title="شاليهات هايسيندا"
          rate={3.5}
          price={100}
          location="شاليهات هايسيندا"
        />
        <Card
          like={false}
          title="شاليهات هايسيندا"
          rate={1.5}
          price={100}
          location="شاليهات هايسيندا"
        />
        <Card
          like={false}
          title="شاليهات هايسيندا"
          rate={5.5}
          price={100}
          location="شاليهات هايسيندا"
        />
      </div>
    </div>
  );
}
