import Character from './Character';
import CharacterNotFound from './CharacterNotFound';

function ListCharacter(props) {
  if (props.character.length === 0) {
    return (
      <CharacterNotFound onClick={props.onClick} character={props.filterName} />
    );
  }

  const characterElements = props.character.map((element) => {
    return (
      <li key={element.id}>
        <Character data={element} />
      </li>
    );
  });
  return (
    <>
      <ul>{characterElements}</ul>
    </>
  );
}
export default ListCharacter;
