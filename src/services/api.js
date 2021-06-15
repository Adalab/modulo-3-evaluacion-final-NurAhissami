const getApiData = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((user) => {
        return {
          id: user.id,
          image: user.image,
          name: user.name,
          species: user.species,
          status: user.status,
        };
      });
      return cleanData;
    });
};

export default getApiData;