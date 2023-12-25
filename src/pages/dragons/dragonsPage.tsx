import { Fragment, useCallback, useState } from "react";
import Header from "../../components/header";
import DragonsList from "../../components/dragons/dragons-list";
import Pagination from "../../components/pagination";
import { dragonsOffset, limits } from "../../utils/constants";
import { Dragon, FitersPageLimit } from "../../../types";
import axios from "axios";
import { useRequest } from "../../hooks/useRequest";
import Loading from "../../components/loading";
import Error from "../errorPage";

const DragonsPage = () => {
  const [dragonsFilters, setDragonsFilters] = useState<FitersPageLimit>({
    limit: 8,
    offset: 0,
  });
  const handleChange = (field: string, value?: string | number) => {
    setDragonsFilters({ ...dragonsFilters, [field]: value });
  };

  const request = useCallback(
    () =>
      axios.get(`${process.env.REACT_APP_BASE_URL}/dragons`, {
        params: dragonsFilters,
      }),
    [dragonsFilters]
  );
  const [dragons, error, loading] = useRequest<Dragon[]>(request);

  if (error) return <Error />;

  return (
    <Fragment>
      <Header />
      {loading ? <Loading/> : dragons && <DragonsList dragons={dragons}/>}
      <Pagination
        offset={dragonsFilters.offset}
        limit={dragonsFilters.limit}
        offsets={dragonsOffset}
        limits={limits}
        handleChange={handleChange}
      />
    </Fragment>
  );
};

export default DragonsPage;
