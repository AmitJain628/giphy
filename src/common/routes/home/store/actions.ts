import { actionCreator } from '@src/common/utils/actionCreator';
import CONSTANTS from '@home/store/constants';

export default {
  setLoading: actionCreator<boolean>(CONSTANTS.SET_LOADING),
  fetchTrendingData: actionCreator<void>(CONSTANTS.FETCH_DATA),
  setTrendingData: actionCreator<void>(CONSTANTS.SET_DATA),
  searchGiphyData: actionCreator<void>(CONSTANTS.SEARCH_GIPHY_DATA),
  setSearchGiphyData: actionCreator<void>(CONSTANTS.SET_SEARCH_GIPHY_DATA)
};
