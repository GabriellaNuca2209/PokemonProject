import { useContext } from "react";
import { GameContext } from "../../utils/GameContext";
import PokemonCardInBP from "./PokemonCardInBP";
import './backpack.css';

const Backpack = ( { setIsBackpackOpen }) => {

    const game = useContext(GameContext);

    function choosePokemon(pokemon) {
        game.setPlayer1(pokemon)
        game.buttonSound("selectPokemon")
    }

    function handleClose(){
        game.setIsBackpackOpen(false)
        game.buttonSound("backpack")
    }

    return (  
        <div className="bp">

            <div className="bp-container">
                <div className="close-container">
                    <button onClick={handleClose}><i class="fa-solid fa-xmark"></i></button>
                </div>

                <div>
                    {game.backpack.map((pokemon, index) => (
                            <div className="pokemon-card" key={index} onClick={() => choosePokemon(pokemon)}>
                                <PokemonCardInBP pokemon={pokemon}/>
                            </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
 
export default Backpack;