import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./componente/Body";
import Head from "./componente/head";
import MainContainer from "./componente/Maincontainer";
import WatchPage from "./componente/WatchPage";
import Demo from "./componente/Demo";
import Demo2 from "./componente/Demo2";
import WebDev from "./componente/WebDev";

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
      {
        path: "demo",
        element: <><Demo /><Demo2/></>,
      },
      {
        path:"WebDev",
        element: <WebDev />,
      }
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
