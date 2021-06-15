import {Link} from 'react-router-dom';

function CharacterNotFound(props) {
  return (
    <>
      <Link to="/">
        Volver
        <button onClick={props.onClick}>Volver</button>
      </Link>
      <p>NO HAY NADAAAAAAAA</p>
    </>
  );
}
export default CharacterNotFound;
