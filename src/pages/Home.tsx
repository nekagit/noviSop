import School from "../assets/school0.jpg";
import Sport from "../assets/sport0.jpg";
import CardHolder from "../components/Home/CardHolder";
export interface ICard {
  title: string;
  backgroundSrc: string;
  color: string;
  top: string;
}

export interface IJumboTron {
  title: string;
}

export interface IHomeCard {}
function Home() {
  const allCards: ICard[] = [
    {
      title: "School",
      backgroundSrc: School,
      color: "red",
      top: "",
    },
    {
      title: "Sport",
      backgroundSrc: Sport,
      color: "brown",
      top: "",
    },
  ];
  return (
    <section>
      <div>
        {allCards.map((x, i) => (
          <CardHolder
            key={x.title}
            title={x.title}
            backgroundSrc={x.backgroundSrc}
            color={x.color}
            top={i * 42 + 50 + "px"}
          />
        ))}
      </div>
    </section>
  );
}
export default Home;
