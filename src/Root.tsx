import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function Root() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Root;
