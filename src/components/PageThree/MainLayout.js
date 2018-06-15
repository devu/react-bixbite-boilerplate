import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => (
  <div className={'main'}>
    <nav className={'nav'}>
      ClearScore
    </nav>
    <main className={'content'}>
      {children}
    </main>
    <footer className={'footer'}>
      Footer
    </footer>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
