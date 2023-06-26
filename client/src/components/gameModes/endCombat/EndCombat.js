import { useContext } from "react";
import { GameContext } from "../../../utils/GameContext";

const EndCombat = () => {
    const game = useContext(GameContext);

    function handleEndCombat(){
        game.setGameMode("worldMap");
        game.setIsExplored(false)
    }

    return ( 
        <div className="endCombat-container">
            Combat Ended
            <div className="winner-card">
                Winner is {game.winner.name}
            </div>
            <div className="loser-card">
                Loser is {game.loser.name}
            </div>
            <button onClick={handleEndCombat}>Return to map</button>
        </div>
     );
}
 
export default EndCombat;