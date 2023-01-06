import React from "react";

const Filter = ({formFilterChange, filter}) => {
    return (
        <label>
        <input
            type="text"
              name="filter"
              value={filter}
              onChange={formFilterChange}
            />  
            </label>
    )
}

export default Filter;