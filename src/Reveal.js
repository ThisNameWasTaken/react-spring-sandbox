import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

function Reveal() {
  const [{ scaleX, scaleY }, animation] = useSpring(() => ({
    scaleX: 0.25,
    scaleY: 0.25,
  }));
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    animation.start({ scaleX: toggle ? 1 : 0.2, delay: toggle ? 0 : 100 });
    animation.start({ scaleY: toggle ? 1 : 0.2, delay: toggle ? 100 : 0 });
    return function destroy() {
      animation.stop();
    };
  }, [toggle]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <animated.div
        onClick={() => setToggle(!toggle)}
        style={{
          // border: '2px solid #345',
          width: 400,
          height: 500,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '2rem',
          willChange: 'transform',
          filter: 'drop-shadow(0 8px 20px rgba(5, 143, 67, .15))',
          // boxShadow: '0 8px 20px rgba(5, 143, 67, .15)',
          borderRadius: 40,
          cursor: 'pointer',

          scaleX,
          scaleY,
        }}
      >
        <animated.div
          style={{
            width: 400,
            height: 500,
            transformOrigin: 'center 10%',
            // filter: 'drop-shadow(0 8px 20px rgba(5, 143, 67, .15))',
            background: '#fff',
            borderRadius: 40,
            padding: '1rem 2rem',
            boxSizing: 'border-box',
            willChange: 'transform',
            scaleX: scaleX.to((scaleX) => 1 / scaleX),
            scaleY: scaleY.to((scaleY) => 1 / scaleY),
          }}
        >
          <div
            style={{
              width: '100%',
              paddingBottom: '70%',
              backgroundColor: '#96fbc4',
              backgroundImage:
                'linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)',
              marginTop: '1rem',
              borderRadius: '20px 20px 4px 4px',
            }}
          />
          <h1 style={{ margin: '.5rem 0', color: 'hsl(147, 93%, 9%)' }}>
            Lorem ipsum dolor
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'hsl(147, 93%, 9%)' }}>
            Consectetur adipisicing elit. Natus qui recusandae illum nihil enim
            eveniet accusantium maiores. Ut error autem doloribus nisi in esse,
            iusto, facere aliquid, nulla saepe nostrum!
          </p>
        </animated.div>
      </animated.div>
    </div>
  );
}

export default Reveal;
