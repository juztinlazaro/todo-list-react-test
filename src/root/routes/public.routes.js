import { lazy } from 'react';

import Home from '@app/Module/Home/Home';
import Login from '@app/Module/Login/Login';

const Test = lazy(() => import('@app/Module/Test/Test'));

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/test',
    component: Test,
    async: true,
  },
  {
    path: '/login',
    component: Login,
  },
];

export default publicRoutes;
