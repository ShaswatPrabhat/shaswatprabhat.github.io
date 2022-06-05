import { m } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const HbdSecondAnimation = ({ onAnimationsComplete }) => {
  const [showSensibleMessage, setShowSensibleMessage] = useState(false);
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
      }}
      animate={{ rotate: 360, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 5,
        bounce: 0.4,
        delay: 1,
      }}
    >
      <m.p
        style={{
          color: 'black',
          alignSelf: 'center',
          opacity: 0,
          fontWeight: 500,
        }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 6,
        }}
      >
        👇Here are some facts to remind you why you are so awesome! 👇
      </m.p>
      {!showSensibleMessage && (
        <>
          <m.p
            style={{
              color: 'black',
              alignSelf: 'center',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 7,
            }}
          >
            😍 You care for everyone
          </m.p>
          <m.p
            style={{
              color: 'black',
              alignSelf: 'center',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 8,
            }}
          >
            🤌 You are an awesome barber
          </m.p>
          <m.p
            style={{
              color: 'black',
              alignSelf: 'center',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 9,
            }}
          >
            🍰🏋️‍♀️ You are passionate about life and coding and food and...
          </m.p>

          <m.p
            style={{
              color: 'black',
              alignSelf: 'center',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 13,
            }}
          >
            I am saying you are awesome! Believe it!
            <br />
            👊 🤛 🤜
          </m.p>
        </>
      )}
      {showSensibleMessage && (
        <>
          <m.p
            style={{
              color: 'black',
              alignSelf: 'center',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
            }}
          >
            but for me...
          </m.p>
          <m.p
            style={{
              color: 'black',
              alignSelf: 'center',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 7,
            }}
          >
            You are my best friend 👩‍❤️‍👨 <br />
            and the best human being I know 💯 <br />
            and you inspire me to be better 🏃
          </m.p>
          <m.p
            style={{
              color: 'black',
              alignSelf: 'center',
              opacity: 0,
              fontWeight: 500,
            }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 15,
            }}
          >
            Hence proven!
            <br />
            <m.button
              style={{
                marginTop: '2vh',
                padding: '1vh',
                borderRadius: '3vh',
                width: '20vh',
                height: '7vh',
                backgroundColor: '#dee1f8',
                borderStyle: 'none',
                border: '10px',
                boxShadow: `rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0`,
                boxSizing: `border-box`,
                color: `#3c4043`,
                textAlign: 'center',
                fontSize: '1.5vh',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                onAnimationsComplete();
              }}
              type="button"
            >
              Press me to eat <br />
              some fragile male egos for breakfast!
            </m.button>
          </m.p>
        </>
      )}
    </m.div>
  );
};
