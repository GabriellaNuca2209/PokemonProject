import { useContext } from 'react';
import './App.css';
import ModeControl from './components/ModeControl';
import Header from './components/header/Header';
import { GameContext, GameContextProvider } from './utils/GameContext';

function App() {
  const game = useContext(GameContext)
  return (
      <div className="App">
        {game.gameMode !== "introScreen"  && <Header/>}
        <ModeControl/>
      </div>
  );
}

export default App;
