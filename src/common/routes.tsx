import React, { FunctionComponent } from 'react';
import Loadable, { LoadingComponentProps } from 'react-loadable';

const loading: FunctionComponent<LoadingComponentProps> = () => null;

const Home = Loadable({
  loading,
  loader: () => import(/* webpackChunkName: 'home' */ './routes/home')
});

const Trending = Loadable({
  loading,
  loader: () => import(/* webpackChunkName: 'trending' */ './routes/trending')
});

const routes: IRoutes[] = [
  {
    path: '/',
    basePath: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/trending',
    basePath: '/',
    exact: true,
    component: Trending,
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
