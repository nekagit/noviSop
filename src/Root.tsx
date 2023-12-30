import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function Root() {
  return (
    <main>
      <nav>
        <NavBar />
      </nav>
        <Outlet />
    </main>
  );
}
export default Root;
