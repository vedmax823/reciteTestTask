import { Fragment, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import BigShipComponent from "../../components/ships/big-ship-component";
import axios from "axios";
import { useRequest } from "../../hooks/useRequest";
import { Ship } from "../../../types";
import Error from "../errorPage";
import Loading from "../../components/loading";

const OneShipPage = () => {
  const { shipId } = useParams();
  const request = useCallback(
    () => axios.get(`${process.env.REACT_APP_BASE_URL}/ships/${shipId}`),
    [shipId]
  );

  const [ship, error, loading] = useRequest<Ship>(request);

  if (error) return <Error status={404} text="Ship not found!" />;

  return (
    <Fragment>
      <Header />
      {loading ? <Loading /> : ship && <BigShipComponent ship={ship} />}
    </Fragment>
  );
};

export default OneShipPage;
