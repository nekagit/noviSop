import { Disclosure } from "@headlessui/react";
import { animated } from "@react-spring/web";
import { useState } from "react";
import NavBarContent from "./NavBarContent";
import SocialMediaContent from "./SocialMediaContent";

const navigation = [
  { name: "Willkommen", href: "/", current: false, isNav: true },
  { name: "AboutUs", href: "/aboutUs", current: false, isNav: true },
  { name: "Kurse", href: "/course", current: false, isNav: true },
  { name: "Kontakt", href: "/contact", current: false, isNav: true },
  { name: "E-Mail", href: "/email", current: false, isNav: false },
  { name: "Instagram", href: "/social", current: false, isNav: false },
  { name: "WhatsApp", href: "/social", current: false, isNav: false },
];

function NavBar() {
  const [visible, setVisible] = useState(false);
  const [nav, setNav] = useState(navigation);

  function handleActive(name: string) {
    console.log(nav);
    setNav((prevNav) =>
      prevNav.map((item) => ({
        ...item,
        current: item.name === name,
      }))
    );
  }
  return (
    <Disclosure as="nav">
      {() => (
        <animated.div
          style={{
            color: !visible ? "white" : "rgb(68,68,69)",
            background: !visible ? "rgb(60,60,60)" : "white",
            transition: "3s background",
          }}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="flex-row">
            {navigation.map((item) => (
              <>
                {item.isNav ? (
                  <NavBarContent
                    key={item.name}
                    item={item}
                    handleActive={handleActive}
                  />
                ) : (
                  <SocialMediaContent key={item.name} item={item} />
                )}
                <br />
              </>
            ))}
          </div>
        </animated.div>
      )}
    </Disclosure>
  );
}
export default NavBar;
