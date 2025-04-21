import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./componente/Body";
import Head from "./componente/head";
import MainContainer from "./componente/Maincontainer";
import WatchPage from "./componente/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
