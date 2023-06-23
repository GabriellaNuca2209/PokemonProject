import { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameContext"
import { attack } from "./actions";
import { wait } from "./timer";

export function useCombatScript(scriptInfo) {
    const game = useContext(GameContext);

    const [isScriptRunning, setIsScriptRunning] = useState(false);
    const [turn, setTurn] = useState(0);
    const [p1CurrentHp, setP1CurrentHp] = useState(game.player1.hp);
    const [p2CurrentHp, setP2CurrentHp] = useState(game.player2.hp);
    const [combatLog, setCombatLog] = useState("");

    useEffect(() => {

        const {turn, action} = scriptInfo;
        let attacker = turn === 0 ? game.player1 : game.player2;
        let defender = turn === 0 ? game.player2 : game.player1;

        if (action) {

            switch (action) {
                case "attack": {
                    let damage = attack(attacker, defender);
                    (async () => {
                        setIsScriptRunning(true);
                        setCombatLog(`${attacker.name} is attacking!`);
                        await wait(2000);
                        turn === 0 ? setP2CurrentHp(health => (health - damage > 0 ? health - damage : 0)) 
                                   : setP1CurrentHp(health => (health - damage > 0 ? health - damage : 0)) 
                        await wait(2000);
                        setCombatLog(`It's ${defender.name}'s turn!`);
                        await wait(1000);
                        setTurn(turn === 0 ? 1 : 0);
                        setIsScriptRunning(false);
                    })()
                    break;
                } 
                default: break;
            }

        }



    }, [scriptInfo, game.player1, game.player2])

    return {
        isScriptRunning, turn, p1CurrentHp, p2CurrentHp, combatLog
    }


}