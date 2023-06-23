const CombatCard = ({ pokemon }) => {

    const {name, hp, img, attack, defense} = pokemon;

    return (  
        <div className="pokemon-char">
            <div className="name">{name}</div>
            <img src={img} alt="pokemon" />
            <div className="hp">{hp}</div>
        </div>
    );
}
 
export default CombatCard;