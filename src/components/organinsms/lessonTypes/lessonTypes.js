import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import OnlineImg from 'assetes/img/image.png';
import HomeImg from 'assetes/img/image02.png';
import { Wrapper, InnerWrapper, TypeItem, TypeList, StyledDiv, StyledLink, StyledBtn } from './lessonTypes.styles';
import gsap from 'gsap/all';
import { MainContext } from 'providers/mainProvider';
import AtomIcon from 'components/atoms/atomIcon/atomIcon';

const LessonTypes = () => {
  const { setCurtainState } = useContext(MainContext);
  const tl = useRef(null);
  const tl2 = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const headingRef = useRef(null);
  const [activeCard, setActiveCard] = useState();

  React.useEffect(() => {
    tl.current = gsap.timeline();
    if (tl.current) {
      tl.current
        .set([leftCardRef.current, leftCardRef.current.children, rightCardRef.current, rightCardRef.current.children, headingRef.current], {
          opacity: 0,
        })
        .fromTo([leftCardRef.current, rightCardRef.current], { yPercent: 100 }, { yPercent: 0, opacity: 1, duration: 1, delay: 1.5 })
        .to(headingRef.current, { opacity: 1, duration: 1 })
        .to([leftCardRef.current.children, rightCardRef.current.children], { opacity: 1, duration: 1.5, stagger: 0.05 })
        .addLabel('point')
        .to(rightCardRef.current, {
          opacity: 0.5,
          duration: 0.5,
        });
    }
  }, []);

  React.useEffect(() => {
    tl2.current = gsap.timeline({ paused: true });
    tl2.current
      .addLabel('mouseEnter')
      .to(activeCard ? rightCardRef.current : leftCardRef.current, { opacity: 1, duration: 0.5 })
      .addLabel('mouseLeave')
      .to([rightCardRef.current, leftCardRef.current], { opacity: 0.5, duration: 1.5 });
  }, []);

  const mouseEnterHandler = (e) => {
    switch (e.target.parentNode.id) {
      case 'left':
        setActiveCard(false);
        break;
      case 'right':
        setActiveCard(true);
    }
    alert(activeCard);
    tl2.current.tweenFromTo('mouseEnter', 'mouseLeave');
  };
  const mouseLeaveHandler = () => {
    tl2.current.tweenFromTo('mouseLeave', 'end');
  };

  const clickHandler = () => {
    setCurtainState(true);
  };

  return (
    <>
      <AtomIcon />
      <Wrapper>
        <InnerWrapper>
          <h2 ref={headingRef}>Jakiego rodzaju zajęć szukasz ?</h2>
          <TypeList onClick={clickHandler}>
            <StyledLink to="/blue">
              <TypeItem ref={leftCardRef} id="left" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <h3>Online</h3>
                <StyledDiv>
                  <p>
                    Preferowana przeze mnie forma. W trakcie zajęć wykorzystuje <span>online whiteboard </span>co niesamowicie ułatwia współpracę.
                  </p>
                </StyledDiv>
                <img src={OnlineImg} alt="" />
                <StyledBtn>wybierz</StyledBtn>
              </TypeItem>
            </StyledLink>
            <StyledLink to="/blue">
              <TypeItem ref={rightCardRef} id="right" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <h3>U ucznia</h3>
                <StyledDiv>
                  <p>
                    Preferowana przeze mnie forma. W trakcie zajęć wykorzystuje <span>online whiteboard </span>co niesamowicie ułatwia współpracę.
                  </p>
                </StyledDiv>
                <img src={HomeImg} alt="" />
                <StyledBtn>wybierz</StyledBtn>
              </TypeItem>
            </StyledLink>
          </TypeList>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

LessonTypes.propTypes = {};

export default LessonTypes;
