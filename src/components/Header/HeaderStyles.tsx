import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1f); */
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  @media ${(props) => props.theme.breakpoints.md_min} {
    display: none;
  }
`;

export const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: absolute;
  z-index: 1;
  background-color: #1c273d;
  width: auto;
  justify-content: center;
  align-items: center;
  margin: 40px 0px 0px 5px;
  padding: 3px;
`;

export const NavLink = styled.a`
  font-size: 1.5rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #4dcbf1;
    opacity: 1;
    cursor: pointer;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
