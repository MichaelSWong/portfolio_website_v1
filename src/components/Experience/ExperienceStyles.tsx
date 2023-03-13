import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  column-gap: 2rem;
  min-height: 200px;
`;

export const Outlet = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  margin-top: 20px;
`;

interface ITabText {
  large?: boolean;
  colorAlt?: boolean;
}

export const TabText = styled.p<ITabText>`
  font-size: ${(props) => (props.large ? '24px' : '16px')};
  line-height: 24px;
  font-weight: 200;
  color: ${(props) =>
    props.colorAlt ? '#4dcbf1' : 'rgba(255, 255, 255, 0.5)'};
  padding: 4px;
`;

export const ResumeDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 600px;
`;

export const UlNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
