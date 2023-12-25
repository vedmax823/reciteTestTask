import React from "react";
import { Ship } from "../../../types";
import { Link } from "react-router-dom";
import { SHIPS_ROUTE } from "../../utils/constantsRouts";


interface ShipProps {
  ship: Ship;
}

const ShipComponent = ({ ship }: ShipProps) => {
  return (
    <Link to={`${SHIPS_ROUTE}/${ship.ship_id}`}>
      <div className="w-90 h-fit  border-2 border-orange-400 rounded-xl overflow-hidden">
        <div className="w-full h-48 overflow-hidden  group-hover:opacity-75 ">
          <img
            src={ship.image}
            alt={ship.ship_name}
            className="w-full h-full object-fill"
          />
        </div>
        <div className="mt-4 p-1">
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-900">
              Name : {ship.ship_name}
            </h3>
            <p className="text-sm font-medium text-gray-900">{ship.home_port}</p>
            
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">type : {ship.ship_type}</p>
            <p className="text-sm font-medium text-gray-500">roles : {ship.roles.join(', ')}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShipComponent;
