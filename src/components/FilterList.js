import React, { useContext } from "react";
import MainContext from "../context/context";
import { Input } from "../styledComponents/styledComponents";

const FilterList = () => {
  const value = useContext(MainContext);
  const { setFilterInputSearch } = value;

  return (
    <Input
      type="text"
      placeholder="type first or last name"
      onChange={setFilterInputSearch}
    />
  );
};

export default FilterList;
