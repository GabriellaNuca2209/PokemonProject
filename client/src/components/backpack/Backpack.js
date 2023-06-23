import { useContext } from "react";
import { GameContext } from "../../utils/GameContext";
import PokemonCardInBP from "./PokemonCardInBP";
import './backpack.css';

const Backpack = ( { setIsBackpackOpen }) => {

    const game = useContext(GameContext);

    function choosePokemon(pokemon) {
        game.setPlayer1({
            name: pokemon.name,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            img: pokemon.sprites.front_default
        })
    }

    return (  
        <div className="bp">

            <div className="bp-container">
                <button onClick={()=> game.setIsBackpackOpen(false)}>Close</button>

            {game.backpack.map((pokemon, index) => (
                    <div className="pokemon-card" key={index} onClick={() => choosePokemon(pokemon)}>
                        <PokemonCardInBP pokemon={pokemon}/>
                    </div>
            ))}
            </div>
        </div>
    );
}
 
export default Backpack;