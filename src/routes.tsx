import { RouteObject } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Car from './pages/Car';
import Home from './pages/Home';
import Nicar from './pages/Nicar';
import Soundboard from './pages/Soundboard';

const routes: RouteObject[] = [
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: '/car', element: <Car />, errorElement: <ErrorPage /> },
  { path: '/soundboard', element: <Soundboard />, errorElement: <ErrorPage /> },
  { path: '/nicar', element: <Nicar />, errorElement: <ErrorPage /> }
];

export default routes;
