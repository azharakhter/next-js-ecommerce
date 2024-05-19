// components/Layout.tsx

import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// Define the props type
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
