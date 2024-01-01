import { Outlet } from "react-router-dom";

export default function OutletCard () {
     
    return (
      <section className="outletCard">
        <Outlet />
      </section>
    );
}