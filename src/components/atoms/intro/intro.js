import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';
import { useRef } from 'react';
import atomIcon from 'assetes/img/atom.png';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  top: 0;
  border-radius: 16px;
  transform: scale(1.2);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }
`;

const Intro = () => {
  const captionRef = useRef(null);
  React.useEffect(() => {
    gsap.to(captionRef.current.children, {
      keyframes: [
        { scale: 1 },
        { scale: 1.2, delay: 0.5, duration: 0.5, rotate: 90 },
        {
          scale: 0,
          duration: 0.8,
          rotate: 180,
        },
      ],
    });
    gsap.to(captionRef.current, { keyframes: [{ scale: 1, duration: 1, delay: 1.5 }, { display: 'none' }] });
  }, []);
  return (
    <Wrapper ref={captionRef}>
      <img src={atomIcon} alt="" />
    </Wrapper>
  );
};

Intro.propTypes = {};

export default Intro;
