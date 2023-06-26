import { useContext, useEffect } from "react";
import { GameContext } from "../../utils/GameContext";
import UseFetch from "../../utils/useFetch";

const HeaderInMenu = () => {

    const game = useContext(GameContext);

    const starterOptions = ["pikachu", "bulbasaur", "squirtle"];
    const starterPokemons = [];



    for (let i = 0; i < starterOptions.length; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${starterOptions[i]}`)
        .then(res => res.json())
        .then(data => {
            starterPokemons.push({
                name: data.name,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                img: data.sprites.front_default
            })
        })

        // let pokemonObj = {
        //     name: data.name,
        //     hp: data.stats[0].base_stat,
        //     attack: data.stats[1].base_stat,
        //     defense: data.stats[2].base_stat,
        //     img: data.sprites.front_default
        // }

        // starterPokemons.push(pokemonObj)
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