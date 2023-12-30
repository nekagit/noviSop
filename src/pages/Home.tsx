import School from "../assets/school0.jpg";
import Sport from "../assets/sport0.jpg";
import WelcomeJumboTron from "../components/Home/WelcomeJumboTron";
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
    <div>
      <WelcomeJumboTron title="Stichting SOP Rotterdam" />
    </div>
  );
}
export default Home;
