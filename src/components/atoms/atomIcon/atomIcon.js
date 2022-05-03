import React from 'react';
import atomIcon from 'assetes/img/atom.png';
import styled from 'styled-components';

export const StyledImg = styled.img`
  width: 30px;
  position: absolute;
  top: 20px;
  left: 30px;
`;

const AtomIcon = () => {
  return <StyledImg src={atomIcon} />;
};

AtomIcon.propTypes = {};

export default AtomIcon;
