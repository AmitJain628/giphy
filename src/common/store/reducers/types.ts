import { IHomeState } from '@home/store/types';
import { IBookState } from '@src/common/routes/Books/store/types';

export interface IMainState {
  home: IHomeState;
  books: IBookState;
}
