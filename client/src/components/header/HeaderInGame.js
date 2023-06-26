import { useContext } from "react";
import { GameContext } from "../../utils/GameContext";
import ActivePokemonImg from "./ActivePokemonImg";


const HeaderInGame = () => {

    const game = useContext(GameContext);

    

    function returnToMap() {
        game.setGameMode("worldMap");
        game.setIsExplored(false);
        game.setIsBackpackOpen(false)
    }

    function abandonRun() {
        game.setGameMode("startMenu");
        game.setIsExplored(false);
        game.setIsBackpackOpen(false)
        game.setPlayer1("")
        game.setPlayer2("")
    }

    function openBackpack() {
        game.setIsBackpackOpen(true);
    }

    return (  
        <div className="header-game">
            <button onClick={abandonRun}>Abandon Run</button>
            {game.gameMode === "viewLocation" && <button onClick={returnToMap}>Return to Map</button>}
            {game.gameMode === "combatZone" && <button onClick={returnToMap}>Flee Combat</button>}
            <div>Score</div>
            <ActivePokemonImg/>
            {game.gameMode === "worldMap" && <button onClick={openBackpack}>Backpack</button>}
            {game.gameMode === "viewLocation" && <button onClick={openBackpack}>Backpack</button>}
        </div>
    );
}
 
export default HeaderInGame;