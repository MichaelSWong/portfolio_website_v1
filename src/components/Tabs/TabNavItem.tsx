import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface ITabNavItem {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

interface ILiTabNav {
  activeTab?: string;
  id?: string;
}

const LiTabNav = styled.li<ILiTabNav>`
  color: ${(props) =>
    props.activeTab === props.id ? '#4dcbf1' : 'rgba(255, 255, 255, 0.66))'};
`;

const TabNavItem = ({ id, title, activeTab, setActiveTab }: ITabNavItem) => {
  const handleClick = () => {
    setActiveTab(id);
  };
  return (
    <LiTabNav onClick={handleClick} activeTab={activeTab} id={id}>
      {title}
    </LiTabNav>
  );
};

export default TabNavItem;
