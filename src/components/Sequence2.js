import React from 'react';
import { sequence2 } from '../story/sequence2Story';
import ChoiceBtn from './ChoiceBtn';
import { styles } from '../styles';

function Sequence2(props) {
  return (
    <section className={`${styles.flexBoxCol} border-2 h-screen`}>
        <p>{sequence2.story}</p>
        <h2>{sequence2.question}</h2>

        {/* <div>
          <button onClick={props.onFirstChoiceClick}>{sequence2.choices[0].choice1}</button>
          <p>{sequence2.choices[0].choice1body}</p>
        </div>
        <div>
          <button onClick={props.onSecondChoiceClick}>{sequence2.choices[1].choice2}</button>
          <p>{sequence2.choices[1].choice2body}</p>
        </div> */}

        <div className={`${styles.flexBox} flex-col md:flex-row mt-12`}>
          <div className={`${styles.flexBoxCol} ${styles.choiceBox}`}>
            <ChoiceBtn onChoiceClick={props.onFirstChoiceClick} choiceText={sequence2.choices[0].choice1} />
            <p className={`${styles.choiceParaPadding}`}>{sequence2.choices[0].choice1body}</p>
          </div>
          <div className={`${styles.flexBoxCol} ${styles.choiceBox} mt-14 md:mt-0 md:ml-14`}>
            <ChoiceBtn onChoiceClick={props.onSecondChoiceClick} choiceText={sequence2.choices[1].choice2} />
            <p className={`${styles.choiceParaPadding}`}>{sequence2.choices[1].choice2body}</p>
          </div>
        </div>
    </section>
  )
}

export default Sequence2;