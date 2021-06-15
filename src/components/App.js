import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';

import api from '../services/api';
import ls from '../services/local-storage';

import ListCharacter from './ListCharacter';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

import '../stylesheets/App.css';

function App() {
  const [character, setCharacter] = useState(ls.get('character', []));
  const [filterName, setFilterName] = useState(ls.get('filterName', ''));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get('filterSpecies', '')
  );

  useEffect(() => {
    api().then((data) => {
      const orderedData = data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return setCharacter(orderedData);
    });
  }, []);

  useEffect(() => {
    ls.set('character', character);
  }, [character]);

  useEffect(() => {
    ls.set('character', character);
    ls.set('filterName', filterName);
    ls.set('filterSpecies', filterSpecies);
  }, [character, filterName, filterSpecies]);

  const renderCharacterDetail = (routerProps) => {
    const routerChaId = routerProps.match.params.ChaId;

    const characterFound = character.find(
      (element) => element.id === parseInt(routerChaId)
    );

    if (characterFound) {
      return <CharacterDetail user={characterFound} />;
    } else {
      return <p>No se ha encontrado ningún personaje</p>;
    }
  };

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'species') {
      setFilterSpecies(data.value);
    }
  };
  const filteredCharacter = character
    .filter((user) => {
      return user.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((user) => {
      if (filterSpecies === '') {
        return true;
      } else {
        return user.species === filterSpecies;
      }
    });

  const handleReset = () => {
    setFilterName('');
  };

  return (
    <>
      {
        <Switch>
          <Route exact path="/">
            <Filters
              filterName={filterName}
              filterSpecies={filterSpecies}
              handleFilter={handleFilter}
            />
            <ListCharacter
              character={filteredCharacter}
              OnClick={handleReset}
              filterName={filterName}
            />
            ;
          </Route>

          <Route path="/character/:ChaId" render={renderCharacterDetail} />
        </Switch>
      }
    </>
  );
}

export default App;
