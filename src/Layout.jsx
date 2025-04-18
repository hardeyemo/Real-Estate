// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
