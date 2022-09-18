import { useState } from 'react';
import './App.css';
import TitleScreen from './components/TitleScreen';
import Sequence1 from './components/Sequence1';
import Sequence2 from './components/Sequence2';
import EndScreen from './components/EndScreen';

function App() {
  const [mode, setMode] = useState("start");

  return (
    <main>
      <div className='container px-8 mx-auto'>
        {(mode === "start") && <TitleScreen onStartClick={() => setMode("sequence1")} />}

        {(mode === "sequence1") && <Sequence1 onFirstChoiceClick={() => setMode("sequence2")} onSecondChoiceClick={() => setMode("end")} />}
        
        {(mode === "sequence2") && <Sequence2 onFirstChoiceClick={() => setMode("end")} onSecondChoiceClick={() => setMode("start")} />}
        
        {(mode === "end") && <EndScreen />}
      </div>
    </main>
  );
}

export default App;
