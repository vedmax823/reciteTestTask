
import { Dragon } from "../../../types";
import Galerry from "../galerry";
import LinkButton from "../ui/link-button";

interface BigDragonProps {
  dragon: Dragon;
}

const BigDragonComponent = ({ dragon }: BigDragonProps) => {

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
