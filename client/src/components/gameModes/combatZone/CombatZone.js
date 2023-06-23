import { useContext, useEffect, useState } from "react";
import CombatCard from "./CombatCard";
import { GameContext } from "../../../utils/GameContext";
import './combat.css';
import CombatControls from "./CombatControls";
import { useCombatScript } from "../../../utils/useCombatScript";
import { useAiAction } from "../../../utils/useAiAction";

const CombatZone = () => {

    const game = useContext(GameContext);

    const [scriptInfo, setScriptInfo] = useState({});

    const { isScriptRunning, turn, p1CurrentHp, p2CurrentHp, combatLog } = useCombatScript(scriptInfo);

    const aiAction = useAiAction(turn);

    useEffect(() => {
        if (turn === 1 && !isScriptRunning) {
            setScriptInfo({turn, action: aiAction});
        }
    }, [turn, isScriptRunning, aiAction])

    return (  
        <div className="combatZone-container">
            {/* Combat Buttons */}
            <div className="control-container">
                <CombatControls setScriptInfo={setScriptInfo} turn={turn}/>
            </div>
            <div>{combatLog}</div> 
            {/* Combat Cards */}
            <div className="combat-cards-container">
                <div className="player1">
                    <CombatCard pokemon={game.player1} currentHp={p1CurrentHp}/>
                </div>
                <div className="player2">
                    <CombatCard pokemon={game.player2} currentHp={p2CurrentHp}/>
                </div>
            </div>

            
        </div>
    );
}
 
export default CombatZone;