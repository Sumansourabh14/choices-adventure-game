import React from 'react';
import { exitGameData, howToPlayData, mainMenuData, newGameData } from '../../data/mainMenuData';
import Button from '../Button';

function MainMenu(props) {
    return (
        <section className='flex flex-col justify-center items-center h-screen border-4'>
            <h1>{mainMenuData.text}</h1>
            <Button buttonText={newGameData.text} onStartClick={props.onFirstOptionClick} />
            <Button buttonText={howToPlayData.text} onStartClick={props.onSecondOptionClick} />
            <Button buttonText={exitGameData.text} onStartClick={props.onThirdOptionClick} />
        </section>
    )
}

export default MainMenu;