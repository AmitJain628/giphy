import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { IDatum } from '@src/common/types/giphy';
import { RouteComponentProps } from 'react-router-dom';

import { mapDispatchToProps, mapStateToProps } from './container';
import { StyledDiv } from './style';

interface IProps extends RouteComponentProps {
    trendingData: IDatum[];
    fetchTrendingData(): void;
}

const Trending: React.FC<IProps> = ({trendingData, fetchTrendingData}): JSX.Element => {

    console.log('hiii', trendingData);
    useEffect(() => {
        fetchTrendingData();
    }, []);

    return (
        <StyledDiv>
            {
             trendingData && trendingData.map((trend: IDatum) => (
                        <div key={trend.id} className='gif-block' ><img src={trend.images.original.url} /></div>
             ))
            }
        </StyledDiv>
    );
};

export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Trending)
  );
