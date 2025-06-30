import ErrorPage from "./pages/ErrorPage";
import Car from "./pages/Car";
import Home from "./pages/Home";
import Soundboard from "./pages/Soundboard"

const routes = [
  { path: "/", element: <Home />,  errorElement: <ErrorPage /> },
  { path: "/car", element: <Car />, errorElement: <ErrorPage />},
  { path: "/soundboard", element: <Soundboard />, errorElement: <ErrorPage />}
];

export default routes;
