import React, { FunctionComponent } from 'react';
import Loadable, { LoadingComponentProps } from 'react-loadable';

const loading: FunctionComponent<LoadingComponentProps> = () => null;

const Books = Loadable({
  loading,
  loader: () => import(/* webpackChunkName: 'home' */ './routes/Books')
});

const AddBook = Loadable({
  loading,
  loader: () => import(/* webpackChunkName: 'home' */ './routes/AddBook'
  )
});

const EditBook = Loadable({
  loading,
  loader: () => import(/* webpackChunkName: 'home' */ './routes/EditBook')
});

const routes: IRoutes[] = [
  {
    path: '/',
    basePath: '/',
    exact: true,
    component: Books,
  },
  {
    path: '/add',
    basePath: '/',
    exact: true,
    component: AddBook,
  },
  {
    path: '/edit',
    basePath: '/edit',
    exact: true,
    component: EditBook,
  }
];

export default routes;

export interface IRoutes {
  childRoutes?: IRoutes[];
  basePath?: string;
  path?: string;
  exact?: boolean;
  // tslint:disable-next-line:no-any
  component?: React.ComponentType<any>;
  loadData?(): Generator;
}
