import { useState } from "react";
import { ICardBox } from "../../interfaces/Interfaces";
import SlideCard from "./SlideCard";

export default function CardBox(props: Readonly<ICardBox>) {
  const { cards } = props;
  const [active, setActive] = useState(true);
  const onSetActive = (id: string) => {
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
                <div key={x.title} className="cardLink">
                  <div>cardlink</div>
                  {x.buttonCards.map((x) => (
                    <h4 key={x.title}>
                      <button
                        onClick={() => setActive(!active)}
                        className="button-30"
                      >
                        {x.title}
                      </button>
                    </h4>
                  ))}
                </div>
              ))}
          </div>
          {cards
            .filter((x) => x.active)
            .map((x) => (
              <div key={x.title} className="activeCardWrapper">
                <input type="radio" name="slide" checked />
                <div className="activeCard">
                  <img
                    src={x.backgroundSrc}
                    style={{
                      opacity: "21%",
                      borderRadius: "3rem",
                      position: "absolute",
                      width: "90%",
                      height: "95%",
                    }}
                    alt=""
                  />
                  <div className="">asdfasdf</div>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
}
