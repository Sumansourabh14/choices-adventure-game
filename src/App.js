import { useState } from 'react';
import './App.css';
import TitleScreen from './components/TitleScreen';
import Sequence1 from './components/storyline/Sequence1';
import Sequence2 from './components/storyline/Sequence2';
import EndScreen from './components/EndScreen';
import MainMenu from './components/main_menu/MainMenu';
import ExitGame from './components/main_menu/ExitGame';
import HowToPlay from './components/main_menu/HowToPlay';
import Characters from './components/main_menu/Characters';
import { AnimatePresence } from 'framer-motion';
import PrologueTitle from './components/storyline/prologue/PrologueTitle';
import PrologueStory from './components/storyline/prologue/PrologueStory';

function App() {
  const [mode, setMode] = useState("start");

  return (
    <main className='bg-stone-900 text-white'>
      <div className='mx-auto'>
        {/* <AnimatePresence> */}
          {(mode === "start") && <TitleScreen onStartClick={() => setMode("main-menu")} />}
        {/* </AnimatePresence> */}

        <AnimatePresence>  {/* For exit animation */}
          {(mode === "main-menu") && (
            <>
              <MainMenu
                onFirstOptionClick={() => setMode("prologue-title")}
                onSecondOptionClick={() => setMode("how-to-play")}
                onThirdOptionClick={() => setMode("characters")}
                onFourthOptionClick={() => setMode("exit-game")}
              />
            </>
          )}
        </AnimatePresence>

        {(mode === "how-to-play") && <HowToPlay onFirstOptionClick={() => setMode("main-menu")} />}

        {(mode === "characters") && <Characters onFirstOptionClick={() => setMode("main-menu")} /> }

        {(mode === "exit-game") && <ExitGame />}

        {/* Prologue */}
        {(mode === "prologue-title") && <PrologueTitle onBtnClick={() => setMode("prologue-story")} />}

        {(mode === "prologue-story") && (
          <PrologueStory 
            onFirstChoiceClick={() => setMode("sequence1")} 
            onSecondChoiceClick={() => setMode("sequence2")} 
          />)
        }

        {/* Sequences */}
        {(mode === "sequence1") && <Sequence1 onFirstChoiceClick={() => setMode("sequence2")} onSecondChoiceClick={() => setMode("end")} />}
        
        {(mode === "sequence2") && <Sequence2 onFirstChoiceClick={() => setMode("end")} onSecondChoiceClick={() => setMode("start")} />}
        
        {(mode === "end") && <EndScreen />}
      </div>
    </main>
  );
}

export default App;
