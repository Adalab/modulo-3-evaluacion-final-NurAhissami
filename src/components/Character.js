import React from 'react';
import {Link} from 'react-router-dom';

const Character = (props) => {
  return (
    <Link to={`/character/${props.data.id}`}>
      <article className="card">
        <img
          className="card__img"
          src={props.data.image}
          alt={`Foto de ${props.data.name}`}
          title={`Foto de ${props.data.name}`}
        />
        <h4 className="card__title">{props.data.name}</h4>
        <p>{props.data.species}</p>
        {/* <p>{props.data.status}</p> */}
      </article>
    </Link>
  );
};

export default Character;
