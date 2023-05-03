import PropTypes from 'prop-types';
import React from 'react';

export function Filter({ value, onChange }) {
  return <input name="filter" type="text" value={value} onChange={onChange} />;
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
