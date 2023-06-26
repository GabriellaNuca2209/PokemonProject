import { useContext, useState } from "react";
import { GameContext } from "../../../utils/GameContext";
import { useCombatScript } from "../../../utils/useCombatScript";
import Victory from "./Victory";
import Defeat from "./Defeat";

const EndCombat = () => {
    const game = useContext(GameContext);
    const [scriptInfo, setScriptInfo] = useState({});
    const { isScriptRunning, turn, p1CurrentHp, p2CurrentHp, combatLog } = useCombatScript(scriptInfo);

    function handleEndCombat(){
        game.setGameMode("worldMap");
        game.setIsExplored(false)
    }

    return ( 
        <div className="endCombat-container">
            Combat Results
            <div>
                {game.winner.name === game.player1.name && <Victory winner={game.winner} loser={game.loser}/>}
            </div>
            <div>
                {game.winner.name === game.player2.name && <Defeat winner={game.winner} loser={game.loser}/>}
            </div>
            <button onClick={handleEndCombat}>Return to map</button>
        </div>
     );
}
 
export default EndCombat;