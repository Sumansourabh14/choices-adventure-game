import React, { useState } from 'react';
import { titleScreenData } from '../data/titleScreenData';
import mainTheme from '../assets/Assassins-Creed-Rogue-Main-Theme.mp3';

function TitleScreen(props) {
    const [titleAudio, setTitleAudio] = useState(new Audio(mainTheme));

    function playAudio() {
        setTitleAudio(titleAudio.play());
        titleAudio.loop = true;
    }

    return (
        <div
            tabIndex="0"
            onKeyDown={props.onStartClick}
            onClick={playAudio}
            className='flex flex-col justify-center items-center h-screen relative'
        >
            <h1 className='font-extrabold font-sans uppercase text-8xl md:text-9xl lg:text-[160px] xl:text-[190px] 2xl:text-[240px] animate-slow'>{titleScreenData.nameOfGame}</h1>
            <h2 className='mt-20 font-semibold text-2xl lg:text-4xl animate-pulse'>{titleScreenData.playText}</h2>
            <p className='absolute bottom-10'>{titleScreenData.musicText}</p>
        </div>
    )
}

export default TitleScreen;