import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/school",
          element: <AboutUs />,
        },
        {
          path: "/sport",
          element: <Course />,
        },
        {
          path: "/sport/gallery",
          element: <Course />,
        },
        {
          path: "/sport/news",
          element: <Course />,
        },
        {
          path: "/sport/sportDays",
          element: <Course />,
        },
        {
          path: "/school/gallery",
          element: <Course />,
        },
        {
          path: "/school/news",
          element: <Course />,
        },
        {
          path: "/school/course",
          element: <Course />,
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
