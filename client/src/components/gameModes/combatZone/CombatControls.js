const CombatControls = ({ setScriptInfo, turn }) => {

    function attack () {
        setScriptInfo({turn, action: "attack"})
    }

    return (  
        <div className="combat-btn">
            <button onClick={attack}>Attack</button>
            <button>Heal</button>
        </div>
    );
}
 
export default CombatControls;