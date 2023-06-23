import { useContext } from "react";
import { GameContext } from "../../utils/GameContext";
import UseFetch from "../../utils/useFetch";

const HeaderInMenu = () => {

    const game = useContext(GameContext);

    const starterOptions = ["pikachu", "bulbasaur", "squirtle"];
    const starterPokemons = [];

    for (let i = 0; i < starterOptions.length; i++) {
        let data = GetPokemons("https://pokeapi.co/api/v2/pokemon/", starterOptions[i]);
        starterPokemons.push(data);

    }

    function GetPokemons(url, poke) {
        return UseFetch(url + poke);
    }

    function startGame() {
        game.setGameMode("worldMap")
        game.setBackpack(starterPokemons);
    }

    return (  
        <div>
            <button onClick={startGame}>Start Game</button>
            <button>Arena</button>
        </div>
    );
}
 
export default HeaderInMenu;