import { Fragment } from "react";

const NothingFound = () => {
  return (
    <Fragment>
      <div className="w-full h-96 flex justify-center items-center flex-col">
        <div className="font-medium text-2xl">Nothing found</div>
      </div>
    </Fragment>
  );
};

export default NothingFound;
