import React from 'react';
import { styles } from '../../../styles';
import PrologueBtn from '../../PrologueBtn';
import { prologueStory } from '../../../story/prologueStory';
import ChoiceBtn from '../../ChoiceBtn';

function PrologueStory(props) {
    return (
        <section className={`${styles.flexBoxCol} min-h-screen py-16 px-8`}>
            <div>
                {prologueStory.secondPage.map((line, index) => (
                    <p className={'max-w-2xl mb-4 text-left'} key={line.id}>{line.text}</p>
                ))}
            </div>
            
            <h1 className='text-2xl font-semibold mt-24'>Pick a choice!</h1>

            <div className={`${styles.flexBox} flex-col md:flex-row mt-12`}>
                <div className={`${styles.flexBoxCol} ${styles.choiceBox}`}>
                    <ChoiceBtn 
                        onChoiceClick={props.onFirstChoiceClick} 
                        choiceText={prologueStory.choices[0].choice1} 
                    />
                    <p className={`${styles.choiceParaPadding}`}>{prologueStory.choices[0].choice1body}</p>
                </div>
                <div className={`${styles.flexBoxCol} ${styles.choiceBox} mt-14 md:mt-0 md:ml-14`}>
                    <ChoiceBtn 
                        onChoiceClick={props.onSecondChoiceClick} 
                        choiceText={prologueStory.choices[1].choice2} 
                    />
                    <p className={`${styles.choiceParaPadding}`}>{prologueStory.choices[1].choice2body}</p>
                </div>
            </div>
        </section>
    )
}

export default PrologueStory;