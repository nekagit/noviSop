import Sponsori from "../assets/school0.jpg";
import {
  default as KrosRTS,
  default as SrpOmlPrRotterdam,
} from "../assets/sport0.jpg";
import CardHolder from "../components/Home/CardHolder";
import { ICard } from "../interfaces/Interfaces";

function School() {
  const allCards: ICard[] = [
    {
      title: "Opste Informacije",
      backgroundSrc: Sponsori,
      htmlFor: "",
      buttonCards: [],
    },
    {
      title: "Nastava",
      backgroundSrc: SrpOmlPrRotterdam,
      htmlFor: "",
      buttonCards: [],
    },
    { title: "Kontakt", backgroundSrc: KrosRTS, htmlFor: "", buttonCards: [] },
  ];
  return (
    <>
      {allCards.map((x) => (
        <CardHolder
          key={x.title}
          title={x.title}
          backgroundSrc={x.backgroundSrc}
        />
      ))}
    </>
  );
}
export default School;
