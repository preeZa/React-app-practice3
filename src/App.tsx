import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/Home";
import RootPage from "./Pages/Root/Root";
import MoviePage from "./Pages/Movie/Movie";
import CharacterPage from "./Pages/Character/Character";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie/:name", element: <MoviePage />,},
      { path: "/character/:name", element: <CharacterPage />,},
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
