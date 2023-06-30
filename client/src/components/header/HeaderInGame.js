import { useContext } from "react";
import { GameContext } from "../../utils/GameContext";
import ActivePokemonImg from "./ActivePokemonImg";
import image from '../../assets/img/backpack.png';


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
        game.setIsBackpackOpen(current => !current);
        game.buttonSound("backpack");
    }

    return (  
        <div className="header-game">
            <div className="button1 v1" onClick={abandonRun}>
                <span className="label">Abandon Run</span>
                    <span className="icon">
                        <span></span>
                </span>
            </div>

            {/* <button onClick={abandonRun}>Abandon Run</button> */}
            {/* {game.gameMode === "viewLocation" && <button onClick={returnToMap}>Return to Map</button>}
            {game.gameMode === "combatZone" && <button onClick={returnToMap}>Flee Combat</button>} */}
            {game.gameMode === "viewLocation" && <div className="button1 v1" onClick={returnToMap}>
                <span className="label">Return to Map</span>
                    <span className="icon">
                        <span></span>
                </span>
            </div>}
            {game.gameMode === "combatZone" && <div className="button1 v1" onClick={returnToMap}>
                <span className="label">Flee Combat</span>
                    <span className="icon">
                        <span></span>
                </span>
            </div>}

            <div className="score-container">
                <div className="score">Score: {game.score} </div>
                <ActivePokemonImg/>
            </div>

            {game.gameMode === "worldMap" && <div className="backpack-container" onClick={openBackpack}>
                                                    <img className="backpack-img" src={image} alt="backpack" />
                                            </div>}
            {game.gameMode === "viewLocation" && <div className="backpack-container" onClick={openBackpack}>
                                                    <img className="backpack-img" src={image} alt="backpack" />
                                                </div>}
        </div>
    );
}
 
export default HeaderInGame;