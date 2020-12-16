import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home/HomaPage.js'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

const routesPath = {
  HOME: '/',
  REGISTER: '/register',
  LOGIN: '/login',
  CONTACTS: '/contacts',
  // NOTFOUND: "/notFound",
};

const routes = [
  {
    path: routesPath.HOME,
    exact: true,
    component: HomePage,
    private: false,
    restricted: false,
  },
  {
    path: routesPath.REGISTER,
    exact: true,
    component: RegisterPage,
    private: false,
    restricted: true,
  },
  {
    path: routesPath.LOGIN,
    exact: true,
    component: LoginPage,
    private: false,
    restricted: true,
  },
  {
    path: routesPath.CONTACTS,
    exact: true,
    component: ContactsPage,
    private: false,
    restricted: false,
  },
  {
    // path: routesPath.NOTFOUND,
    exact: true,
    component: NotFoundPage,
    private: false,
    restricted: false,
  },
];

export { routes, routesPath };
