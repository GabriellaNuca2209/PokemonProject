import './App.css';
import ModeControl from './components/ModeControl';
import Header from './components/header/Header';
import { GameContextProvider } from './utils/GameContext';

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <Header/>
        <ModeControl/>
      </div>
    </GameContextProvider>
  );
}

export default App;
