import React from 'react';
import PropTypes from 'prop-types';
import circle from "./resources/image.png"
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className = "Layout">
        {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
