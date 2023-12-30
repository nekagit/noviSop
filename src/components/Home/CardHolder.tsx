import { ICard } from "../../pages/Home";
import ImageCard from "./ImageCard";
import WelcomeJumboTron from "./WelcomeJumboTron";

export default function CardHolder(props: Readonly<ICard>) {
  const { backgroundSrc, title, color, top } = props;
  return (
    <div className="cardHolder" style={{ backgroundColor: color, top: top, left: "15%" }}>
      <WelcomeJumboTron title={title} />
      <ImageCard src={backgroundSrc} />
    </div>
  );
}
