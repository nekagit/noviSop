import { Controller, animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import SchoolBackground from "../../assets/tesla1.jpg";

function ImageCard() {
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
      <img
        className="imageCard"
        src={SchoolBackground}
        alt="SchoolBackground"
      />
    </animated.div>
  );
}
export default ImageCard;
