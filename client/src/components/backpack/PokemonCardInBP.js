const PokemonCardInBP = ( { pokemon }) => {

    return (  
        <div>
            <img src={pokemon.sprites.front_default} alt="pokemon" />
            <div>{pokemon.name}</div>
        </div>
    );
}
 
export default PokemonCardInBP;