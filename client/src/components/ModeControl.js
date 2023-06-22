import { useContext } from "react";
import { GameContext } from "../utils/GameContext";
import StartMenu from "./gameModes/StartMenu";
import WorldMap from "./gameModes/WoldMap/WorldMap";
import ViewLocation from "./gameModes/viewLocation/ViewLocation";

const ModeControl = () => {

    const game = useContext(GameContext);


    return (  
        <div>
            {game.gameMode === "startMenu" && <StartMenu/>}
            {game.gameMode === "worldMap" && <WorldMap/>}
            {game.gameMode === "viewLocation" && <ViewLocation/>}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam eius vitae ut optio blanditiis? Illo, sed. Deserunt quasi recusandae rem quas accusantium aperiam tempora similique veniam, officiis optio ratione!
        </div>
    );
}
 
export default ModeControl;