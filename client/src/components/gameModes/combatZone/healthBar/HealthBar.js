import { useContext } from 'react';
import './healthBar.css';
import { GameContext } from '../../../../utils/GameContext';
const HealthBar = ({ maxHp, currentHp }) => {

    // "hp-current"

    const game = useContext(GameContext);
    return (  
        <div className="hp-container">
            <div className="hp-max">
            
                {currentHp > 0 && <div className="hp-current" style={{width: `${(currentHp / maxHp) * 100}%`}}>
                    {Math.round(currentHp)}
                </div>}
                
            </div>
        </div>
    );
}
 
export default HealthBar;