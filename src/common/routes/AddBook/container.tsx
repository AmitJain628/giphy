import actions from '@books/store/actions';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '@src/common/store/reducers';

import { IBooks } from '../Books/store/types';

export const mapStateToProps = (state: RootState): IMapStateToProps => {
  return {
    books: state.books.books
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IMapDispatchToProps => ({
  addBook(book: IBooks): void {
    dispatch(actions.addBook(book));
  }
});

export interface IMapStateToProps{
  books: IBooks[];
}

export interface IMapDispatchToProps{
  addBook(book: IBooks): void;
}
