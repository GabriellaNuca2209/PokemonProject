import { useContext } from "react";
import CombatCard from "./CombatCard";
import { GameContext } from "../../../utils/GameContext";
import './combat.css';
import CombatControls from "./CombatControls";

const CombatZone = () => {

    const game = useContext(GameContext);

    return (  
        <div className="combatZone-container">
            {/* Combat Buttons */}
            <div className="control-container">
                <CombatControls/>
            </div>
            {/* Combat Cards */}
            <div className="combat-cards-container">
                <div className="player1">
                    <CombatCard pokemon={game.player1}/>
                </div>
                <div className="player2">
                    <CombatCard pokemon={game.player2}/>
                </div>
            </div>

            
        </div>
    );
}
 
export default CombatZone;