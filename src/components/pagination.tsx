import { SelectOptionsType } from "../../types";
import MySelect from "./ui/my-select";

interface PaginationProps {
    offset : number,
    limit: number,
    offsets : SelectOptionsType[],
    limits : SelectOptionsType[]
    handleChange: (field : string, value?: string | number) => void;
}

const Pagination = (
    {
        offset,
        limit,
        offsets,
        limits,
        handleChange
    } : PaginationProps
) => {

    const handlleChangeLimit = (value? : string) => {
        handleChange('limit', Number(value))
    }
    const handlleChangePage = (value? : string) => {
        handleChange('offset', Number(value))
    }
    return (
    <div className="w-full flex justify-center ">
      <div className="m-2 flex items-center">
        <div className="flex whitespace-nowrap mr-2">Skip from start : </div>
        <MySelect
          selectedValue={offset}
          selectOptions={offsets}
          onChange={handlleChangePage}
        />
      </div>
      <div className="m-2 flex items-center">
        <div className="flex whitespace-nowrap mr-2">Items per page : </div>
        <MySelect
          selectedValue={limit}
          selectOptions={limits}
          onChange={handlleChangeLimit}
        />
      </div>
    </div>
    );
};

export default Pagination;