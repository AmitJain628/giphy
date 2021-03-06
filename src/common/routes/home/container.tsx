import actions from '@home/store/actions';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '@src/common/store/reducers';
import { IDatum } from '@src/common/types/giphy';

import { IGiphy } from './types';

export const mapStateToProps = (state: RootState): IMapStateToProps => {
  return {
    searchData: state.home.searchData
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IMapDispatchToProps => ({
  fetchTrendingData(_giphy: IGiphy): void {
    dispatch(actions.fetchTrendingData());
  },
  searchGif(search: string): void {
    dispatch(actions.searchGiphyData(search));
  }
});

export interface IMapStateToProps{
  searchData: IDatum[];
}

export interface IMapDispatchToProps{
  fetchTrendingData(giphy?: IGiphy): void;
  searchGif(search: string): void;
}
