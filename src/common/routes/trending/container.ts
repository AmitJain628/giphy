import actions from '@home/store/actions';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '@src/common/store/reducers';
import { IDatum } from '@src/common/types/giphy';

export const mapStateToProps = (state: RootState): IMapStateToProps => {
  return {
    trendingData: state.home.trendingData
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IMapDispatchToProps => ({
  fetchTrendingData(): void {
    dispatch(actions.fetchTrendingData());
  }
});

export interface IMapStateToProps{
    trendingData: IDatum[];
}

export interface IMapDispatchToProps{
  fetchTrendingData(): void;
}
