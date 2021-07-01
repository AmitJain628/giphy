import { IDatum, IPagination } from '@src/common/types/giphy';
import { IGiphy } from '@common/types/giphy';

export interface IHomeState {
  isLoading: boolean;
  trendingData: IDatum[];
  searchData: IDatum[];
  pagination: IPagination;
}

export interface IResponse {
  data: IGiphy[];
}
