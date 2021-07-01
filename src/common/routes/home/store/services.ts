import apiCaller from '@common/utils/apiCaller';
import { IResponse } from '@home/store/types';
import apiEndpoints from '@common/constants/apiEndpoints';
import appConstants from '@common/constants/appConstants';

// tslint:disable-next-line:no-any
export const fetchTrendingGiphyService = async (limit: number, offset: number): Promise<IResponse[] | any> => {
    try {
      const url = `${appConstants.BASE_URL}${apiEndpoints.GIPHY.GET_TRENDING.URL(appConstants.API_KEY, limit, offset)}`;

      return await apiCaller.get(url);
    // tslint:disable-next-line:no-useless-catch
    } catch (error) {
        throw error;
    }
};

// tslint:disable-next-line:no-any
export const searchGiphyService = async (query: string, limit: number, offset: number): Promise<IResponse[] | any> => {
  try {
    const url = `${appConstants.BASE_URL}${apiEndpoints.GIPHY.SEARCh_TRENDING.URL(appConstants.API_KEY, query, limit, offset)}`;

    return await apiCaller.get(url);
  // tslint:disable-next-line:no-useless-catch
  } catch (error) {
      throw error;
  }
};
