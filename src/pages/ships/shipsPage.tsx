import { Fragment, useCallback, useState } from "react";
import axios from "axios";
import ShipsList from "../../components/ships/ships-list";
import ShipsFilter from "../../components/ships/ships-filter";
import Header from "../../components/header";
import Pagination from "../../components/pagination";
import Error from "../errorPage";
import { limits, offsets } from "../../utils/constants";
import { FiltersShipsType, Ship } from "../../../types";
import { useRequest } from "../../hooks/useRequest";
import Loading from "../../components/loading";

const ShipsPage = () => {
  const [shipsFiters, setShipsFilters] = useState<FiltersShipsType>({
    role: undefined,
    ship_type: undefined,
    limit: 8,
    offset: 0,
  });

  const handleChange = (field: string, value?: string | number) => {
    setShipsFilters({ ...shipsFiters, [field]: value });
  };

  const request = useCallback(
    () =>
      axios.get(`${process.env.REACT_APP_BASE_URL}/ships`, {
        params: shipsFiters,
      }),
    [shipsFiters]
  );

  const [ships, error, loading] = useRequest<Ship[]>(request);

  if (error) return <Error />;
  return (
    <Fragment>
      <Header />
      <ShipsFilter filterShip={shipsFiters} handleChangeShip={handleChange} />
      {loading ? <Loading /> : ships && <ShipsList ships={ships} />}
      <Pagination
        offset={shipsFiters.offset}
        limit={shipsFiters.limit}
        offsets={offsets}
        limits={limits}
        handleChange={handleChange}
      />
    </Fragment>
  );
};

export default ShipsPage;
