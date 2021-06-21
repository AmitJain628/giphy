import CONSTANTS from '@books/store/constants';
import initialState from '@books/store/state';
import withProduce from '@utils/withProduce';
import { AnyAction, Reducer } from 'redux';
import { IBooks, IBookState } from '@books/store/types';

const reducers = {
  [CONSTANTS.FETCH_BOOKS_REQUEST]: (state: IBookState, payload: boolean) => {
    state.isLoading = payload;
  },
  [CONSTANTS.FETCH_BOOKS_RESPONSE]: (state: IBookState, payload: IBooks[]) => {
    state.books = payload;
  }
};

export default withProduce(initialState, reducers) as Reducer<
  IBookState,
  AnyAction
>;
