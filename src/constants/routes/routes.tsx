import React from 'react';

const DialogsPage = React.lazy(() => import('../../pages/Dialogs/DialogsPage'));
const DialogPage = React.lazy(() => import('../../pages/Dialog/DialogPage'));
const LoginPage = React.lazy(() => import('../../pages/Login/LoginPage'));
export const ProfilePage = React.lazy(() => import('../../pages/Profile/ProfilePage'));
const UsersPage = React.lazy(() => import('../../pages/Users/UsersPage'));

export const routes = [
    {
        path: '/dialogs',
        component: <DialogsPage/>,
    },
    {
        path: '/dialog',
        component: <DialogPage/>,
    },
    // {
    //     path: "/error",
    //     component: ErrorPage,
    // },
    {
        path: '/login',
        component: <LoginPage/>,
    },
    // {
    //     path: '/profile',
    //     component: <ProfilePage/>,
    // },
    {
        path: '/users',
        component: <UsersPage/>,
    },
];
