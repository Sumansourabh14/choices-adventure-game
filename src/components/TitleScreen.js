import React, { useState } from 'react';
import { titleScreenData } from '../data/titleScreenData';
import { motion } from 'framer-motion';
import mainTheme from '../assets/Assassins-Creed-Rogue-Main-Theme.mp3';

function TitleScreen(props) {
    const [titleAudio, setTitleAudio] = useState(new Audio(mainTheme));

    function playAudio() {
        setTitleAudio(titleAudio.play());
        titleAudio.loop = true;
    }

    return (
        <motion.div
            key="title"
            initial={{opacity: 0.4, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1, ease: "easeInOut"}}
            // exit={{opacity: 0, scale: 2}}

            tabIndex="0"
            onKeyDown={props.onStartClick}
            onClick={playAudio}
            className='flex flex-col justify-center items-center h-screen relative'
        >
            <h1 className='font-extrabold font-sans uppercase text-8xl md:text-9xl lg:text-[160px] xl:text-[190px] 2xl:text-[240px] animate-slow'>{titleScreenData.nameOfGame}</h1>
            <h2 className='mt-20 font-semibold text-2xl lg:text-4xl animate-pulse'>{titleScreenData.playText}</h2>
            <p className='absolute bottom-10'>{titleScreenData.musicText}</p>
        </motion.div>
    )
}

export default TitleScreen;