import React from 'react';
import { styles } from '../../../styles';
import PrologueBtn from '../../PrologueBtn';

function PrologueStory(props) {
    return (
        <section className={`${styles.flexBoxCol} h-screen`}>
            <p className='mb-6'>Prologue paragraph </p>
            <PrologueBtn btnText="Continue" onBtnClick={props.onBtnClick} />
        </section>
    )
}

export default PrologueStory;