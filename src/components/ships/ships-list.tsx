import axios from "axios";
import { Ship } from "../../../types";
import { useRequest } from "../../hooks/useRequest";
import ShipComponent from "./ship-component";
import { useCallback } from "react";
import { FiltersShipsType } from "../../pages/shipsPage";

interface ShipsListProps {
  shipsFilters?: FiltersShipsType;
}

const ShipsList = ({ shipsFilters }: ShipsListProps) => {
  const request = useCallback(
    () =>
      axios.get(`${process.env.REACT_APP_BASE_URL}/ships`, {
        params: shipsFilters,
      }),
    [shipsFilters]
  );

  const [ships, error, loading] = useRequest<Ship[]>(request);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div className="w-full">
      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 p-2">
        {ships
          ? ships.map((ship) => (
              <ShipComponent key={ship.ship_id} ship={ship} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ShipsList;
