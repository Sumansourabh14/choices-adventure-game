import React from 'react';
import { styles } from '../../../styles';
import PrologueBtn from '../../PrologueBtn';

function PrologueTitle(props) {
    return (
        <section className={`${styles.flexBoxCol} h-screen`}>
            <h1 className='text-5xl font-bold mb-36'>Prologue</h1>
            <p className='mb-6'>Prologue subtitle </p>
            <PrologueBtn btnText="Continue" onBtnClick={props.onBtnClick} />
        </section>
    )
}

export default PrologueTitle;