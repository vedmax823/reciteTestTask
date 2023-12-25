import { Dragon } from "../../../types";
import NothingFound from "../nothing-found";
import DragonCard from "./dragon-card";

interface DragonsListProps {
  dragons: Dragon[];
}

const DragonsList = ({ dragons }: DragonsListProps) => {
  return (
    <div className="w-full flex justify-center">
      {!dragons.length ? (
        <NothingFound />
      ) : (
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-4 p-2 max-w-screen-xl">
          {dragons.map((dragon) => (
            <DragonCard key={dragon.id} dragon={dragon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DragonsList;
