import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    element: lazy(() => import('./Home')),
  },
  {
    path: '/about',
    exact: true,
    element: lazy(() => import('./About')),
  },
];

export default routes;
