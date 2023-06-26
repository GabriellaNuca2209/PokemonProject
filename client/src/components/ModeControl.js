import { useContext } from "react";
import { GameContext } from "../utils/GameContext";
import StartMenu from "./gameModes/StartMenu";
import WorldMap from "./gameModes/WoldMap/WorldMap";
import ViewLocation from "./gameModes/viewLocation/ViewLocation";
import Backpack from "./backpack/Backpack";
import CombatZone from "./gameModes/combatZone/CombatZone";
import IntroScreen from "./gameModes/introScreen/IntroScreen";
import EndCombat from "./gameModes/endCombat/EndCombat";

const ModeControl = () => {

    const game = useContext(GameContext);


    return (  
        <div className="main-container">
            {game.gameMode === "introScreen" && <IntroScreen/>}
            {game.gameMode === "startMenu" && <StartMenu/>}
            {game.gameMode === "worldMap" && <WorldMap/>}
            {game.gameMode === "viewLocation" && <ViewLocation/>}
            {game.gameMode === "combatZone" && <CombatZone/>}
            {game.gameMode === "endCombat" && <EndCombat/>}
            {game.isBackpackOpen && <Backpack/>}
        </div>
    );
}
 
export default ModeControl;