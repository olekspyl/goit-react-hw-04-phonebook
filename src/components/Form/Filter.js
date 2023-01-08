import React from "react";
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  formFilterChange: PropTypes.func.isRequired, 
  filter: PropTypes.string.isRequired,
}

export default Filter;