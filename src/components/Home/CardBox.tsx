import { useState } from "react";
import "../../Cards.css";
import {
  default as PregledGodine,
  default as School,
  default as Sport,
  default as SportskiDani,
} from "../../assets/school0.jpg";
import { ICard } from "../../pages/Home";


export default function CardBox() {
  const [active, setActive] = useState(true);
  const cards:ICard = [
    {
      active: true,
      title: "School",
      htmlFor: "c1",
      backgroundSrc: School,
      buttonCards: ["asdf", "asdf", "asdf"],
    },

    {
      title: "Sport",
      backgroundSrc: Sport,
      htmlFor: "c2",
      buttonCards: ["asdf", "asdf", "asdf"],
      active: false,
    },
    {
      title: "Sportski \nDani",
      htmlFor: "c3",
      backgroundSrc: SportskiDani,
      buttonCards: ["asdf", "asdf", "asdf"],
      active: false,
    },
    {
      title: "Pregled \nGodine",
      htmlFor: "c4",
      backgroundSrc: PregledGodine,
      buttonCards: ["asdf", "asdf", "asdf"],
      active: false,
    },
  ];
  {
    /* <input type="radio" name="slide" id={x.htmlFor} />
                <label htmlFor={x.htmlFor} className="card">
                <div className="column">
                <div className="icon">{x.title}</div>
                <div className="description">
                <h4>
                <button className="button-30">{x.buttonName}</button>
                </h4>
                </div>
                </div>
              </label> */
  }
  return (
    <>
      {active ? (
        <div className="cardHolderWrapper">
          <section className="wrapper">
            <div className="container">
              {cards.map((x) => (
                <>
                  <input type="radio" name="slide" id={x.htmlFor} />
                  <label htmlFor={x.htmlFor} className="card">
                    <div className="column">
                      <div className="icon">{x.title}</div>
                      <div className="description">
                        {x.buttonCards.map((x) => (
                          <h4>
                            <button
                              onClick={() => setActive(!active)}
                              className="button-30"
                            >
                              {x}
                            </button>
                          </h4>
                        ))}
                      </div>
                    </div>
                  </label>
                </>
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
                    <h4>
                      <button
                        onClick={() => setActive(!active)}
                        className="button-30"
                      >
                        {x}
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
