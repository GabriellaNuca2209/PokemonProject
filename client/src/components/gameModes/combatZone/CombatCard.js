import HealthBar from "./healthBar/HealthBar";

const CombatCard = ({ pokemon, currentHp, animation }) => {

    const {name, hp, img, attack, defense} = pokemon;

    return (  
        <div className="pokemon-char">
            <div className="name">{name}</div>
            <HealthBar maxHp={hp} currentHp={currentHp}/>
            <img className={animation} src={img} alt="pokemon" />
            {/* <div className="hp">{Math.round(currentHp)}/{hp}</div> */}
        </div>
    );
}
 
export default CombatCard;