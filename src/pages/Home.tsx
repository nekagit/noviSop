import CardHolder from "../components/Home/CardHolder";

export interface ICard {
  title: string;
  backgroundSrc: string;
  color: string;
}
function Home() {
  const allCards: ICard[] = [
    { title: "School", backgroundSrc: "../assets/school0.jpg", color: "red" },
    { title: "Sport", backgroundSrc: "../assets/sport0.jpg", color: "yellow" },
  ];
  return (
    <section>
      <div className="flex-row justify-center">
        {allCards.map((x) => (
          <CardHolder
            key={x.title}
            title={x.title}
            backgroundSrc={x.backgroundSrc}
            color={x.color}
          />
        ))}
      </div>
    </section>
  );
}
export default Home;
