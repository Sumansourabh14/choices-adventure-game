import React from 'react';
import Button from '../Button';

function Characters(props) {
    return (
        <section>
            <Button buttonText="Back to main menu" onStartClick={props.onFirstOptionClick} />
        </section>
    )
}

export default Characters;