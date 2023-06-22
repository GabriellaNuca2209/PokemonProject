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
})


export function GameContextProvider({ children }) {

    const [gameMode, setGameMode] = useState("startMenu");
    const [locationData, setLocationData] = useState({});
    const [pokemonsAtLocation, setPokemonsAtLocation] = useState([]);
    const [isExplored, setIsExplored] = useState(false);

    const contextValue = {
        gameMode: gameMode,
        setGameMode,
        locationData: locationData,
        setLocationData,
        pokemonsAtLocation: pokemonsAtLocation,
        setPokemonsAtLocation,
        isExplored: isExplored,
        setIsExplored,
    }

    return (

        <GameContext.Provider value={contextValue}>
            { children }
        </GameContext.Provider>

    )

} 
 
