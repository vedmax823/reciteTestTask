import axios from "axios";
import { useCallback } from "react";
import { useRequest } from "../../hooks/useRequest";
import { Dragon } from "../../../types";
import Galerry from "../galerry";
import LinkButton from "../ui/link-button";

interface BigDragonProps {
  dragonId: string;
}

const BigDragonComponent = ({ dragonId }: BigDragonProps) => {
  const request = useCallback(
    () => axios.get(`${process.env.REACT_APP_BASE_URL}/dragons/${dragonId}`),
    [dragonId]
  );

  const [dragon, error, loading] = useRequest<Dragon>(request);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  if (!dragon) return <div>Not Found</div>;
  return (
    <div className="mt-2 grid grid-cols-2 p-2">
      <Galerry images={dragon.flickr_images} name={dragon.name} />
      <div className="p-2">
        <div className="mt-1"><span className="font-semibold mr-2">Name :</span>  <span>{dragon.name}</span></div>
        <div className="mt-2"><span className="font-semibold mr-2">Type :</span> <span>{dragon.type}</span></div>
        <div className="mt-2"><span className="font-semibold mr-2">Description :</span> <span>{dragon.description}</span></div>
        <div className="mt-2"><span className="font-semibold mr-2">First flight :</span> <span>{dragon.first_flight}</span></div>
        <div className="mt-2"><LinkButton link={dragon.wikipedia} text="Wikipedia"/></div>
      </div>
    </div>
  );
};

export default BigDragonComponent;
