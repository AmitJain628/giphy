import actions from '@home/store/actions';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '@src/common/store/reducers';

import { IGiphy } from './types';

export const mapStateToProps = (state: RootState): IMapStateToProps => {
  return {
    isLoading: state.home.isLoading
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IMapDispatchToProps => ({
    fetchData(_giphy: IGiphy): void {
    dispatch(actions.fetchData());
  }
});

export interface IMapStateToProps{
    isLoading: boolean;
}

export interface IMapDispatchToProps{
    fetchData(giphy: IGiphy): void;
}
