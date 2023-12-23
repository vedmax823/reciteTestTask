import axios from "axios";
import React, { useCallback } from "react";
import { useRequest } from "../../hooks/useRequest";
import { Dragon } from "../../../types";
import DragonCard from "./dragon-card";

const DragonsList = () => {
  const request = useCallback(
    () => axios.get(`${process.env.REACT_APP_BASE_URL}/dragons`),
    []
  );

  const [dragons, error, loading] = useRequest<Dragon[]>(request);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;
  return (
    <div className="w-full">
      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 p-2">
        {dragons &&
          dragons.map((dragon) => (
            <DragonCard key={dragon.id} dragon={dragon} />
          ))}
      </div>
    </div>
  );
};

export default DragonsList;
