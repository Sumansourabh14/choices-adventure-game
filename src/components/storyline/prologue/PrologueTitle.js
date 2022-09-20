import React from 'react';
import { prologueStory } from '../../../story/prologueStory';
import { styles } from '../../../styles';
import PrologueBtn from '../../PrologueBtn';

function PrologueTitle(props) {
    return (
        <section className={`${styles.flexBoxCol} h-screen px-8`}>
            <h1 className='text-5xl font-bold mb-8'>Prologue</h1>
            <div>
                {prologueStory.startPage.map((line, index) => (
                    <p
                        className={index === 0 ? "font-bold text-xl mb-4" : ' max-w-2xl mb-4 text-left'}
                        key={line.id}>{line.text}
                    </p>
                ))}
            </div>
            <PrologueBtn btnText="Continue" onBtnClick={props.onBtnClick} />
        </section>
    )
}

export default PrologueTitle;