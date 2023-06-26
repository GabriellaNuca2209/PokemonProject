import { createContext, useState } from "react";
import backpackSnd from '..//assets/sounds/menu/backpack.wav'
import selectPokemonSnd from '..//assets/sounds/menu/selectPokemon.ogg'
import defaultClickSnd from '..//assets/sounds/menu/defaultbtn.wav'

export const GameContext = createContext({
    // game modes
    gameMode: "",
    setGameMode: () => {},
    // location data
    locationData: {},
    setLocationData: () => {},
    pokemonsAtLocation: [],
    setPokemonsAtLocation: () => {},
    isExplored: false,
    setIsExplored: () => {},
    // backPack
    backpack: [],
    setBackpack: () => {},
    isBackpackOpen: false,
    setIsBackpackOpen: () => {},
    player1: "",
    setPlayer1: () => {},
    player2: "",
    setPlayer2: () => {},

    // Combat end
    winner: "",
    setWinner: ()=>{},
    loser: "",
    setLoser:()=> {},

    score: 0, 
    setScore: () => {},

    // Sounds
    buttonSound: ()=> {},

})




export function GameContextProvider({ children }) {

    const [gameMode, setGameMode] = useState("introScreen");
    const [locationData, setLocationData] = useState({});
    const [pokemonsAtLocation, setPokemonsAtLocation] = useState([]);
    const [isExplored, setIsExplored] = useState(false);
    const [backpack, setBackpack] = useState([]);
    const [isBackpackOpen, setIsBackpackOpen] = useState(false);
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [winner, setWinner] = useState("")
    const [loser, setLoser] = useState("")
    const [score, setScore] = useState(0)


    function buttonSound(string){
        let soundSource = "";
        switch (string){
            case "backpack": 
                soundSource = backpackSnd;
                break;
            case "selectPokemon":
                soundSource = selectPokemonSnd;
                break;
            default: 
                soundSource = defaultSnd;
                break;
        }

        const audio = new Audio(soundSource);
        // vol ? vol : Math.floor(0.9)
        // audio.volume = Math.floor(vol)
        audio.play()
    }

    const contextValue = {
        gameMode: gameMode,
        setGameMode,
        locationData: locationData,
        setLocationData,
        pokemonsAtLocation: pokemonsAtLocation,
        setPokemonsAtLocation,
        isExplored: isExplored,
        setIsExplored,
        // Backpack
        backpack: backpack,
        setBackpack,
        isBackpackOpen: isBackpackOpen,
        setIsBackpackOpen,
        // Players
        player1: player1,
        setPlayer1,
        player2: player2,
        setPlayer2,
        winner: winner,
        setWinner,
        loser: loser,
        setLoser,
        score: score,
        setScore,

        // Sound
        buttonSound,
    }

    return (

        <GameContext.Provider value={contextValue}>
            { children }
        </GameContext.Provider>

    )

} 
 
