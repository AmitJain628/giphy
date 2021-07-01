import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@common/globalStyle';
import { darkTheme, lightTheme } from '@common/theme';

import { StyledGrid } from './styles';
import { mapDispatchToProps, mapStateToProps } from './container';
import { IGiphy } from './types';

interface IProps extends RouteComponentProps {
  isLoading: boolean;
  fetchTrendingData(giphy?: IGiphy): void;
}

const Home: React.FC<IProps> = ({ isLoading, fetchTrendingData }): JSX.Element => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    console.log('isLoading', isLoading, themeToggler);
    fetchTrendingData();
  }, []);

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
        <GlobalStyles />
        <StyledGrid>
          <div>
            I am home
            {/* <button onClick={themeToggler}>Switch Theme</button> */}
          </div>
        </StyledGrid>
        </>
       </ThemeProvider>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
