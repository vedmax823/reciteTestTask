import { Ship } from "../../../types";
import LinkButton from "../ui/link-button";
import SmallMissionComponent from "./small-mission-component";

interface BigShipProps {
  ship: Ship;
}

const BigShipComponent = ({ ship }: BigShipProps) => {

  return (
    <div className="mt-2 grid grid-cols-2 p-2">
      <div className="w-full h-68 overflow-hidden  ">
        <img src={ship.image} alt={ship.ship_name} className="w-full object-fill" />
      </div>
      <div className="p-2">
        <div className="mt-1">
          <span className="font-semibold mr-2">Name :</span>{" "}
          <span>{ship.ship_name}</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold mr-2">Type :</span>{" "}
          <span>{ship.ship_type}</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold mr-2">Home Port :</span>{" "}
          <span>{ship.home_port}</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold mr-2">Year Buit :</span>{" "}
          <span>{ship.year_built}</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold mr-2">Roles :</span>{" "}
          <span>{ship.roles.join(', ')}</span>
        </div>
        <div className="mt-2"><LinkButton link={ship.url} text="Link"/></div>
        <div className="mt-2">
            <div className="font-semibold">Missions : </div>
            <div>
                <SmallMissionComponent missions={ship.missions} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BigShipComponent;
