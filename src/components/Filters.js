import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import Reset from './Reset';

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleForm} className="form">
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecies
          filterSpecies={props.filterSpecies}
          handleFilter={props.handleFilter}
        />
        <Reset handleReset={props.handleReset} />
      </form>
    </section>
  );
}
export default Filters;
