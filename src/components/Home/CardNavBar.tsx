import { ICardNavBar } from "../../interfaces/Interfaces";

export default function CardNavBar(props: ICardNavBar) {
  const { card, onSetActive } = props;
  return (
    <div className="cardLink">
      <div>cardlink</div>
      {card.buttonCards.map((x) => (
        <h4 key={x.title}>
          <button onClick={() => onSetActive(x.title)} className="button-30">
            {x.title}
          </button>
        </h4>
      ))}
    </div>
  );
}
