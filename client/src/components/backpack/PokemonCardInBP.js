const PokemonCardInBP = ( { pokemon }) => {

    return (  
        <div>
            <img src={pokemon.img} alt="pokemon" />
            <div>{pokemon.name}</div>
        </div>
    );
}

export default PokemonCardInBP;