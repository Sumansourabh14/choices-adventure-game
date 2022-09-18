import { useState } from 'react';
import './App.css';
import TitleScreen from './components/TitleScreen';
import Sequence1 from './components/Sequence1';
import Sequence2 from './components/Sequence2';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';

function App() {
  const [mode, setMode] = useState("start");

  return (
    <main>
      <div className='mx-auto'>
        {(mode === "start") && <TitleScreen onStartClick={() => setMode("main-menu")} />}

        {(mode === "main-menu") && <MainMenu onFirstOptionClick={() => setMode("sequence1")} /> }

        {(mode === "sequence1") && <Sequence1 onFirstChoiceClick={() => setMode("sequence2")} onSecondChoiceClick={() => setMode("end")} />}
        
        {(mode === "sequence2") && <Sequence2 onFirstChoiceClick={() => setMode("end")} onSecondChoiceClick={() => setMode("start")} />}
        
        {(mode === "end") && <EndScreen />}
      </div>
    </main>
  );
}

export default App;
