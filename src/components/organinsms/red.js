import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
  }
`;

const Red = () => {
  return (
    <Wrapper>
      <h2>to jest czerwony element</h2>
    </Wrapper>
  );
};

Red.propTypes = {};

export default Red;
