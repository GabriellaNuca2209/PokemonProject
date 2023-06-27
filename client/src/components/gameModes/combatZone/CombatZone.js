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

    // function checkBackpack(backpack, pokemon){
    //     let isIn = true
    //     backpack.forEach(creature => {
    //         if(creature.name === pokemon.name){
    //             isIn = true;
    //         }
    //         isIn = false;
    //     })
    //     return isIn;
    // }
    // const isIn = game.backpack.some(poke => {
    //     if(poke.name === game.player2.name){
    //         console.log(poke.name);
    //         console.log(game.player2.name);
    //         return false
    //     }
    //     return true
    // })

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

            <div>{combatLog || `${game.player1.name}, has the start`}</div>
            {/* Combat Cards */}
            <div className="combat-cards-container">
                <div className="player1">
                    <div className={game.player1Animation}>
                        <CombatCard pokemon={game.player1} currentHp={p1CurrentHp}/>
                    </div>
                    
                </div>
                <div className="player2">                    
                    <CombatCard pokemon={game.player2} currentHp={p2CurrentHp}/>
                </div>
            </div>
            <div className="control-container">
                {<CombatControls setScriptInfo={setScriptInfo} turn={turn}/>}
            </div>
        </div>
    );
}
 
export default CombatZone;