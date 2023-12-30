import { Controller, animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { IImageCard } from "../../pages/Home";

function ImageCard(props: IImageCard) {
  const { src } = props;
  const [isShowing, setIsShowing] = useState(false);
  const animations = new Controller({ opacity: 0 });

  const handleOnEnter = () => {
    animations.start({ opacity: isShowing ? 1 : 0 });
    setIsShowing(!isShowing);
  };

  const imgSpring = useSpring({
    transform: "scaleX(0.90)",
    opacity: "100%",
    config: { duration: 500 },
    from: {
      opacity: "33%",
      transform: "scaleX(0.88)",
    },
  });
  return (
    <animated.div
      className="imagesHover"
      style={{ ...imgSpring }}
      onMouseEnter={handleOnEnter}
    >
      <img className="imageCard box" src={src} alt={src} />
    </animated.div>
  );
}
export default ImageCard;
