import Sponsori from "../assets/school0.jpg";
import {
  default as KrosRTS,
  default as SrpOmlPrRotterdam,
} from "../assets/sport0.jpg";
import CardHolder from "../components/Home/CardHolder";
import { ICard } from "./Home";

function News() {
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
    { title: "Skola", backgroundSrc: KrosRTS, color: "blue", top: "" },
    { title: "Pregledi godina", backgroundSrc: KrosRTS, color: "yellow", top: "" },
  ];
  return (
    <div className="cardHolderWrapper">
      {allCards.map((x) => (
        <CardHolder
          key={x.title}
          title={x.title}
          backgroundSrc={x.backgroundSrc}
          color={x.color}
          top={x.top}
        />
      ))}
    </div>
  );
}
export default News;
