import { IBookState } from '@books/store/types';

export default (): IBookState => ({
  isLoading: true,
  books: [],
  isCheck: false
});
