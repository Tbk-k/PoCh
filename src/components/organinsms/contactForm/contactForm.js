import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gsap from 'gsap/all';
import AtomIcon from 'components/atoms/atomIcon/atomIcon';
import { Wrapper, FormItems, FormItem, StyledDiv, ButtonWrapper, StyledLink } from './contactForm.styles';
import { MainContext } from 'providers/mainProvider';

const ContactForm = () => {
  const tl = useRef(null);
  const formRef = useRef(null);
  const { setCurtainState } = useContext(MainContext);

  React.useEffect(() => {
    tl.current = gsap.timeline();
    if (tl.current) {
      tl.current
        .set(formRef.current.children, { opacity: 0, x: '-100vw', yPercent: 20 })
        .to([formRef.current.children[0], formRef.current.children[1]], { x: 0, yPercent: 0, duration: 1, opacity: 0.3, delay: 1.5, stagger: 0.2 })
        .to(formRef.current.children[0], { opacity: 1, duration: 0.5 })
        .to(formRef.current.children[0].children[1], { display: 'none' }, '-=0.25');
      tl.current.addPause();
      tl.current
        .addLabel('firstBtn')
        .to(formRef.current.children[0].children[1], { display: 'block' })
        .to(formRef.current.children[1], { opacity: 1, duration: 0.5 })
        .to(formRef.current.children[1].children[1], { display: 'none' }, '-=0.25')
        .addLabel('secondBtn')
        .to(formRef.current.children[1].children[1], { display: 'block' })
        .to(formRef.current.children[2], {
          keyframes: [
            { x: 0, yPercent: 0, opacity: 0.3, duration: 1 },
            { opacity: 1, duration: 0.5 },
          ],
        })
        .to(formRef.current.children[2].children[1], { display: 'none' }, '-=0.25')
        .addLabel('thirdBtn')
        .to(formRef.current.children[2].children[1], { display: 'block' })
        .to(formRef.current.children[3], {
          keyframes: [
            { x: 0, yPercent: 0, opacity: 0.3, duration: 1 },
            { opacity: 1, duration: 0.5 },
          ],
        })
        .to(formRef.current.children[3].children[1], { display: 'none' }, '-=0.25');
    }
  }, []);
  const [isMailSelect, setMailSelect] = useState(true);
  const clickHandler = (e) => {
    switch (e.target.id) {
      case 'first':
        tl.current.tweenFromTo('firstBtn', 'secondBtn');
        break;
      case 'second':
        tl.current.tweenFromTo('secondBtn', 'thirdBtn');
        break;
      case 'third':
        setMailSelect(true);
        tl.current.tweenFromTo('thirdBtn', 'end');

        break;
      case 'fourth':
        setMailSelect(false);
        tl.current.tweenFromTo('thirdBtn', 'end');
        break;
      case 'fifth':
        setCurtainState(true);
        break;
    }
  };
  return (
    <>
      <AtomIcon />
      <Wrapper>
        <FormItems onClick={clickHandler} ref={formRef}>
          <FormItem>
            <div>
              <label>Jak masz na imię ?</label>
            </div>
            <span></span>
            <StyledDiv>
              <input placeholder="Wpisz swoje imię" />
              <button id="first">Akceptuj</button>
            </StyledDiv>
          </FormItem>
          <FormItem>
            <div>
              <label>Jaki poziom zajęć cię interesuje ?</label>
            </div>
            <span></span>
            <StyledDiv>
              <input placeholder="Wpisz poziom zajęć" />
              <button id="second">Akceptuj</button>
            </StyledDiv>
          </FormItem>
          <FormItem>
            <div>
              <label>Jaką formę kontaktu preferujesz ?</label>
            </div>
            <span></span>
            <ButtonWrapper>
              <button id="third">Mailowy</button>
              <button id="fourth">Telefoniczny</button>
            </ButtonWrapper>
          </FormItem>
          <FormItem isMailSelect={isMailSelect}>
            <div>
              <label>Podaj {isMailSelect ? 'adres e-mail' : 'numer telefonu'} : </label>
            </div>
            <span></span>
            <StyledDiv>
              <input placeholder={isMailSelect ? 'Wpisz adres e-mail' : 'Wpisz numer telefonu'} />
              <Link to="/thanks">
                <button id="fifth">Akceptuj</button>
              </Link>
            </StyledDiv>
          </FormItem>
        </FormItems>
      </Wrapper>
    </>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
