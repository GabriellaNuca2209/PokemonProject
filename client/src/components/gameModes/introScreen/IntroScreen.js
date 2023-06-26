import { useContext } from 'react';
import './introScreen.css'
import { GameContext } from '../../../utils/GameContext';
const IntroScreen = () => {

    const game = useContext(GameContext)
    // if(game.gameMode === "introScreen"){
    //     onkeydown = _ => game.setGameMode("startMenu")
    // }
    
    return ( 
        <div className="intro-screen-container">
            <div className="intro-background">
                <div className="intro-msg">
                    <button onClick={()=> game.setGameMode("startMenu")}>start game</button>
                </div>
            </div>
        </div>
     );
}
 
export default IntroScreen;