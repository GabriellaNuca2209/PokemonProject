import { useContext, useEffect, useState } from "react";
import CombatCard from "./CombatCard";
import { GameContext } from "../../../utils/GameContext";
import './combat.css';
import CombatControls from "./CombatControls";
import { useCombatScript } from "../../../utils/useCombatScript";
import { useAiAction } from "../../../utils/useAiAction";
import { wait } from "../../../utils/timer";

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

    useEffect(()=> {


        if(p1CurrentHp <= 0 || p2CurrentHp <= 0){
            (async ()=> {
                await wait(2000);
                if(p1CurrentHp <= 0 ){
                    game.setLoser(game.player1)
                    game.setWinner(game.player2)
                } else if (p2CurrentHp <= 0) {
                    game.setLoser(game.player2)
                    game.setWinner(game.player1)  
                    game.setIsPlayer1Winner(true);
                    game.setScore(game.score + game.player2.hp * 10)
                }
                game.setGameMode("endCombat")
            })()
        }

    }, [game, p1CurrentHp, p2CurrentHp])

    return (  
        <div className="combatZone-container">
            {/* Combat Buttons */}

            <div className="combat-log-container">
                <div className="combat-log">{combatLog || `${game.player1.name} starts!`}</div>
            </div>
            {/* Combat Cards */}
            <div className="combat-cards-container">
                <div className="player1">
                    <div>
                        <CombatCard pokemon={game.player1} currentHp={p1CurrentHp} animation={game.player1Animation}/>
                    </div>
                    
                </div>
                <div className="player2">
                    <div>                    
                        <CombatCard pokemon={game.player2} currentHp={p2CurrentHp} animation={game.player2Animation}/>
                    </div>
                </div>
            </div>
            <div className="control-container">
                {<CombatControls setScriptInfo={setScriptInfo} turn={turn}/>}
            </div>
        </div>
    );
}
 
export default CombatZone;