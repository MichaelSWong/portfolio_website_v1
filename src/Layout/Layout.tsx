import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React, { PropsWithChildren } from 'react';
import { Container } from './LayoutStyles';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
