import PropTypes from 'prop-types';
import React from 'react';

export function Filter({ value, handleChange }) {
  return (
    <input name="filter" type="text" value={value} onChange={handleChange} />
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
