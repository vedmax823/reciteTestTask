
import MySelect from "../ui/my-select";
import { shipsRoles, shipsTypes } from "../../utils/constants";
import { FiltersShipsType } from "../../../types";


interface ShipsFilterProps {
  filterShip: FiltersShipsType;
  handleChangeShip: (field : string, value?: string) => void;
}

const ShipsFilter = ({
  filterShip,
  handleChangeShip,
}: ShipsFilterProps) => {
  const handleChangeRole = (value? : string) => {
    handleChangeShip('role', value)
  }
  const handleChangeShipType = (value? : string) => {
    handleChangeShip('ship_type', value)
  }
  return (
    <div className="flex justify-end max-w-screen-xl">
      <div className="w-fit m-2">
        <MySelect
          title="Select ship role"
          selectedValue={filterShip.role}
          selectOptions={shipsRoles}
          onChange={handleChangeRole}
        />
      </div>
      <div className="w-fit m-2">
        <MySelect
          title="Select ship type"
          selectedValue={filterShip.ship_type}
          selectOptions={shipsTypes}
          onChange={handleChangeShipType}
        />
      </div>
    </div>
  );
};

export default ShipsFilter;
