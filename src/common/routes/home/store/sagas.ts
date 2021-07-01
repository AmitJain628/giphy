import { put, takeLatest } from 'redux-saga/effects';
import { Effect } from 'redux-saga';
import CONSTANTS from '@home/store/constants';
import actions from '@home/store/actions';
import { fetchTrendingGiphyService, searchGiphyService } from '@home/store/services';

export type SagaIterator = IterableIterator<
Effect | Effect[] | Promise<void>
>;

export function* fetchTrendingGiphyData(): SagaIterator {
    try {
     yield put(actions.setLoading(true));
     // tslint:disable-next-line:no-any
     const response: any = yield fetchTrendingGiphyService(10, 1);
     yield put(actions.setLoading(false));
     if (response && response.data) {
        // tslint:disable-next-line:no-commented-code
         yield put(actions.setTrendingData(response.data));
         yield put(actions.setPaginationData(response.data));
     }
    } catch (err) {
      yield put(actions.setLoading(false));
      console.log(err);
      throw err;
    }
 }

 // tslint:disable-next-line:no-any
 export function* searchGiphyData(payload: any): SagaIterator {
  try {
   console.log('i m payload', payload);
   yield put(actions.setLoading(true));
   // tslint:disable-next-line:no-any
   const response: any = yield searchGiphyService(payload.payload, 10, 1);
   if (response && response.data) {
      yield put(actions.setSearchGiphyData(response.data));
   }
   yield put(actions.setLoading(false));
  } catch (err) {
    yield put(actions.setLoading(false));
    console.log(err);
    throw err;
  }
}

function* watcherSaga(): Generator {
    yield takeLatest(CONSTANTS.FETCH_DATA, fetchTrendingGiphyData);
    yield takeLatest(CONSTANTS.SEARCH_GIPHY_DATA, searchGiphyData);
}
export default watcherSaga;
