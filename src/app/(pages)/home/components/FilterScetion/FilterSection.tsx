import { getCard } from "../../../../../../apis/card.api";
import { CardType } from "../../_types/Card.types";
import Card from "./Card";
import FilterHeader from "./FilterHeader";

export default async function FilterSection() {
  const { data: cardData } = await getCard();
  return (
    <div className=" mb-[40px]">
      <FilterHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
        {cardData?.map((card: CardType, index: number) => {
          return (
            <Card
              key={index}
              like={Boolean(card.averageRating)}
              title={card.nameAr}
              rate={card.averageRating}
              price={card.price}
              img={card.mainImage || card.logo || card.PropertyType.image}
              location={card.address}
            />
          );
        })}
      </div>
    </div>
  );
}
