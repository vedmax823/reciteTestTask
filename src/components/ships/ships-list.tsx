import { Ship } from "../../../types";
import NothingFound from "../nothing-found";
import ShipComponent from "./ship-component";

interface ShipsListProps {
  ships: Ship[];
}

const ShipsList = ({ ships }: ShipsListProps) => {
  return (
    <div className="w-full flex justify-center">
      {!ships.length ? (
        <NothingFound />
      ) : (
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-4 p-2 max-w-screen-xl">
          {ships.map((ship) => (
            <ShipComponent key={ship.ship_id} ship={ship} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShipsList;
