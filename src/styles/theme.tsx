import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/themes/default';
import GlobalStyles from './globals';

const Theme = ({ children }: PropsWithChildren<unknown>) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
