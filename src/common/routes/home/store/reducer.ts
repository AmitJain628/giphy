import CONSTANTS from '@home/store/constants';
import initialState from '@home/store/state';
import withProduce from '@utils/withProduce';
import { AnyAction, Reducer } from 'redux';
import { IHomeState } from '@home/store/types';

const reducers = {
  [CONSTANTS.SET_LOADING]: (state: IHomeState, payload: boolean) => {
    console.log('payloadd');
    state.isLoading = payload;
  },
  [CONSTANTS.SET_DATA]: (state: IHomeState, payload: boolean) => {
    console.log('payloadd  dsds');
    state.isLoading = payload;
  }
};

export default withProduce(initialState, reducers) as Reducer<
  IHomeState,
  AnyAction
>;
