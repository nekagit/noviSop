import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import News from "./pages/News";
import School from "./pages/School";
import Sport from "./pages/Sport";
import SportDays from "./pages/SportDays";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/school",
          element: <School />,
        },
        {
          path: "/sport",
          element: <Sport />,
        },
        {
          path: "/sport/gallery",
          element: <Gallery />,
        },
        {
          path: "/sport/news",
          element: <News />,
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
