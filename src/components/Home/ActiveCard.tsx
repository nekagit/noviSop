import { IActiveCard } from "../../interfaces/Interfaces";

export default function ActiveCard(props: Readonly<IActiveCard>) {
  const { card } = props;
  return (
    <div key={card.title} className="activeCardWrapper">
      <input type="radio" name="slide" checked />
      <div className="activeCard">
        <img
          src={card.backgroundSrc}
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
  );
}
