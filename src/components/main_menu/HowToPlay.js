import React from 'react';
import { styles } from '../../styles';

function HowToPlay(props) {
    return (
        <section className={`${styles.flexBoxCol} h-screen`}>
            <div>HowToPlay</div>
            <button onClick={props.onFirstOptionClick}>Back to main menu</button>
        </section>
    )
}

export default HowToPlay;