
import MySelect from "../ui/my-select";
import { shipsRoles, shipsTypes } from "../../utils/constants";
import { FiltersShipsType } from "../../pages/shipsPage";

interface ShipsFilterProps {
  filterShipType: FiltersShipsType;
  handleChangeShip: (field : string, value?: string) => void;
}

const ShipsFilter = ({
  filterShipType,
  handleChangeShip,
}: ShipsFilterProps) => {
  const handleChangeRole = (value? : string) => {
    handleChangeShip('role', value)
  }
  const handleChangeShipType = (value? : string) => {
    handleChangeShip('ship_type', value)
  }
  return (
    <div className="w-full flex justify-end">
      <div className="w-fit m-2">
        <MySelect
          title="Select ship role"
          selectedValue={filterShipType.role}
          selectOptions={shipsRoles}
          onChange={handleChangeRole}
        />
      </div>
      <div className="w-fit m-2">
        <MySelect
          title="Select ship type"
          selectedValue={filterShipType.ship_type}
          selectOptions={shipsTypes}
          onChange={handleChangeShipType}
        />
      </div>
    </div>
  );
};

export default ShipsFilter;
