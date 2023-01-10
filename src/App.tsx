import React, { Fragment } from 'react';

import { GlobalStyles } from 'global/styles';
import { Main } from 'components';
import { ThemeProvider } from 'styled-components';
import { themeObject } from 'global/theme';
import { useAppSelector } from 'app/hooks';

function App() {
  const { color, font } = useAppSelector(state => state.settings)

  const theme = {
    color: themeObject[color].color,
    font: themeObject[font].font
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
      <GlobalStyles />
    </Fragment>
  );
}

export default App;
