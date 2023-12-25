import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage";
import ShipsPage from "../pages/ships/shipsPage";
import { DRAGONS_ROUTE, DRAGON_ONE_ROUTE, ERROR_ROUTE, MAIN_ROUTE, SHIPS_ROUTE, SHIP_ONE_ROUTE } from "../utils/constants";
import DragonsPage from "../pages/dragons/dragonsPage";
import OneDragonPage from "../pages/dragons/oneDragonPage";
import OneShipPage from "../pages/ships/oneShipPage";
import Error from "../pages/errorPage";
const router = createBrowserRouter([
    {
      path: MAIN_ROUTE,
      element: <MainPage />,
    },
    {
      path: SHIPS_ROUTE,
      element: <ShipsPage />,
    },
    {
      path: DRAGONS_ROUTE,
      element: <DragonsPage />,
    },
    {
      path: DRAGON_ONE_ROUTE,
      element: <OneDragonPage />,
    },
    {
      path: SHIP_ONE_ROUTE,
      element: <OneShipPage />,
    },
    {
      path: ERROR_ROUTE,
      element: <Error status={404} text="Page not found"/>,
    },
]);

export default router;