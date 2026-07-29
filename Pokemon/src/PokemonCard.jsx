export const PokemonCard = ({ props }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={props.sprites.other.dream_world.front_default}
          alt={props.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{props.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p >
          {props.types
            .map((arr) => {
              return arr.type.name;
            })
            .join(", ")
            .toUpperCase()}
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height: </span> {props.height}
        </p>
        <p className="pokemon-info">
          <span>Weight: </span> {props.weight}
        </p>
        <p className="pokemon-info">
          <span>Stats: </span> {props.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height: </span> {props.height}
        </p>
        <p className="pokemon-info">
          <span>Weight: </span> {props.weight}
        </p>
        <p className="pokemon-info">
          <span>Abilities: </span>{" "}
          {props.abilities
            .map((obj) => {
              return obj.ability.name;
            })
            .join(", ").toUpperCase()}
        </p>
      </div>
    </li>
  );
};
