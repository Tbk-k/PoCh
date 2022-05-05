import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  h2 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.p};
    margin-left: 4vw;
  }
  ${({ theme }) => theme.mq.desktop} {
    h2 {
      font-size: ${({ theme }) => theme.font.size.pLarge};
    }
  } ;
`;

export const TypeList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: inline-flex;
  margin: 0 auto;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: mandatory;
  overflow-y: hidden;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
  &.active {
    opacity: 1;
  }
  &.hidden {
    opacity: 0.15;
  }
  &.neutral {
    opacity: 0.5;
  }
`;

export const TypeItem = styled.li`
  text-decoration: none;
  background-color: #f6f5f3;
  min-width: 230px;
  max-width: 550px;
  margin-left: 15px;
  height: 450px;
  border-radius: 16px;
  cursor: pointer;
  width: 80%;
  display: grid;
  grid-template-areas: 'heading' 'text' 'image' 'button';
  grid-template-rows: 50px 1fr 130px 60px;
  position: relative;
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    z-index: 10;
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  h3 {
    grid-area: heading;
    font-size: ${({ theme }) => theme.font.size.p};
    margin: 0;
    align-self: center;
    padding: 0 0 0.5rem 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
  img {
    width: 80%;
    grid-area: image;
    justify-self: center;
    align-self: flex-end;
    max-height: 130px;
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 550px;
    h3 {
      font-size: ${({ theme }) => theme.font.size.pLarge};
    }
  }
`;

export const StyledBtn = styled.button`
  grid-area: button;
  border: none;
  background-color: inherit;
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Fredericka the Great', cursive;
  width: fit-content;
  height: fit-content;
  justify-self: center;
  align-self: center;
  ${({ theme }) => theme.mq.desktop} {
    font-size: 20px;
  } ;
`;

export const StyledDiv = styled.div`
  grid-area: text;
  width: 80%;
  justify-self: center;
  align-self: center;
  font-size: ${({ theme }) => theme.font.size.p};
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.pLarge};
  } ;
`;
