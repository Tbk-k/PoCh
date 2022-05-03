import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
  }
`;

const Blue = () => {
  return (
    <Wrapper>
      <h2>to jest niebieski element</h2>
    </Wrapper>
  );
};

Blue.propTypes = {};

export default Blue;
