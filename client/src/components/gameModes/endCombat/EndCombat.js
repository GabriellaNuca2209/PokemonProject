import { useContext} from "react";
import { GameContext } from "../../../utils/GameContext";
import './endCombat.css';
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
            <div>
                {game.isPlayer1Winner && <Victory winner={game.winner} loser={game.loser} handleEndCombat={handleEndCombat}/>}
            </div>

            <div>
                {!game.isPlayer1Winner && <Defeat winner={game.winner} loser={game.loser} handleEndCombat={handleEndCombat}/>}
            </div>
        </div>
     );
}
 
export default EndCombat;