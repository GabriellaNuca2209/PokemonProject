import { useContext } from "react";
import { GameContext } from "../../../utils/GameContext";

const Location = ({location, locationId}) => {

    const game = useContext(GameContext)

    function locationChange() {
        game.setGameMode("viewLocation");
        game.setLocationData({
            id: locationId,
            name: location.name
        })
    }

    return (  
        <div>
            <button onClick={() => locationChange()}>{location.name}</button>
        </div>
    );
}
 
export default Location;