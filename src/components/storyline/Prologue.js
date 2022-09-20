// import React, { useState } from 'react';
// // import { styles } from '../../styles';
// // import ChoiceBtn from '../ChoiceBtn';
// import PrologueStory from './prologue/PrologueStory';
// import PrologueTitle from './prologue/PrologueTitle';
// import Sequence1 from './Sequence1';

// function Prologue() {
//     const [stage, setStage] = useState("prologue-title");

//     return (
//         <section>
//             {(stage === "prologue-title") && <PrologueTitle onBtnClick={() => setStage("prologue-story")} />}

//             {(stage === "prologue-story") && <PrologueStory onFirstChoiceClick={() => setStage("sequence1")} />}
//         </section>

//         // <section className={`${styles.flexBoxCol} h-screen`}>
//         //     <h1>Prologue</h1>
//         //     <p>Paragraph ...</p>
//         //     <ChoiceBtn onChoiceClick={props.onFirstOptionClick} choiceText="Continue" />
//         // </section>
//     )
// }

// export default Prologue;