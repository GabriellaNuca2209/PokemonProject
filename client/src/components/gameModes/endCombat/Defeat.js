const Defeat = ({winner, loser}) => {
    return ( 
        <div>
        <div>Defeat is only a chance to try again...</div>
        <div>{winner.name} has won!</div>
        <img src={winner.img} alt="winner" />
        <div>{loser.name} fainted!</div>
        <img src={loser.img} alt="loser" />
    </div>
     );
}
 
export default Defeat;