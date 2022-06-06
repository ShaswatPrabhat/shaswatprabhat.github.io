import { m } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const MotionParagraphs = ({ delay, children, fontWeight, fontSize }) => (
  <m.p
    style={{
      color: 'black',
      alignSelf: 'center',
      opacity: 0,
      fontWeight: fontWeight || 100,
      fontSize: fontSize || '80%',
    }}
    animate={{ opacity: 1 }}
    transition={{
      type: 'spring',
      duration: 1,
      delay: delay,
    }}
  >
    {children}
  </m.p>
);

export const HbdSecondAnimation = ({ onAnimationsComplete }) => {
  const buttonText1 = 'Press me to eat some fragile male egos for breakfast!';
  const buttonText2 =
    'Nah! You do that everyday, Press to watch some aesthetic memories of yourself';
  const [showSensibleMessage, setShowSensibleMessage] = useState(false);
  const [buttonContentState, setButtonContentState] = useState(buttonText1);

  useEffect(() => {
    setTimeout(() => {
      setShowSensibleMessage(true);
    }, 20000);
  }, []);

  return (
    <m.div
      style={{
        width: '50vh',
        height: '50vh',
        borderRadius: 30,
        backgroundColor: '#faf7f7',
        opacity: 0,
        marginTop: '-10vh',
        padding: '2vh',
        //   media: `(max-width: 576px) {
        //   maxWidth: '70%',
        //   maxHeight: '50%',
        // }`,
      }}
      animate={{ rotate: 360, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 5,
        bounce: 0.4,
        delay: 1,
      }}
    >
      <MotionParagraphs delay={6} fontWeight={500} fontSize="100%">
        👇Here are some facts to remind you why you are so awesome! 👇
      </MotionParagraphs>
      {!showSensibleMessage && (
        <>
          <MotionParagraphs delay={7}>
            😍 You care for everyone
          </MotionParagraphs>
          <MotionParagraphs delay={8}>
            🤌 You are an awesome barber
          </MotionParagraphs>
          <MotionParagraphs delay={9}>
            🍰🏋️‍♀️ You are passionate about life and coding and food and...
          </MotionParagraphs>

          <MotionParagraphs delay={13}>
            Me telling no you awesome!!
            <br /> Believe it!
            <br />
            👊 🤛 🤜
          </MotionParagraphs>
        </>
      )}
      {showSensibleMessage && (
        <>
          <MotionParagraphs delay={null}>but for me...</MotionParagraphs>
          <MotionParagraphs delay={7}>
            You are my best friend 👩‍❤️‍👨 <br />
            and the best human being I know 💯 <br />
            and you inspire me to be better 🏃
          </MotionParagraphs>
          <MotionParagraphs delay={15}>
            Hence proven!
            <br />
            <m.button
              style={{
                marginTop: '10%',
                padding: '2%',
                borderRadius: '3vh',
                flexGrow: 1,
                maxWidth: '50%',
                backgroundColor: 'white',
                borderStyle: 'none',
                border: `0.5px solid black`,
                boxShadow: `rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0`,
                boxSizing: `border-box`,
                fontSize: '1.5vh',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (buttonContentState === buttonText1) {
                  setButtonContentState(buttonText2);
                } else {
                  onAnimationsComplete();
                }
              }}
              type="button"
            >
              {buttonContentState}
            </m.button>
          </MotionParagraphs>
        </>
      )}
    </m.div>
  );
};
