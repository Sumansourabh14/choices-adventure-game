import React from 'react';

function Button(props) {
  return (
    <button 
        onClick={props.onStartClick} 
        className='bg-gray-800 text-white px-16 py-4'
    >
        {props.buttonText}
    </button>
  )
}

export default Button;