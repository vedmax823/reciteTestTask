import React, { Fragment, useCallback } from "react";
import Header from "../../components/header";
import { useParams } from "react-router-dom";

import BigDragonComponent from "../../components/dragons/big-dragon-component";
import axios from "axios";
import { useRequest } from "../../hooks/useRequest";
import { Dragon } from "../../../types";
import Error from "../errorPage";
import Loading from "../../components/loading";

const OneDragonPage = () => {
  const { dragonId } = useParams();
  const request = useCallback(
    () => axios.get(`${process.env.REACT_APP_BASE_URL}/dragons/${dragonId}`),
    [dragonId]
  );

  const [dragon, error, loading] = useRequest<Dragon>(request);

  if (loading) return <div>Loading...</div>;

  if (error) return <Error status={404} text="Dragon not found!" />;

  return (
    <Fragment>
      <Header />
      {loading ? <Loading /> : dragon && <BigDragonComponent dragon={dragon} />}
    </Fragment>
  );
};

export default OneDragonPage;
