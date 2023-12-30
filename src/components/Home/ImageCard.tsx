import { Controller, animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { IImageCard } from "../../pages/Home";

function ImageCard(props: Readonly<IImageCard>) {
  const { src } = props;
  const [isShowing, setIsShowing] = useState(false);
  const animations = new Controller({ opacity: 0 });

  const handleOnEnter = () => {
    animations.start({ opacity: isShowing ? 1 : 0 });
    setIsShowing(!isShowing);
  };

  const divImgSpring = useSpring({
    transform: "scaleX(0.90)",
    config: { duration: 2000 },
    from: {
      transform: "scaleX(0.85)",
    },
  });

  const imgSpring = useSpring({
    border: "1px solid white",
    opacity: "1%",
    marginBottom: "3vh",
    config: { duration: 500 },
    from: {
      opacity: "100%",
      border: "1px solid black",
    },
  });

  return (
    <>
      <animated.div
        style={{ ...divImgSpring }}
        className="borderDiv"
        onMouseEnter={handleOnEnter}
      />
      <animated.img
        className="imageCard"
        src={src}
        alt={src}
        style={{ ...imgSpring }}
      />
    </>
  );
}
export default ImageCard;
