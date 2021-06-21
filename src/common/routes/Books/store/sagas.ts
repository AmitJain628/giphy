import { put, takeLatest } from 'redux-saga/effects';
import { Effect } from 'redux-saga';
import CONSTANTS from '@books/store/constants';
import actions from '@books/store/actions';
import { addBookService, fetchBooksService } from '@books/store/services';
import history from '@src/client/history';

import { IBooks } from './types';

export type SagaIterator = IterableIterator<
  Effect | Effect[] | Promise<void>
>;

export function* fetchBooks(): SagaIterator {
   try {
    yield put(actions.fetchBooksRequest());
    // tslint:disable-next-line:no-any
    const response: any = yield fetchBooksService();
    if (response && response.data) {
    yield put(actions.fetchBooksResponse(response.data));
    }
   } catch (err) {
     console.log(err);
     throw err;
   }
}

export function* addBook(action: {
  type: string;
  payload: IBooks;
}): SagaIterator {
  try {
   yield put(actions.addBookRequest());

   const { payload } = action;
   // tslint:disable-next-line:no-any
   const response: any = yield addBookService(payload);
   if (response && history) {
    yield put(actions.addBookResponse(response.data));
    history.push('/');
   }
  } catch (err) {
    console.log(err);
  }
}

function* watcherSaga(): Generator {
    yield takeLatest(CONSTANTS.FETCH_BOOKS, fetchBooks);
    yield takeLatest(CONSTANTS.ADD_BOOK, addBook);

}
export default watcherSaga;
