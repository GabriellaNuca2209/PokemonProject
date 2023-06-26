import { useContext } from "react";
import { GameContext } from "../../../utils/GameContext";

const EndCombat = () => {
    const game = useContext(GameContext);
    console.log(game.backpack);

    return ( 
        <div className="endCombat-container">
            Combat Ended
            <div className="winner-card">
                Winner is {game.winner.name}
            </div>
            <div className="loser-card">
                Loser is {game.loser.name}
            </div>
        </div>
     );
}
 
export default EndCombat;