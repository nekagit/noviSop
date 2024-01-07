import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import School from "./pages/School/School";
import Sport from "./pages/Sport";
import SportDays from "./pages/SportDays";
import News from "./pages/index/Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/index",
          element: <News />,
        },
        {
          path: "/school",
          element: <School />,
        },
        {
          path: "/sport",
          element: <Sport />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/sport/sportDays",
          element: <SportDays />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
