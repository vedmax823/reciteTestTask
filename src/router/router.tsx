import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage";
import ShipsPage from "../pages/shipsPage";
import { DRAGONS_ROUTE, DRAGON_ONE_ROUTE, MAIN_ROUTE, SHIPS_ROUTE, SHIP_ONE_ROUTE } from "../utils/constants";
import DragonsPage from "../pages/dragonsPage";
import OneDragonPage from "../pages/oneDragonPage";
import OneShipPage from "../pages/oneShipPage";
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
]);

export default router;