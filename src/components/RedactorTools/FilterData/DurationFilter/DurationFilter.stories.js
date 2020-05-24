import React from 'react';

import DurationFilter from './';
import SidebarWrapper from 'components/Sidebar/SidebarWrapper';

export default {
  title: 'Filter Data/Duration Filter',
};

export const Default = () => (
  <SidebarWrapper>
    <DurationFilter />
  </SidebarWrapper>
);
