import React from 'react';
import {Link} from 'react-router-dom';

const Character = (props) => {
  return (
    <Link to={`/character/${props.data.id}`}>
      <article>
        <img
          src={props.data.image}
          alt={`Foto de ${props.data.name}`}
          title={`Foto de ${props.data.name}`}
        />
        <h4>{props.data.name}</h4>
        <p>{props.data.species}</p>
      </article>
    </Link>
  );
};

export default Character;
