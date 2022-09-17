import { useState } from 'react';
import './App.css';
import EndScreen from './components/EndScreen';
import StartScreen from './components/StartScreen';
import Sequence1 from './components/Sequence1';
import Sequence2 from './components/Sequence2';

function App() {
  // const [mode, setMode] = useState("Sequence2");
  const [mode, setMode] = useState("start");

  return (
    <main>
      {(mode === "start") && <StartScreen onStartClick={() => setMode("sequence1")} />}

      {(mode === "sequence1") && <Sequence1 onFirstChoiceClick={() => setMode("sequence2")} onSecondChoiceClick={() => setMode("end")} />}

      {(mode === "sequence2") && <Sequence2 onFirstChoiceClick={() => setMode("end")} onSecondChoiceClick={() => setMode("start")} />}

      {(mode === "end") && <EndScreen />}
    </main>
  );
}

export default App;
