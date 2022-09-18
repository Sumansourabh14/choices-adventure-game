import React from 'react';

function HowToPlay(props) {
    return (
        <section>
            <div>HowToPlay</div>
            <button onClick={props.onFirstOptionClick}>Back to main menu</button>
        </section>
    )
}

export default HowToPlay;