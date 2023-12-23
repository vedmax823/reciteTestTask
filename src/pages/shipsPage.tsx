import React, { Fragment, useState } from "react";
import ShipsList from "../components/ships/ships-list";
import ShipsFilter from "../components/ships/ships-filter";
import Header from "../components/header";

export type FiltersShipsType = {
    role? : string,
    ship_type? : string
}

const ShipsPage = () => {
  const [filtersShips, setFiltersShips] = useState<FiltersShipsType>({role: undefined, ship_type : undefined});
  const handleChangeType = (field : string, value?: string) => {
    setFiltersShips({...filtersShips, [field] : value });
  };
  return (
    <Fragment>
      <Header />
      <ShipsFilter
        filterShipType={filtersShips}
        handleChangeShip={handleChangeType}
      />
      <ShipsList shipsFilters={filtersShips}/>
    </Fragment>
  );
};

export default ShipsPage;
