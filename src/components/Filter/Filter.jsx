import PropTypes from 'prop-types';
import React from 'react';
import {
  FormTitle,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';

export function Filter({ value, handleChange }) {
  return (
    <>
      <FormTitle>Find contacts by name</FormTitle>
      <FormInput
        name="filter"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
