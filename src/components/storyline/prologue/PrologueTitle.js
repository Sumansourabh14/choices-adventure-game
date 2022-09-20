import React from 'react';

function PrologueTitle(props) {
    return (
        <section>
            <h1>Prologue</h1>
            <button onClick={props.onBtnClick}>Continue</button>
        </section>
    )
}

export default PrologueTitle;