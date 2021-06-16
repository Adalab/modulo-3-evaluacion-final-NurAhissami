import PropTypes from 'prop-types';

function CharacterNotFound(props) {
  return (
    <>
      <p>no hay ningun personaje que coincida con {props.character}</p>
    </>
  );
}
export default CharacterNotFound;

CharacterNotFound.propTypes = {
  character: PropTypes.array,
};
