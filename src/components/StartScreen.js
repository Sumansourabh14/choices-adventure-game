import React from 'react';
import Button from './Button';

function StartScreen(props) {
  return (
    <div>
        <h1>Choices</h1>
        {/* <button onClick={props.onStartClick}>Start!</button> */}
        <Button buttonText = "Start!" onStartClick={props.onStartClick} />
    </div>
  )
}

export default StartScreen;