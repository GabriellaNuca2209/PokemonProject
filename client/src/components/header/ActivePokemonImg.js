import { useContext } from "react";
import { GameContext } from "../../utils/GameContext";
import image from "../../assets/img/questionMark.png"

const ActivePokemonImg = () => {

    const game = useContext(GameContext)

    return (  
        <div>
            {game.player1 === "" ? <img className="avatar" src={image} alt="desgusting mutant" />
                                 : <img className="avatar" src={game.player1.img} alt="desgusting mutant" />}
        </div>
    );
}
 
export default ActivePokemonImg;