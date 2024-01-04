import { ReactNode } from "react";
import SRBMinistar from "../../src/assets/heder-mirnije-removebg-preview.png";
import SOP from "../../src/assets/wg-removebg.png";
import OutletCard from "../components/Home/OutletCard";
import NavBar from "../components/NavBar/NavBar";

export interface ICard {
  title: string;
  backgroundSrc: string;
  htmlFor: string;
  buttonCards: IButtonCard;
}

export interface IButtonCard {
  title:string;
  contentCard: IContentCard;
}

export interface IContentCard {
  title: string;
  subTitle:string;
  backgroundSrc: string;
  images: IImages;
  form: IForm;
}

export interface IForm {
  selectInputs: ISelectInputs;
  textInputs: ITextInputs;
  buttons: IButton;
}

export interface IJumboTron {
  title: string;
}

export interface IHomeCard {}
function Home() {
  return (
    <main>
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
      <div className="homeLogo">
        <img
          src={SOP}
          className="h-auto max-w-full hover:animate-pulse"
          alt="Stichting SOP Rotterdam"
        />
      </div>
      <OutletCard />
    </main>
  );
}
export default Home;
