import { useContext } from 'react';
import './introScreen.css'
import { GameContext } from '../../../utils/GameContext';
const IntroScreen = () => {

    const game = useContext(GameContext)

    onkeydown = _ => game.setGameMode("startMenu")
    return ( 
        <div className="intro-screen-container">
            <div className="intro-background">
                <div className="intro-msg">
                    Press any key to start
                </div>
            </div>
        </div>
     );
}
 
export default IntroScreen;