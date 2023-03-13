import React, { PropsWithChildren, ReactNode } from 'react';

interface ITabContent {
  id: string;
  activeTab: string;
  children: ReactNode;
}

const TabContent = ({
  id,
  activeTab,
  children,
}: PropsWithChildren<ITabContent>) =>
  activeTab === id ? <div className='TabContent'>{children}</div> : null;

export default TabContent;
