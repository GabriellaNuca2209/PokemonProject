import { useContext } from "react";
import "./header.css";
import { GameContext } from "../../utils/GameContext";

const Header = () => {

    const game = useContext(GameContext);

    return (  
        <div className="nav">

            <button onClick={() => game.setGameMode("worldMap")}>Start Game</button>

            

            <button>Arena</button>

        </div>
    );
}
 
export default Header;


