import CardBox from "../components/Home/CardBox";

function News() {
  // const allCards: ICard[] = [
  //   {
  //     title: "Sponsori",
  //     backgroundSrc: Sponsori,
  //     color: "red",
  //     top: "",
  //   },
  //   {
  //     title: "Srpsko Omladinsko Prijateljstvo Rotterdam",
  //     backgroundSrc: SrpOmlPrRotterdam,
  //     color: "brown",
  //     top: "",
  //   },
  //   { title: "Skola", backgroundSrc: KrosRTS, color: "blue", top: "" },
  //   { title: "Pregledi godina", backgroundSrc: KrosRTS, color: "yellow", top: "" },
  // ];
  return (
    <div className="cardHolderWrapper">
      <CardBox />
      {/* {allCards.map((x) => (
        <CardHolder
          key={x.title}
          title={x.title}
          backgroundSrc={x.backgroundSrc}
          color={x.color}
          top={x.top}
        />
      ))} */}
    </div>
  );
}
export default News;
