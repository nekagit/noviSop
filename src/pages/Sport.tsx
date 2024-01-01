import {
  default as KrosRTS,
  default as SrpOmlPrRotterdam,
} from "../assets/sport0.jpg";
import CardHolder from "../components/Home/CardHolder";
import { ICard } from "./Home";

function Sport() {
  const allCards: ICard[] = [
    {
      title: "Srpsko Omladinsko Prijateljstvo Rotterdam",
      backgroundSrc: SrpOmlPrRotterdam,
      color: "brown",
      top: "",
    },
    { title: "Kros RTS", backgroundSrc: KrosRTS, color: "blue", top: "" },
    { title: "Sportevi", backgroundSrc: KrosRTS, color: "white", top: "" },
    { title: "Sportski dani", backgroundSrc: KrosRTS, color: "white", top: "" },
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
