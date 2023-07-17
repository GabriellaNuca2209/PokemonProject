import { useContext, useState } from "react";
import { GameContext } from "../../../utils/GameContext";
import pokeBallImg from '../../../assets/img/endCombat/pokeBall.png';
import mapImg from '../../../assets/img/endCombat/map.png';
import dizzy from '../../../assets/img/endCombat/dizzy.gif';

const Victory = ({winner, loser, handleEndCombat}) => {

    const game = useContext(GameContext); 
    let isNew = false;

    useState(() => {
        console.log(game.backpack);
        game.backpack.some(poke => {
            if(poke.name === loser.name){
                console.log('is in bag');
                isNew = false;
                return true;
            } else {
                console.log('is not in bag');
                isNew = true;
                return false;
            }
        });   
    }, [loser])

    function capturePokemon(){
        game.setBackpack((prev) => [...prev, loser]);       
        isNew = false;
    }


    return ( 
        <div className="main-victory-container">
  
            <div className="info-container">
                <div className="text-container">
                    <div>GLORIOUS VICTORY</div>
                    <div>{winner.name} has won!</div>
                    <div>{loser.name} fainted!</div>
                </div>
            </div>

            <div className="victory-container">

                <div className="victory-pokemons">

                    <div className="return-btn option">
                        {/* <button onClick={handleEndCombat}>Return To Map</button> */}
                        <img onClick={handleEndCombat} src={mapImg} alt="map" height="100px"/>
                    </div>

                    <div className="winner-poke">
                        
                        <img src={winner.img} alt="winner" className="winner-poke-img"/>
                    </div>

                    <div className="loser-poke">

                        <img src={dizzy} alt="dizzy" className="dizzy" />
                        <img src={loser.img} alt="loser" className="loser-poke-img"/>
                    </div>

                    <div className="capture-btn option">
                        {isNew &&   <div>
                                        {/* <button onClick={capturePokemon}>Add</button> */}
                                        <img onClick={capturePokemon} src={pokeBallImg} alt="poke-ball" height="100px"/>
                                    </div>}
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Victory;