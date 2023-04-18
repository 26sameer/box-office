import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Poppins, sans-serif',
  fontFamilyMain: 'DynaPuff, sans-serif',
  mainColors: {
    blue: '#8c00ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }
  h1,h2{
    font-family: ${({ theme }) => theme.fontFamilyMain};
  }
`;

export const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
