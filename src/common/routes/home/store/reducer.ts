import CONSTANTS from '@home/store/constants';
import initialState from '@home/store/state';
import withProduce from '@utils/withProduce';
import { AnyAction, Reducer } from 'redux';
import { IHomeState } from '@home/store/types';
import { IGiphy } from '@src/common/types/giphy';

const reducers = {
  [CONSTANTS.SET_LOADING]: (state: IHomeState, payload: boolean) => {
    console.log('payloadd');
    state.isLoading = payload;
  },
  [CONSTANTS.SET_TREDNING_DATA]: (state: IHomeState, payload: IGiphy) => {
    state.trendingData = payload.data;
  },
  [CONSTANTS.SET_SEARCH_GIPHY_DATA]: (state: IHomeState, payload: IGiphy) => {
    state.searchData = payload.data;
  },
  [CONSTANTS.SET_PAGINATION_DATA]: (state: IHomeState, payload: IGiphy) => {
    state.pagination = payload.pagination;
  }
};

export default withProduce(initialState, reducers) as Reducer<
  IHomeState,
  AnyAction
>;
