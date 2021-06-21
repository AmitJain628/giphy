import apiCaller from '@common/utils/apiCaller';
import { IBooks } from '@books/store/types';

// tslint:disable-next-line:no-any
export const fetchBooksService = async (): Promise<IBooks[] | any> => {
    try {
      const url = '/books';

      return await apiCaller.get(url);
    // tslint:disable-next-line:no-useless-catch
    } catch (error) {
        throw error;
    }
  };

  // tslint:disable-next-line:no-any
export const addBookService = async (book: IBooks): Promise<IBooks[] | any> => {
  try {
    const url = '/books';

    return await apiCaller.post(url, book);
  // tslint:disable-next-line:no-useless-catch
  } catch (error) {
      throw error;
  }
};
