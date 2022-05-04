import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const FormItems = styled.ul`
list-style: none;
padding-inline-start: 0;
width: 90%;
margin: 0 auto;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: center;
max-height: 550px;
max-width: 1400px;
`;

export const FormItem = styled.li`
position: relative;
background-color: #f6f5f3;
border-radius: 16px;
div:first-child {
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 0.75rem 1rem;
}
label {
  font-size: ${({ theme }) => theme.font.size.p};
}
span {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: transparent;
  top: 0;
}
`;

export const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem;
input {
  width: 60%;
  padding: 0.5rem;
  padding-left: 0;
  background-color: inherit;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: 'Darker Grotesque', sans-serif;
    font-size: ${({ theme }) => theme.font.size.p};
  }
}
button {
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Fredericka the Great', cursive;
}
`;

export const ButtonWrapper = styled.div`
padding: 1.25rem;
width: 300px;
display: flex;
justify-content: space-between;
button {
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Fredericka the Great', cursive;
}
`;