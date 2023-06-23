import { useContext } from "react";
import { GameContext } from "../../utils/GameContext";

const ActivePokemonImg = () => {

    const game = useContext(GameContext)

    return (  
        <div>
            <img src={game.player1.img} alt="desgusting mutant" />
        </div>
    );
}
 
export default ActivePokemonImg;