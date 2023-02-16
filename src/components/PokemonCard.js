import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [spriteSide, setSpriteSide] = useState(true);

  function handlePokeClick() {
    setSpriteSide((spriteSide) => !spriteSide);
  }

  return (
    <Card>
      <div onClick={handlePokeClick}>
        <div className="image">
          <img
            alt="oh no!"
            src={spriteSide ? pokemon.sprites.front : pokemon.sprites.back}
          />
        </div>
        <div className="content">
          <div className="header">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
