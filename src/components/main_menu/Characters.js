import React from 'react';
import Button from '../Button';
import { styles } from '../../styles';

function Characters(props) {
    return (
        <section className={`${styles.flexBoxCol} h-screen`}>
            <Button buttonText="Back to main menu" onStartClick={props.onFirstOptionClick} />
        </section>
    )
}

export default Characters;