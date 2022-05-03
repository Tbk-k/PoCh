import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap/all';
import { MainContext } from 'providers/mainProvider';

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 100;
`;

const Curtain = () => {
  const tl = useRef(null);
  const wrapperRef = useRef(null);
  const { setCurtainState, isCurtainTime } = useContext(MainContext);

  React.useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.set(wrapperRef.current, { opacity: 0, yPercent: 100 });
    if (tl.current && isCurtainTime) {
      tl.current.set(wrapperRef.current, { yPercent: 100, opacity: 1 }).to(wrapperRef.current, {
        keyframes: [
          { yPercent: 0, duration: 0.5 },
          { opacity: 0, duration: 0.5, delay: 0.4 },
          {
            yPercent: 100,
            onComplete: () => {
              setCurtainState(false);
            },
          },
        ],
      });
    }
  }, [isCurtainTime]);

  return <Wrapper ref={wrapperRef} />;
};

Curtain.propTypes = {};

export default Curtain;
