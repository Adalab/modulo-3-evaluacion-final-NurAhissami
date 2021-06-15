import {Link} from 'react-router-dom';

function CharacterNotFound(props) {
  return (
    <>
      <p>no hay ningun personaje que coincida con {props.character}</p>
    </>
  );
}
export default CharacterNotFound;
