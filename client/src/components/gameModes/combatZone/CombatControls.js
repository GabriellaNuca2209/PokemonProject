import { useContext } from "react";
import { GameContext } from "../../../utils/GameContext";
import  dagger  from "./img/dagger.png";
import potion from "./img/potion.png";
import megaAttackImg from "./img/mega-attack.png";
import skull from "./img/skull.png";

const CombatControls = ({ setScriptInfo, turn }) => {

    const game = useContext(GameContext);

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
    function seppuku(){
        setScriptInfo({turn, action: "seppuku"});
    }


    return (  
        <div className="combat-btn">
            <button className="attack-btn" onClick={attack}><img src={dagger} alt="dagger"/></button>
            <button className="heal-btn" onClick={heal}><img src={potion} alt="potion"/></button>
            <button className="mega-attack-btn" onClick={megaAttack}><img src={megaAttackImg} alt="explosion"/></button>
            <button className="skull-btn" onClick={seppuku}><img src={skull} alt="skull"/></button>
        </div>
    );
}
 
export default CombatControls;