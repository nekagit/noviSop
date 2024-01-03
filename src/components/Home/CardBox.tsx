import { useState } from "react";
import "../../Cards.css";
import {
  default as PregledGodine,
  default as School,
  default as Sport,
  default as SportskiDani,
} from "../../assets/school0.jpg";

export default function CardBox() {
  const [active, setActive] = useState(true);
  const lines = [
    {
      initial: "School",
      backgroundSrc: School,
      htmlFor: "c1",
      buttonName: "asdf",
      active: true,
    },

    {
      initial: "Sport",
      backgroundSrc: Sport,
      htmlFor: "c2",
      buttonName: "asdf",
      active: false,
    },
    {
      initial: "Sportski \nDani",
      htmlFor: "c3",
      backgroundSrc: SportskiDani,
      buttonName: "asdf",
      active: false,
    },
    {
      initial: "Pregled \nGodine",
      htmlFor: "c4",
      backgroundSrc: PregledGodine,
      buttonName: "asdf",
      active: false,
    },
  ];
  {
    /* <input type="radio" name="slide" id={x.htmlFor} />
                <label htmlFor={x.htmlFor} className="card">
                <div className="column">
                <div className="icon">{x.initial}</div>
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
              {lines.map((x) => (
                <>
                  <input type="radio" name="slide" id={x.htmlFor} />
                  <label htmlFor={x.htmlFor} className="card">
                    <div className="column">
                      <div className="icon">{x.initial}</div>
                      <div className="description">
                        <h4>
                          <button className="button-30">{x.buttonName}</button>
                        </h4>
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
            {lines
              .filter((x) => !x.active)
              .map((x) => (
                <div className="cardLink">
                  <div>cardlink</div>
                </div>
              ))}
          </div>
          {lines
            .filter((x) => x.active)
            .map((x) => (
              <div key={x.initial} className="activeCardWrapper">
                <input type="radio" name="slide" checked />
                <div
                  className="activeCard"
                >
                  <img src={x.backgroundSrc} style={{opacity: "21%", borderRadius: "3rem",position: "absolute",width: "90%", height: "95%"}} alt="" />
                  <div className="">asdfasdf</div>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
}
