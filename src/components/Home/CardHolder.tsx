import ImageCard from "./ImageCard";
import WelcomeJumboTron from "./WelcomeJumboTron";

export default function CardHolder(props: ICard) {
    return (
      <>
        <WelcomeJumboTron />
        <ImageCard />
      </>
    );
}