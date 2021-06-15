import React, {useState, useEffect} from 'react';
import api from '../services/api';
import ListCharacter from './ListCharacter';
import CharacterDetail from './CharacterDetail';
import FilterCharacter from './FilterCharacter';
import {Route, Switch} from 'react-router-dom';
import '../stylesheets/App.css';

function App() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    if (character.length === 0) {
      api().then((usersData) => {
        setCharacter(usersData);
      });
    }
  }, []);

  const renderCharacterDetail = (routerProps) => {
    const routerChaId = routerProps.match.params.ChaId;

    const characterFound = character.find(
      (element) => element.id === parseInt(routerChaId)
    );

    if (characterFound) {
      return <CharacterDetail characterDetail={characterFound} />;
    } else {
      return <p>No se ha encontrado ningún personaje</p>;
    }
  };

  return (
    <>
      {
        <Switch>
          <Route exact path="/">
            <FilterCharacter />
            <ListCharacter character={character} />;
          </Route>

          <Route path="/character/:ChaId" render={renderCharacterDetail} />
        </Switch>
      }
    </>
  );
}

export default App;
