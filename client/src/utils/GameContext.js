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
    // Combat
    winner: "",
    setWinner: ()=>{},
    loser: "",
    setLoser:()=> {},
    score: 0, 
    setScore: () => {},
    isActionTaken: false,
    setIsActionTaken: ()=>{},

    isPlayer1Winner: false,
    setIsPlayer1Winner: () => {},
    // Sounds
    buttonSound: ()=> {},

    //animation
    player1Animation: '',
    setPlayer1Animation: () => {}

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
    const [isActionTaken, setIsActionTaken] = useState("")

    const [isPlayer1Winner, setIsPlayer1Winner] = useState(false);
    const [player1Animation, setPlayer1Animation] = useState('idle');


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
                soundSource = defaultClickSnd;
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
        // Combat
        winner: winner,
        setWinner,
        loser: loser,
        setLoser,
        score: score,
        setScore,
        isActionTaken: isActionTaken,
        setIsActionTaken,

        isPlayer1Winner:isPlayer1Winner,
        setIsPlayer1Winner,
        // Sound
        buttonSound,

        //animation
        player1Animation: player1Animation,
        setPlayer1Animation
    }

    return (

        <GameContext.Provider value={contextValue}>
            { children }
        </GameContext.Provider>

    )

} 
 
