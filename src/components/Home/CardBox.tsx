import { useState } from "react";
import "../../Cards.css";
export default function CardBox() {
  const [active, setActive] = useState(true);
  const lines = [
    { initial: "School", htmlFor: "c1", buttonName: "asdf" },
    { initial: "Sport", htmlFor: "c2", buttonName: "asdf" },
    { initial: "Sportski \nDani", htmlFor: "c3", buttonName: "asdf" },
    { initial: "Pregled \nGodine", htmlFor: "c4", buttonName: "asdf" },
  ];
  return (
      <section className="wrapper">
        <div className="container">
          {active ? (
            <>
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
            </>
          ) : (
            <>asdf</>
          )}
        </div>
      </section>
  );
}
