import { useContext } from "react";
import "./header.css";
import { GameContext } from "../../utils/GameContext";
import HeaderInMenu from "./HeaderInMenu";
import HeaderInGame from "./HeaderInGame";

const Header = () => {

    const game = useContext(GameContext);

    return (  
        <div className="nav">

            {game.gameMode === "startMenu" ? <HeaderInMenu/> : <HeaderInGame/>}
            
            

            

        </div>
    );
}
 
export default Header;


