import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function PrologueBtn(props) {
    return (
        <button
            className='bg-white hover:scale-105 hover:bg-opacity-70 hover:rounded-lg duration-150 px-8 py-3 text-xl text-black font-semibold flex items-center' 
            onClick={props.onBtnClick}
        >
            {props.btnText}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
    )
}

export default PrologueBtn;