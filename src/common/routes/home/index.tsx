import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@common/globalStyle';
import { darkTheme, lightTheme } from '@common/theme';
import { IDatum } from '@src/common/types/giphy';

import {  StyledDiv, StyledGrid } from './styles';
import { mapDispatchToProps, mapStateToProps } from './container';

interface IProps extends RouteComponentProps {
  searchData: IDatum[];
  searchGif(search: string): void;
}

const Home: React.FC<IProps> = ({ searchData, history, searchGif }): JSX.Element => {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const navigateToTrending = () => {
    history.push('/trending');
  };

  const searchGiphy = () => {
    searchGif(search);
  };

  console.log('isLoading', searchData);

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
        <GlobalStyles />
        <StyledGrid>
          <div>
            <input type='text' value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={searchGiphy}>Search</button>
            <button onClick={navigateToTrending}>Navigate to trending</button>
            <button onClick={themeToggler}>Switch Theme</button>
            {/* <button onClick={themeToggler}>Switch Theme</button> */}
            <StyledDiv>
            {
             searchData && searchData.map((trend: IDatum) => (
                        <div key={trend.id} className='gif-block' ><img src={trend.images.original.url} /></div>
             ))
            }
         </StyledDiv>
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
