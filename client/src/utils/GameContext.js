import { createContext, useState } from "react";

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
})


export function GameContextProvider({ children }) {

    const [gameMode, setGameMode] = useState("startMenu");
    const [locationData, setLocationData] = useState({});
    const [pokemonsAtLocation, setPokemonsAtLocation] = useState([]);
    const [isExplored, setIsExplored] = useState(false);
    const [backpack, setBackpack] = useState([]);
    const [isBackpackOpen, setIsBackpackOpen] = useState(false);
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

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
    }

    return (

        <GameContext.Provider value={contextValue}>
            { children }
        </GameContext.Provider>

    )

} 
 
