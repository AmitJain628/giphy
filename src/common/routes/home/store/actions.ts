import { actionCreator } from '@src/common/utils/actionCreator';
import CONSTANTS from '@home/store/constants';

export default {
  setLoading: actionCreator<boolean>(CONSTANTS.SET_LOADING),
  fetchData: actionCreator<void>(CONSTANTS.FETCH_DATA),
  setData: actionCreator<void>(CONSTANTS.SET_DATA),
  searchData: actionCreator<void>(CONSTANTS.SEARCH_DATA)
};
