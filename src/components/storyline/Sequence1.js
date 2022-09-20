import React from 'react';
import { sequence1 } from '../../story/sequence1Story';
import { styles } from '../../styles';
import ChoiceBtn from '../ChoiceBtn';
import { motion } from 'framer-motion';

function Sequence1(props) {
  return (
    <motion.div
      initial={{opacity: 0.4, scale: 0.8}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 1, ease: "easeInOut", delay: 0.5}}

      className={`${styles.flexBoxCol} h-screen`}>
        {sequence1.story.map(paragraph => {
          return (
            <p className='mb-2'>{paragraph.p}</p>
          )
        })}

        <h2>{sequence1.question}</h2>

        <div className={`${styles.flexBox} flex-col md:flex-row mt-24`}>
          <div className={`${styles.flexBoxCol} ${styles.choiceBox}`}>
            <ChoiceBtn onChoiceClick={props.onFirstChoiceClick} choiceText={sequence1.choices[0].choice1} />
            <p className={`${styles.choiceParaPadding}`}>{sequence1.choices[0].choice1body}</p>
          </div>
          <div className={`${styles.flexBoxCol} ${styles.choiceBox} mt-14 md:mt-0 md:ml-14`}>
            <ChoiceBtn onChoiceClick={props.onSecondChoiceClick} choiceText={sequence1.choices[1].choice2} />
            <p className={`${styles.choiceParaPadding}`}>{sequence1.choices[1].choice2body}</p>
          </div>
        </div>
    </motion.div>

    // <div className={`${styles.flexBoxCol} border-2 h-screen`}>
    //     {sequence1.story.map(paragraph => {
    //       return (
    //         <p className='mb-2'>{paragraph.p}</p>
    //       )
    //     })}
    //     <h2>{sequence1.question}</h2>

    //     <div className={`${styles.flexBox} flex-col md:flex-row mt-24 border-2`}>
    //       <div className={`${styles.flexBoxCol} ${styles.choiceBox}`}>
    //         <ChoiceBtn onChoiceClick={props.onFirstChoiceClick} choiceText={sequence1.choices[0].choice1} />
    //         <p className={`${styles.choiceParaPadding}`}>{sequence1.choices[0].choice1body}</p>
    //       </div>
    //       <div className={`${styles.flexBoxCol} ${styles.choiceBox} mt-14 md:mt-0 md:ml-14`}>
    //         <ChoiceBtn onChoiceClick={props.onSecondChoiceClick} choiceText={sequence1.choices[1].choice2} />
    //         <p className={`${styles.choiceParaPadding}`}>{sequence1.choices[1].choice2body}</p>
    //       </div>
    //     </div>
    // </div>
  )
}

export default Sequence1;