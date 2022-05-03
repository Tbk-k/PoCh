import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assetes/styles/theme';
import { GlobalStyles } from 'assetes/styles/globalStyles';
import PageCard from 'components/atoms/pageCard/pageCard';
import StartPage from 'components/organinsms/startPage/startPage';
import { Route, Routes } from 'react-router-dom';
import Blue from 'components/organinsms/blue';
import Curtain from 'components/atoms/curtain/curtain';
import LessonTypes from 'components/organinsms/lessonTypes/lessonTypes';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.teal};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const MainTemplate = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Curtain />
        <PageCard>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/red" element={<LessonTypes />} />
            <Route path="/blue" element={<Blue />} />
          </Routes>
        </PageCard>
      </Wrapper>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
