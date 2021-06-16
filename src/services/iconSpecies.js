const iconHuman = <i className="fas fa-user"></i>;
const iconAlien = <i class="fab fa-reddit-alien"></i>;

const iconSpecies = (species) => {
  return species.toLowerCase() === 'human' ? iconHuman : iconAlien;
};

export default iconSpecies;
