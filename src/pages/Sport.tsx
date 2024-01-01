import Sponsori from "../assets/school0.jpg";
import {
  default as KrosRTS,
  default as SrpOmlPrRotterdam,
} from "../assets/sport0.jpg";
import CardHolder from "../components/Home/CardHolder";
import { ICard } from "./Home";

function Sport() {
  const allCards: ICard[] = [
    {
      title: "Sponsori",
      backgroundSrc: Sponsori,
      color: "red",
      top: "",
    },
    {
      title: "Srpsko Omladinsko Prijateljstvo Rotterdam",
      backgroundSrc: SrpOmlPrRotterdam,
      color: "brown",
      top: "",
    },
    { title: "Kros RTS", backgroundSrc: KrosRTS, color: "blue", top: "" },
    {
      title: "Pregled godina",
      backgroundSrc: KrosRTS,
      color: "yellow",
      top: "",
    },
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
export default Sport;
