import { animated, useSpring } from "@react-spring/web";
import SchoolBackground from "../assets/school0.jpg";

function Home() {
  // const springStyles = useSpring(
  //   SpringLib({ visible: true }).containerAnimation.opacity
  // );
  const imgSpring = useSpring({
    transform: "scaleX(0.90)",
    padding: "1vh",
    opacity: "100%",
    config: { duration: 500 },
    from: {
      opacity: "33%",
      padding: "0vh",
      transform: "scaleX(0.88)",
    },
  });

  return (
    <>
      <animated.div className="imagesHover" style={{ ...imgSpring }}>
        <img
          style={{
            width: "fit-content",
            height: "88vh",
            margin: "auto",
            objectFit: "cover",
            transformOrigin: "top",
          }}
          src={SchoolBackground}
          alt="SchoolBackground"
        />
      </animated.div>
      {/* 
      <animated.div className="imagesHover" style={{ ...imgSpring }}>
        <img
          style={{
            height: "50vh",
            width: "auto",
            margin: "auto",
            objectFit: "contain",
            transformOrigin: "bottom",
          }}
          src={SportBackground}
          alt="SportBackground"
        />
      </animated.div> */}
    </>
  );
}
export default Home;
