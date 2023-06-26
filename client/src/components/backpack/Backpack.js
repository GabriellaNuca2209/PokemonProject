import { useContext } from "react";
import { GameContext } from "../../utils/GameContext";
import PokemonCardInBP from "./PokemonCardInBP";
import './backpack.css';

const Backpack = ( { setIsBackpackOpen }) => {

    const game = useContext(GameContext);

    function choosePokemon(pokemon) {
        game.setPlayer1(pokemon)
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