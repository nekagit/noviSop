import SRBMinistar from "../../src/assets/heder-mirnije-removebg-preview.png";
import SOP from "../../src/assets/wg-removebg.png";
import OutletCard from "../components/Home/OutletCard";
import NavBar from "../components/NavBar/NavBar";

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
  // const allCards: ICard[] = [
  //   {
  //     title: "School",
  //     backgroundSrc: School,
  //     color: "red",
  //     top: "",
  //   },
  //   {
  //     title: "Sport",
  //     backgroundSrc: Sport,
  //     color: "brown",
  //     top: "",
  //   },
  // ];
  return (
    <main>
      <div className="homeLogo">
        <img
          src={SOP}
          className="h-auto max-w-full hover:animate-pulse"
          alt="Stichting SOP Rotterdam"
        />
      </div>
      <div className="srbMinistar">
        <img
          src={SRBMinistar}
          className="h-auto max-w-full hover:animate-pulse"
          alt="Srbija"
        />
        <p className="hidden">
          Министарство <br /> просвете, науке и технолошког развоја <br />
          Амбасада Pепублике Cрбије хаг - Kраљевина Xоладија
        </p>
      </div>
      <nav>
        <NavBar />
      </nav>
      <OutletCard />
    </main>
  );
}
export default Home;
