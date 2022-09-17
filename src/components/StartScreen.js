import React from 'react';

function StartScreen(props) {
  return (
    <div>
        <h1>Welcome</h1>
        <button onClick={props.onStartClick}>Start!</button>
    </div>
  )
}

export default StartScreen;