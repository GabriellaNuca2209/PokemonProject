import { useContext, useState } from "react";
import { GameContext } from "../../../utils/GameContext";

const Victory = ({winner, loser}) => {

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
        <div>
            <div>Glorious Victory!!!</div>
            {isNew && <div>
                        <button onClick={capturePokemon}>Let's add it to our collection</button>
                     </div>}
            
            <div>{winner.name} has won!</div>
            <img src={winner.img} alt="winner" />
            <div>{loser.name} fainted!</div>
            <img src={loser.img} alt="loser" />

        </div>
     );
}
 
export default Victory;