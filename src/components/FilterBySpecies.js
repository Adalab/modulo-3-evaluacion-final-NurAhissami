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
      <select
        className="form__inputSpecies"
        name="species"
        id="species"
        value={props.filterSpecies}
        onChange={handleChange}
      >
        <option className="form__inputSpecies--option" value="">
          Todos
        </option>
        <option className="form__inputSpecies--option" value="Human">
          Humano
        </option>
        <option className="form__inputSpecies--option" value="Alien">
          Alien
        </option>
      </select>
    </>
  );
};

export default FilterBySpecies;

FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func,
  filterSpecies: PropTypes.array,
};
