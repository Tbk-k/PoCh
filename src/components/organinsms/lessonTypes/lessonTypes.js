import React, { useContext, useRef } from 'react';
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
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const leftLinkRef = useRef(null);
  const rightLinkRef = useRef(null);
  const headingRef = useRef(null);

  React.useEffect(() => {
    tl.current = gsap.timeline();
    if (tl.current) {
      tl.current
        .set([leftCardRef.current.children, rightCardRef.current.children, headingRef.current], {
          opacity: 0,
        })
        .fromTo([leftCardRef.current, rightCardRef.current], { yPercent: 100 }, { yPercent: 0, duration: 1, delay: 1.5 })
        .to(headingRef.current, { opacity: 1, duration: 1 })
        .to([leftCardRef.current.children, rightCardRef.current.children], { opacity: 1, duration: 1.5, stagger: 0.05 });
      tl.current.addPause();
    }
  }, []);

  const clickHandler = () => {
    setCurtainState(true);
  };

  const mouseEnterHandler = (e) => {
    leftLinkRef.current.classList.remove('active', 'neutral', 'hidden');
    rightLinkRef.current.classList.remove('active', 'neutral', 'hidden');
    switch (e.target.id) {
      case 'right':
        leftLinkRef.current.classList.add('hidden');
        rightLinkRef.current.classList.add('active');
        break;
      case 'left':
        leftLinkRef.current.classList.add('active');
        rightLinkRef.current.classList.add('hidden');
        break;
    }
  };

  const mouseLeaveHandler = () => {
    leftLinkRef.current.classList.remove('active', 'hidden');
    rightLinkRef.current.classList.remove('active', 'hidden');
    leftLinkRef.current.classList.add('neutral');
    rightLinkRef.current.classList.add('neutral');
  };

  return (
    <>
      <AtomIcon />
      <Wrapper>
        <InnerWrapper id="neutral">
          <h2 ref={headingRef}>Jakiego rodzaju zajęć szukasz ?</h2>
          <TypeList onClick={clickHandler}>
            <StyledLink to="/contact-form" ref={leftLinkRef}>
              <TypeItem ref={leftCardRef} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="neutral">
                <span id="left" />
                <h3>Online</h3>
                <StyledDiv>
                  <p>
                    Preferowana przeze mnie forma. W trakcie zajęć wykorzystuje
                    <u>
                      <b>online whiteboard </b>
                    </u>
                    co niesamowicie ułatwia współpracę.
                  </p>
                </StyledDiv>
                <img src={OnlineImg} alt="" />
                <StyledBtn>wybierz</StyledBtn>
              </TypeItem>
            </StyledLink>
            <StyledLink to="/contact-form" ref={rightLinkRef} className="neutral">
              <TypeItem ref={rightCardRef} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <span id="right" />
                <h3>U ucznia</h3>
                <StyledDiv>
                  <p>
                    Preferowana przeze mnie forma. W trakcie zajęć wykorzystuje
                    <u>
                      <b>online whiteboard </b>
                    </u>
                    co niesamowicie ułatwia współpracę.
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
