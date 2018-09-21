import { css } from 'styled-components';

export enum Colors {
  light = 'hsl(0, 0%, 100%)',
  dark = 'hsl(0, 0%, 0%)',
}

export enum Sizes {
  desktop = '2560px',
  desktopL = '3840px',
  desktopM = '1920px',
  desktopS = '1600px',
  laptop = '1024px',
  laptopL = '1440px',
  laptopM = '1280px',
  mobileL = '425px',
  mobileM = '375px',
  mobileS = '320px',
  tablet = '768px',
  tabletL = '991px',
}

export const DeviceSizes = {
  desktop: `(min-width: ${Sizes.desktop})`,
  desktopL: `(min-width: ${Sizes.desktopL})`,
  desktopM: `(min-width: ${Sizes.desktopM})`,
  desktopS: `(min-width: ${Sizes.desktopS})`,
  laptop: `(min-width: ${Sizes.laptop})`,
  laptopL: `(min-width: ${Sizes.laptopL})`,
  laptopM: `(min-width: ${Sizes.laptopM})`,
  mobileL: `(min-width: ${Sizes.mobileL})`,
  mobileM: `(min-width: ${Sizes.mobileM})`,
  mobileS: `(min-width: ${Sizes.mobileS})`,
  tablet: `(min-width: ${Sizes.tablet})`,
};

export const Style = css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 300;
  }
  body {
    min-height: 100%;
    overflow-y: hidden;
    background: ${Colors.dark};
    color: ${Colors.light};
    font-family: 'Exo 2', sans-serif;
  }
  #app-root {
    min-height: 100vh;
  }
`;
