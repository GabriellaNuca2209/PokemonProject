const PokemonCardInBP = ( { pokemon }) => {

    return (  
        <div className="pokemon-container">
            <img src={pokemon.img} alt="pokemon" />
            <div className="pokemon-name">{pokemon.name}</div>
        </div>
    );
}

export default PokemonCardInBP;