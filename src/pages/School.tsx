import Sponsori from "../assets/school0.jpg";
import {
  default as KrosRTS,
  default as SrpOmlPrRotterdam,
} from "../assets/sport0.jpg";
import CardHolder from "../components/Home/CardHolder";
import { ICard } from "./Home";

function School() {
  const allCards: ICard[] = [
    {
      title: "Opste Informacije",
      backgroundSrc: Sponsori,
      color: "red",
      top: "",
    },
    {
      title: "Nastava",
      backgroundSrc: SrpOmlPrRotterdam,
      color: "brown",
      top: "",
    },
    { title: "Kontakt", backgroundSrc: KrosRTS, color: "blue", top: "" },
  ];
  return (
    <>
      {allCards.map((x) => (
        <CardHolder
          key={x.title}
          title={x.title}
          backgroundSrc={x.backgroundSrc}
          color={x.color}
          top={x.top}
        />
      ))}
    </>
  );
}
export default School;
