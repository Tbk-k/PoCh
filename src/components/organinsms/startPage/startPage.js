import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';
import { useRef } from 'react';
import atomIcon from 'assetes/img/atom.png';
import ClickBtn from 'components/atoms/clickBtn/clickBtn';
import Intro from 'components/atoms/intro/intro';
import { StyledImg } from 'components/atoms/atomIcon/atomIcon';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr 200px;
  grid-template-areas: '...' 'content' 'btn';
`;

const InnerWrapper = styled.div`
  grid-area: content;
  font-family: 'Fredericka the Great', cursive;
  justify-self: center;
  align-self: center;
  width: fit-content;
`;

const Caption = styled.div`
  font-size: ${({ theme }) => theme.font.size.h};
  color: ${({ theme }) => theme.colors.tealGreen};
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 20px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.hLarge};
  }

  span {
    color: ${({ theme }) => theme.colors.indigo};
  }
`;

const Text = styled.div`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 1rem;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.p};
  }
`;

const StartPage = () => {
  const captionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  React.useEffect(() => {
    gsap.fromTo(imgRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, delay: 3, rotate: 360 });
    gsap.set([captionRef.current, textRef.current.children], { yPercent: 100, opacity: 0 });
    gsap.to(captionRef.current, { yPercent: 0, opacity: 1, duration: 1, delay: 2.2 });
    gsap.to(textRef.current.children, { yPercent: 0, opacity: 1, stagger: 0.1, duration: 1, delay: 2.5 });
  }, []);

  const scrollHandler = (e) => {
    console.log(e.deltaY);
  };

  return (
    <>
      <Intro />
      <StyledImg src={atomIcon} ref={imgRef} />
      <Wrapper onScroll={scrollHandler}>
        <InnerWrapper>
          <Caption ref={captionRef}>
            <span>P</span>an <span>O</span>d <br></br>
            <span>Ch</span>emii
          </Caption>
          <Text ref={textRef}>
            <div>
              Cześć, jestem korepetytorem chemii z kilkuletnim doświadczniem.<br></br>
            </div>
            <div>
              Jeżeli szukasz pomocy w przydotowaniu do matury<br></br>
            </div>
            <div>bądź chemia w szkole sprawia ci problemy zapraszam do kontatku.</div>
          </Text>
        </InnerWrapper>
        <ClickBtn />
      </Wrapper>
    </>
  );
};

StartPage.propTypes = {};

export default StartPage;
