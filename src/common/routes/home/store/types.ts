import { IGiphy } from '../types';

export interface IHomeState {
  isLoading: boolean;
}

export interface IResponse {
  data: IGiphy[];
}
