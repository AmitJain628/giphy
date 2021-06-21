import actions from '@books/store/actions';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '@src/common/store/reducers';

import { IMapDispatchToProps, IMapStateToProps } from './store/types';

export const mapStateToProps = (state: RootState): IMapStateToProps => {
  return {
    books: state.books.books
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IMapDispatchToProps => ({
  fetchBooks(): void {
    dispatch(actions.fetchBooks());
  }
});
