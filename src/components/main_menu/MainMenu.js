import { faGamepad, faPerson, faPowerOff, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import { exitGameData, howToPlayData, mainMenuData, newGameData } from '../../data/mainMenuData';
import { styles } from '../../styles';

function MainMenu(props) {
    return (
        <div
            // key="a"
            // initial={{opacity: 0, scale: 0.5}}
            // animate={{opacity: 1, scale: 1}}
            // transition={{duration: 1.5}}
            // exit={{opacity: 0, scale: 2}}

            className='flex flex-col justify-center items-center h-screen'>
            <h1 className='font-bold text-3xl'>{mainMenuData.text}</h1>
            <ul className='mt-10 w-5/6 h-2/5 lg:h-3/5 grid grid-cols-2 lg:grid-cols-3 gap-2'>
                <li className={`${styles.flexBox} ${styles.mainMenuOptions} relative col-span-2 lg:col-span-1 lg:row-span-2`} onClick={props.onFirstOptionClick}>
                    <p className='absolute top-2 left-2 font-bold text-xl text-gray-100'>Start a new game</p>
                    <p className={`${styles.mainMenuOptionsTitle}`}>{newGameData.text}</p>
                    <FontAwesomeIcon
                        icon={faGamepad}
                        className={`${styles.mainMenuIcons}`}
                    />
                </li>
                <li className={`${styles.flexBox} ${styles.mainMenuOptions} col-span-2 relative`} onClick={props.onSecondOptionClick}>
                    <p className={`${styles.mainMenuOptionsTitle}`}>{howToPlayData.text}</p>
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className={`${styles.mainMenuIcons}`}
                    />
                </li>
                <li className={`${styles.flexBox} ${styles.mainMenuOptions} relative`} onClick={props.onThirdOptionClick}>
                    <p className={`${styles.mainMenuOptionsTitle}`}>Characters</p>
                    <FontAwesomeIcon
                        icon={faPerson}
                        className={`${styles.mainMenuIcons}`}
                    />
                </li>
                <li className={`${styles.flexBox} ${styles.mainMenuOptions} relative`} onClick={props.onFourthOptionClick}>
                    <p className={`${styles.mainMenuOptionsTitle}`}>{exitGameData.text}</p>
                    <FontAwesomeIcon
                        icon={faPowerOff}
                        className={`${styles.mainMenuIcons}`}
                    />
                </li>
            </ul>
        </div>
    )
}

export default MainMenu;