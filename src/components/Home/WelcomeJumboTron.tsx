import { IJumboTron } from "../../pages/Home";

function WelcomeJumboTron(props: Readonly<IJumboTron>) {
  const { title } = props;
  return (
    <section>
      <div className="jumboWrapper">
        <h1 className="jumboText text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
export default WelcomeJumboTron;
