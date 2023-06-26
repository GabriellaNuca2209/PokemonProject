import { useContext } from "react";
import { GameContext } from "../../../utils/GameContext";

const CombatControls = ({ setScriptInfo, turn }) => {

    const game = useContext(GameContext)

    function attack () {
        setScriptInfo({turn, action: "attack"});
        // game.setIsActionTaken(true)
    }

    function heal () {
        setScriptInfo({turn, action: "heal"});
    }

    function megaAttack () {
        setScriptInfo({turn, action: "megaAttack"});
    }

    return (  
        <div className="combat-btn">
            <button onClick={attack}>Attack</button>
            <button onClick={heal}>Heal</button>
            <button onClick={megaAttack}>Mega Attack</button>
        </div>
    );
}
 
export default CombatControls;