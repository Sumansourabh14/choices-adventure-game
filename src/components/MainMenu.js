import React from 'react';
import Button from './Button';

function MainMenu(props) {
    return (
        <section>
            <h1>Main Menu</h1>
            <Button buttonText="Next" onStartClick={props.onFirstOptionClick} />
        </section>
    )
}

export default MainMenu;