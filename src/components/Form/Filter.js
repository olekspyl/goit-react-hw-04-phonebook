import React from "react";

const Filter = ({onFilter, filterValue}) => {
    return (
        <label>
        <input
            type="text"
              name="filter"
              value={filterValue}
              onChange={onFilter}
            />  
            </label>
    )
}

export default Filter;