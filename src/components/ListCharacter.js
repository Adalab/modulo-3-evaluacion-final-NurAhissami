import Character from './Character';

function ListCharacter({character}) {
  const characterElements = character.map((element) => {
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
