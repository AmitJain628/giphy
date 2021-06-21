import { actionCreator } from '@src/common/utils/actionCreator';
import CONSTANTS from '@books/store/constants';
import { IBooks } from '@books/store/types';

export default {
  fetchBooks: actionCreator<void>(CONSTANTS.FETCH_BOOKS),
  fetchBooksRequest: actionCreator<void>(CONSTANTS.FETCH_BOOKS_REQUEST),
  fetchBooksResponse: actionCreator<IBooks[]>(CONSTANTS.FETCH_BOOKS_RESPONSE),
  addBook: actionCreator<IBooks>(CONSTANTS.ADD_BOOK),
  addBookRequest: actionCreator<void>(CONSTANTS.ADD_BOOK_REQUEST),
  addBookResponse: actionCreator<void>(CONSTANTS.ADD_BOOK_RESPONSE)
};
