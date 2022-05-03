import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from './components/templates/mainTemplate';
import HeadTag from 'components/atoms/headingTag/headingTag';
import { MemoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Curtain from 'components/atoms/curtain/curtain';
import MainProvider from 'providers/mainProvider';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Root = () => {
  return (
    <Wrapper>
      <MainProvider>
        <Router>
          <HeadTag />
          <MainTemplate />
        </Router>
      </MainProvider>
    </Wrapper>
  );
};

Root.propTypes = {};

export default Root;
