import React from 'react';
import { sequence2 } from '../story/sequence2Story';

function Sequence2(props) {
  return (
    <section>
        <p>{sequence2.story}</p>
        <h2>{sequence2.question}</h2>
        <div>
          <button onClick={props.onFirstChoiceClick}>{sequence2.choices[0].choice1}</button>
          <p>{sequence2.choices[0].choice1body}</p>
        </div>
        <div>
          <button onClick={props.onSecondChoiceClick}>{sequence2.choices[1].choice2}</button>
          <p>{sequence2.choices[1].choice2body}</p>
        </div>
    </section>
  )
}

export default Sequence2;