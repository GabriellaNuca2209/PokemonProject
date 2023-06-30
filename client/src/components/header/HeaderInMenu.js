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
    }

    // function GetPokemons(url, poke) {
    //     return UseFetch(url + poke);
    // }

    function startGame() {
        game.setGameMode("worldMap")
        game.setBackpack(starterPokemons);
    }

    function startArena(){
        game.buttonSound()
    }

    return (  
        <div className="buttons-container">
            {/* <button onClick={startGame}>Start Game</button>
            <button onClick={startArena}>Arena</button>
            <button>Options</button>
            <button>Quit</button> */}

            <div className="button v8" onClick={startGame}>
                <span className="label" >Start Game</span>
                    <span className="icon">
                        <span></span>
                </span>
            </div>

            <div className="button v8" onClick={startArena}>
                <span className="label" >Arena</span>
                    <span className="icon">
                        <span></span>
                </span>
            </div>

            <div className="button v8">
                <span className="label">Options</span>
                    <span className="icon">
                        <span></span>
                </span>
            </div>

            <div className="button v8">
                <span className="label">Quit</span>
                    <span className="icon">
                        <span></span>
                </span>
            </div>
        </div>
    );
}
 
export default HeaderInMenu;