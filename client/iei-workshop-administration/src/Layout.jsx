import React from 'react';
import PropTypes from 'prop-types';
import circle from "./resources/image.png"
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className = "Layout">
        <div class="image-container">
            <img src = {circle} alt="Layout"/>
        </div>
        {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
