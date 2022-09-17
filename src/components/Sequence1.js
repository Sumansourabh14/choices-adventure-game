import React from 'react';
import { sequence1 } from '../story/sequence1Story';

function Sequence1(props) {
  return (
    <div>
        <p>{sequence1.story}</p>
        <h2>{sequence1.question}</h2>
        <div>
          <button onClick={props.onFirstChoiceClick}>{sequence1.choices[0].choice1}</button>
          <p>{sequence1.choices[0].choice1body}</p>
        </div>
        <div>
          <button onClick={props.onSecondChoiceClick}>{sequence1.choices[1].choice2}</button>
          <p>{sequence1.choices[1].choice2body}</p>
        </div>
    </div>
  )
}

export default Sequence1;