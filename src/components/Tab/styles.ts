import styled from "styled-components";

export const StyledTab = styled.li`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
  color: #d7e0ff;
  opacity: 0.4;
  width: 150px;
  height: 60px;
  background: transparent;
  border-radius: 26.5px;
  transition: 1s ease background, 1s ease opacity, 1s ease color;
  display: grid;
  place-items: center;
  cursor: pointer;

  
  &.active {
    color: #1e213f;
    opacity: 1;
    background: #F87070;
  }
`;
