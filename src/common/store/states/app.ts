import { RootState } from '@common/store/reducers';
import homeState from '@home/store/state';
import booksState from '@books/store/state';

export default (): RootState => ({
  home: homeState(),
  books: booksState()
});
