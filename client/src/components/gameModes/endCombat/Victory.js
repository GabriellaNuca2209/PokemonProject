const Victory = ({winner, loser}) => {
    return ( 
        <div>
            <div>Glorious Victory!!!</div>
            <div>{winner.name} has won!</div>
            <img src={winner.img} alt="winner" />
            <div>{loser.name} fainted!</div>
            <img src={loser.img} alt="loser" />
        </div>
     );
}
 
export default Victory;