import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 95vw;
    height: 95vh;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 16px;
    position: relative;
`

const PageCard = ({children}) => {

return(
    <Wrapper>
        {children}
    </Wrapper>
)};

PageCard.propTypes = {};

export default PageCard;
