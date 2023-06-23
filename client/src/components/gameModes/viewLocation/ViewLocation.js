import { useContext } from "react";
import UseFetch from "../../../utils/useFetch";
import { GameContext } from "../../../utils/GameContext";

const ViewLocation = () => {

    const game = useContext(GameContext);

    const areaData = UseFetch(`https://pokeapi.co/api/v2/location-area/${game.locationData.id}`);
    function handleScouting() {

        const pokemonsArr = [];
        areaData.pokemon_encounters.map((poke) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${poke.pokemon.name}`)
            .then(res => res.json())
            .then(data => {
                pokemonsArr.push({
                    name: data.name,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    img: data.sprites.front_default
                })
            })
        })

        setTimeout(() => {
            game.setPokemonsAtLocation(pokemonsArr);
            game.setIsExplored(true);
        }, 500)


    }
    // console.log(areaData)

    function startCombat() {
        const random = Math.floor(Math.random() * game.pokemonsAtLocation.length);
        game.setGameMode("combatZone");
        game.setPlayer2(game.pokemonsAtLocation[random]);
    }

    return (  
        <div>
            {!game.isExplored 
                ? <div>
                    <div>Hello, fellow adventurer!</div>
                    <button onClick={() => handleScouting()}>Scout Area</button>
                </div>
                : 
                <div>
                    <div>Looks like we found some life here!</div>
                    {game.player1.name ? <button onClick={startCombat}>Start Combat</button>
                                       : <div>Don't go alone!</div>
                    }

                    {game.pokemonsAtLocation.map((scoutedPokemon, index) => (
                        <div key={index}>
                            <div>{scoutedPokemon.name}</div>
                            <img src={scoutedPokemon.img} alt="tasyPokemon" />
                        </div>
                    ))}

                </div>
            }
        </div>
    );
}
 
export default ViewLocation;