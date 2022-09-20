import React from 'react';
import { styles } from '../../../styles';

function PrologueStory(props) {
    return (
        <section className={`${styles.flexBoxCol} h-screen`}>
            <h1>Prologue</h1>
            <p>Paragraph ...</p>
            {/* <ChoiceBtn onChoiceClick={props.onFirstOptionClick} choiceText="Continue" /> */}
            <button onClick={props.onFirstChoiceClick}>Next</button>
        </section>
    )
}

export default PrologueStory;