import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { MainContext } from 'providers/mainProvider';

const Wrapper = styled(Link)`
  grid-area: btn;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

const Mouse = styled.div`
  width: 52px;
  height: 88px;
  background-color: ${({ theme }) => theme.colors.teal};
  border-radius: 100px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 47px;
    height: 83px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.teal};
    top: 0;
    left: 0;
    z-index: 10;
    transform: translate(2.5px, 2.5px);
  }
  span:first-of-type {
    width: 52px;
    height: 88px;
    position: absolute;
    top: 0;
    background-color: ${({ theme }) => theme.colors.grey};
  }
  span:last-of-type {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.grey};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
`;

const ClickBtn = () => {
  const tl = useRef(null);
  const mouseRef = useRef(null);
  const wrapperRef = useRef(null);
  const { setCurtainState } = useContext(MainContext);

  React.useEffect(() => {
    gsap.fromTo(wrapperRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 });
    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.current
      .addLabel('animationStart')
      .to(mouseRef.current, { yPercent: 20, duration: 1 })
      .to(mouseRef.current.children[1], { yPercent: 80, duration: 1 }, 'animationStart')
      .addLabel('back')
      .fromTo(mouseRef.current.children[0], { yPercent: 100 }, { yPercent: 0, duration: 1 })
      .to([mouseRef.current, mouseRef.current.children[1]], { yPercent: 0, duration: 1 }, 'back')
      .to(mouseRef.current.children[0], { opacity: 0, duration: 1 });
  }, []);

  const clickHandler = () => {
    setCurtainState(true);
  };

  return (
    <Wrapper to="/red" ref={wrapperRef} onClick={clickHandler}>
      <span>Kliknij aby przejść</span>
      <Mouse ref={mouseRef}>
        <span />
        <span />
      </Mouse>
    </Wrapper>
  );
};

ClickBtn.propTypes = {};

export default ClickBtn;
