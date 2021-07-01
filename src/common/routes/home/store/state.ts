import { IHomeState } from '@home/store/types';

export default (): IHomeState => ({
  isLoading: true,
  trendingData: [],
  searchData: [],
  pagination: {
    count: 0,
    offset: 0
  }
});
