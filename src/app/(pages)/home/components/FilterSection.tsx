import { getCard } from "../../../../../apis/card.api";
import Card from "./Card";
import FilterHeader from "./FilterHeader";

export default async function FilterSection() {
  const data = await getCard();
  console.log("data", data);
  return (
    <>
      <FilterHeader />
      <div className="grid grid-cols-4 gap-4">
        <Card
          like={false}
          title="شاليهات هايسيندا"
          rate={4.5}
          price={100}
          location="مرسى مطروح، مصر"
        />
        <Card
          like={false}
          title="شاليهات هايسيندا"
          rate={4.5}
          price={100}
          location="شاليهات هايسيندا"
        />
        <Card
          like={false}
          title="شاليهات هايسيندا"
          rate={4.5}
          price={100}
          location="شاليهات هايسيندا"
        />
        <Card
          like={false}
          title="شاليهات هايسيندا"
          rate={4.5}
          price={100}
          location="شاليهات هايسيندا"
        />
      </div>
    </>
  );
}
