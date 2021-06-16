import React from 'react';
import PropTypes from 'prop-types';

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'species',
    });
  };
  return (
    <>
      <label htmlFor="species">Especies:</label>

      <select
        name="species"
        id="species"
        value={props.filterSpecies}
        onChange={handleChange}
      >
        <option value="">Todos</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecies;

FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func,
  filterSpecies: PropTypes.array,
};
