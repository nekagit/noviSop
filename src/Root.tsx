import { Outlet } from "react-router-dom";
import SRBMinistar from "../src/assets/heder-mirnije-removebg-preview.png";
import SOP from "../src/assets/wg-removebg.png";
import NavBar from "./components/NavBar/NavBar";

function Root() {
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
        alt="Stichting SOP Rotterdam"
        />
        </div>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </main>
  );
}
export default Root;
