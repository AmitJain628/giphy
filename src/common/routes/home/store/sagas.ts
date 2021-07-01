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
     const response: any = yield fetchTrendingGiphyService(10, 0);
     yield put(actions.setLoading(false));
     if (response && response.data) {
        yield put(actions.setTrendingData(response.data));
     }
    } catch (err) {
      yield put(actions.setLoading(false));
      console.log(err);
      throw err;
    }
 }

 export function* searchGiphyData(): SagaIterator {
  try {
   yield put(actions.setLoading(true));
   // tslint:disable-next-line:no-any
   const response: any = yield searchGiphyService(0, 0);
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
}
export default watcherSaga;
