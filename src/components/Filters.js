import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import PropTypes from 'prop-types';

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleForm}>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecies
          filterSpecies={props.filterSpecies}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
}
export default Filters;

Filters.propTypes = {
  handleFilter: PropTypes.func,
  filterName: PropTypes.array,
  filterSpecies: PropTypes.array,
};
