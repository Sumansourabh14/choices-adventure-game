import React from 'react';
import { styles } from '../../styles';

function ExitGame() {
    return (
        <section className={`${styles.flexBoxCol} h-screen`}>
            <h1 className='text-4xl lg:text-6xl font-bold'>Exit</h1>
            <h2 className='mt-4 text-2xl'>Do play again!</h2>
        </section>
    )
}

export default ExitGame;