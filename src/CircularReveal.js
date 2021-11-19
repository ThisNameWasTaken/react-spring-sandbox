import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

function CircularReveal() {
  const [{ scale }, animation] = useSpring(() => ({ scale: 0 }));
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    animation.start({ scale: toggle ? 1 : 0 });
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
        style={{
          // border: '2px solid #345',
          width: 700,
          height: 700,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '2rem',
          willChange: 'transform',
          scale,
        }}
      >
        <animated.div
          style={{
            width: 400,
            height: 500,
            boxShadow: '0 8px 20px rgba(5, 143, 67, .15)',
            borderRadius: 40,
            padding: '1rem 2rem',
            boxSizing: 'border-box',
            willChange: 'transform',
            scale: scale.to((scale) => 1 / scale),
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
          <h1 style={{ margin: '.5rem 0' }}>Lorem ipsum dolor</h1>
          <p style={{ fontSize: '1.15rem' }}>
            Consectetur adipisicing elit. Natus qui recusandae illum nihil enim
            eveniet accusantium maiores. Ut error autem doloribus nisi in esse,
            iusto, facere aliquid, nulla saepe nostrum!
          </p>
        </animated.div>
      </animated.div>

      <button
        onClick={() => setToggle(!toggle)}
        style={{
          backgroundColor: '#96fbc4',
          backgroundImage: 'linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1rem',
          boxShadow: '0 8px 20px rgba(5, 143, 67, .15)',
          border: 'none',
          borderRadius: '.75rem',
          padding: '1rem 2rem',
          margin: '1rem',
          cursor: 'pointer',
        }}
      >
        toggle
      </button>
    </div>
  );
}

export default CircularReveal;
