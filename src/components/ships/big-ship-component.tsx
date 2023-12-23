import axios from "axios";
import { useCallback } from "react";
import { useRequest } from "../../hooks/useRequest";
import { Ship } from "../../../types";
import LinkButton from "../ui/link-button";
import SmallMissionComponent from "./small-mission-component";

interface BigShipProps {
  shipId: string;
}

const BigShipComponent = ({ shipId }: BigShipProps) => {
  const request = useCallback(
    () => axios.get(`${process.env.REACT_APP_BASE_URL}/ships/${shipId}`),
    [shipId]
  );

  const [ship, error, loading] = useRequest<Ship>(request);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  if (!ship) return <div>Not Found</div>;
  return (
    <div className="mt-2 grid grid-cols-2 p-2">
      <div className="w-full h-68 overflow-hidden bg-gray-200 ">
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
