import { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameContext"
import { attack, heal } from "./actions";
import { wait } from "./timer";
import creature1 from "../assets/sounds/combat/creature1.wav"
import creature2 from "../assets/sounds/combat/creature2.wav"
import creature3 from "../assets/sounds/combat/creature3.wav"
import creature4 from "../assets/sounds/combat/creature4.wav"
import creature5 from "../assets/sounds/combat/creature5.wav"

export function useCombatScript(scriptInfo) {
    const game = useContext(GameContext);

    const [isScriptRunning, setIsScriptRunning] = useState(false);
    const [turn, setTurn] = useState(0);
    const [p1CurrentHp, setP1CurrentHp] = useState(game.player1.hp);
    const [p2CurrentHp, setP2CurrentHp] = useState(game.player2.hp);
    const [combatLog, setCombatLog] = useState("");

    function creatureSound(){
        let soundArr = [creature1, creature2, creature3, creature4, creature5]

        let audio = new Audio(soundArr[Math.floor(Math.random()*soundArr.length)])
        audio.play()
    }

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
                        creatureSound()
                        await wait(1000);
                        // attack sound and animation
                        turn === 0 ? setP2CurrentHp(health => (health - damage > 0 ? health - damage : 0)) 
                        : setP1CurrentHp(health => (health - damage > 0 ? health - damage : 0)) 
                        creatureSound()
                        await wait(1000);
                        // defender sound and animation
                        setCombatLog(`${defender.name} was hit!`);
                        await wait(1000);
                        setCombatLog(`It's ${defender.name}'s turn!`);
                        setTurn(turn === 0 ? 1 : 0);
                        await wait(1000);
                        setIsScriptRunning(false);
                    })()
                    break;
                }
                case "heal": {
                    let regen = heal(attacker);
                    (async () => {
                        setIsScriptRunning(true);
                        setCombatLog(`Looks like ${attacker.name} is healing!!!!`);
                        await wait(2000); 

                        turn === 0 ? setP1CurrentHp(health => (health + regen <= game.player1.hp ? health + regen : health)) 
                                   : setP2CurrentHp(health => (health + regen <= game.player1.hp ? health + regen : health))
                        await wait(2000);
                        setCombatLog(`It's ${defender.name}'s turn!`);
                        await wait(1000);
                        setTurn(turn === 0 ? 1 : 0);
                        setIsScriptRunning(false);
                    })()
                    break;
                }
                case "megaAttack": {
                    let damage = 200;
                    (async () => {
                        setIsScriptRunning(true);
                        setCombatLog(`${attacker.name} is powered up!`);
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
                case "seppuku": {
                    let damage = attack(attacker, defender);
                    (async () => {
                        setIsScriptRunning(true);

                        setCombatLog(`${attacker.name} is attacking!`);
                        creatureSound()
                        await wait(1000);
                        // attack sound and animation
                        turn === 0 ? setP1CurrentHp(0) 
                        : setP1CurrentHp(health => (health - damage > 0 ? health - damage : 0)) 
                        creatureSound()
                        await wait(1000);
                        // defender sound and animation
                        setCombatLog(`${defender.name} was hit!`);
                        await wait(1000);
                        setCombatLog(`It's ${defender.name}'s turn!`);
                        setTurn(turn === 0 ? 1 : 0);
                        await wait(1000);
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