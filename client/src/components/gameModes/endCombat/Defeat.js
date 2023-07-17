import mapImg from '../../../assets/img/endCombat/map.png';
import dizzy from '../../../assets/img/endCombat/dizzy.gif';


const Defeat = ({winner, loser, handleEndCombat}) => {
    return ( 

        <div className="main-defeat-container">
    
            <div className="info-container">
                <div className="text-container">
                    <div>Defeat is only a chance to try again!</div>
                    <div>{winner.name} has won!</div>
                    <div>{loser.name} fainted!</div>
                </div>
            </div>

            <div className="victory-container">

                <div className="victory-pokemons">

                    <div className="return-btn option">
                        <img onClick={handleEndCombat} src={mapImg} alt="map" height="100px"/>
                    </div>

                    <div className="winner-poke">
                        <img src={winner.img} alt="winner" className="winner-poke-img"/>
                    </div>

                    <div className="loser-poke">
                        <img src={dizzy} alt="dizzy" className="dizzy" />
                        <img src={loser.img} alt="loser" className="loser-poke-img"/>
                    </div>

                </div>
            </div>

        </div>



     );
}
 
export default Defeat;