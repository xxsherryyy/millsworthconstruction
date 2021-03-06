import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import config from 'react-reveal/globals';
import preset from '@rebass/preset';
import colors from '../../colors';
import roof from './Logo/roof.jpg';
import bgvideo from '../components/Logo/bgvideo.mp4';
import Helmet from './Helmet';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Poppins, Cabin, 'Open Sans', sans-serif;
    overflow-x: hidden;
    width: 100vw;
    background-image: src=("${bgvideo}");
    background-size: 'cover'
    color: ${(props) => props.theme.colors.text};
  }
`;

config({ ssrFadeout: true });

const loadScript = (src) => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
};

const theme = {
  ...preset,
  colors,
  fonts: {
    body: 'Poppins, Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

const Layout = ({ children }) => {
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);

  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ScrollingProvider>
          <Helmet />
          {children}
        </ScrollingProvider>
      </ThemeProvider>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
