import React, { useState } from 'react';
// import Button from './Button';
import mainTheme from '../assets/Assassins-Creed-Rogue-Main-Theme.mp3';

function TitleScreen(props) {
    const [titleAudio, setTitleAudio] = useState(new Audio(mainTheme));

    function playAudio() {
        setTitleAudio(titleAudio.play());
    }

    return (
        <div
            tabIndex="0"
            onKeyDown={props.onStartClick}
            onClick={playAudio}
            className='flex flex-col justify-center items-center h-screen'
        >
            <h1 className='font-bold uppercase text-6xl lg:text-9xl animate-slow'>Choices</h1>
            <h2 className='mt-20 font-semibold text-2xl lg:text-4xl animate-pulse'>Press any key to start</h2>
            {/* <div className='mt-20'>
                <Button buttonText = "Start!" onStartClick={props.onStartClick} />
            </div> */}
        </div>
    )
}

export default TitleScreen;