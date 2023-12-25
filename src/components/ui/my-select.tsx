import React, { Fragment } from "react";
import { SelectOptionsType } from "../../../types";

interface MySelectProps {
  title?: string;
  selectedValue?: string | number;
  selectOptions: SelectOptionsType[];
  onChange: (value?: string) => void;
}

const MySelect = ({
  title,
  selectedValue,
  selectOptions,
  onChange,
}: MySelectProps) => {
  const MyOnChange = (value: string) => {
    const newValue = value !== title ? value : undefined;
    onChange(newValue);
  };
  return (
    <Fragment>
      <select
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        value={selectedValue}
        onChange={(e) => MyOnChange(e.target.value)}
      >
        {title ? <option>{title}</option> : null}
        {selectOptions.map((type) => (
          <option value={type.value} key={type.value}>
            {type.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default MySelect;
