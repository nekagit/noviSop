import { useState } from "react";
import { ICardBox } from "../../interfaces/Interfaces";
import ActiveCard from "./ActiveCard";
import CardNavBar from "./CardNavBar";
import SlideCard from "./SlideCard";

export default function CardBox(props: Readonly<ICardBox>) {
  const { cards } = props;
  const [active, setActive] = useState(true);
  const onSetActive = (id: string) => {
    const newActive = cards.find(x => x.title == id)
    // setActive(newActive)
    console.log(id);
  };
  return (
    <>
      {active ? (
        <div className="cardHolderWrapper">
          <section className="wrapper">
            <div className="container">
              {cards.map((x) => (
                <SlideCard key={x.title} card={x} onSetActive={onSetActive} />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <>
          <div className="cardBar">
            {cards
              .filter((x) => !x.active)
              .map((x) => (
                <CardNavBar key={x.title} card={x} onSetActive={onSetActive} />
              ))}
          </div>
          {cards
            .filter((x) => x.active)
            .map((x) => (
              <ActiveCard key={x.title} card={x} />
            ))}
        </>
      )}
    </>
  );
}
