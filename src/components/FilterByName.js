import React from 'react';
import PropTypes from 'prop-types';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <>
      <label htmlFor="name"></label>
      <input
        className="form__inputText"
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
        placeholder="Busca tu personaje"
      />
    </>
  );
};

export default FilterByName;

FilterByName.propTypes = {
  handleFilter: PropTypes.func,
  filterName: PropTypes.array,
};
