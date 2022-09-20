import React from 'react';

function ChoiceBtn(props) {
    return (
        <section>
            <button 
                onClick={props.onChoiceClick} 
                className='bg-white text-black mt-4 py-4 px-10 rounded font-bold tracking-wide 
                lg:px-20 text-xl 2xl:text-2xl mb-2 uppercase hover:animate-none hover:scale-105 hover:bg-stone-400 duration-200 animate-choice'
            >
                {props.choiceText}
            </button>
        </section>
    )
}

export default ChoiceBtn;