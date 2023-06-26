import { useContext} from "react";
import { GameContext } from "../../../utils/GameContext";
import Victory from "./Victory";
import Defeat from "./Defeat";

const EndCombat = () => {
    const game = useContext(GameContext);
   

    function handleEndCombat(){
        game.setGameMode("worldMap");
        game.setIsExplored(false)
    }

    return ( 
        <div className="endCombat-container">
            Combat Results
            <div>
                {game.isPlayer1Winner && <Victory winner={game.winner} loser={game.loser}/>}
            </div>
            <div>
                {!game.isPlayer1Winner && <Defeat winner={game.winner} loser={game.loser}/>}
            </div>
            <button onClick={handleEndCombat}>Return to map</button>
        </div>
     );
}
 
export default EndCombat;