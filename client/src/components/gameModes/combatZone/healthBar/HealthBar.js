import './healthBar.css';
const HealthBar = ({ maxHp, currentHp }) => {
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