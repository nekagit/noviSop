import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";

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
        // {
        //   path: "/school",
        //   element: <School />,
        // },
        // {
        //   path: "/sport",
        //   element: <Sport />,
        // },
        // {
        //   path: "/gallery",
        //   element: <Gallery />,
        // },
        // {
        //   path: "/sport/sportDays",
        //   element: <SportDays />,
        // },
        // {
        //   path: "contact",
        //   element: <Contact />,
        // },
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
