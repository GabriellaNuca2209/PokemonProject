import { useContext, useState } from "react";
import { GameContext } from "../../../utils/GameContext";

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
        <div className="victory-container">
            {/* <div className="victory-title">Glorious Victory!!!</div> */}

            <div className="victory-pokemons">

                <div className="return-btn option">
                    {/* <button onClick={handleEndCombat}>Return To Map</button> */}
                    <img src="./img/map.png" alt="map" height="100px"/>
                </div>

                <div className="winner-poke">
                    <div>{winner.name} has won!</div>
                    <img src={winner.img} alt="winner" className="winner-poke-img"/>
                </div>

                <div className="loser-poke">


                    <div>{loser.name} fainted!</div>
                    {/* <div className="dizzy-gif"></div> */}
                    {/* <img src="../../../assets/img/endCombat/dizzy.gif" alt="dizzy" height="100px"/> */}
                    <img src={loser.img} alt="loser" className="loser-poke-img"/>
                </div>

                <div className="capture-btn option">
                    {isNew &&   <div>
                                    {/* <button onClick={capturePokemon}>Add</button> */}
                                    <img src="../../../assets/img/endCombat/pokeBall.png" alt="poke-ball" height="100px"/>
                                </div>}
                </div>
            </div>
            

        </div>
     );
}
 
export default Victory;