import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { StyledGrid } from './styles';
import { mapDispatchToProps, mapStateToProps } from './container';

interface IProps extends RouteComponentProps {
  loading: boolean;
}

const Home: React.FC<IProps> = ({ loading }): JSX.Element => {
  console.log('loading', loading);

  return (
       <StyledGrid>
        <div>
          I am home
        </div>
       </StyledGrid>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
