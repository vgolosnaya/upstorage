import React from 'react';
import './App.css';
import { Navigate, useRoutes } from 'react-router-dom';
import LABELS from './labels';
import HomeView from './views/HomeView';
import GalleryView from './views/GalleryView';
import SheetsView from './views/SheetsView';

export const routes = [
    {
        path: '/home',
        label: LABELS.home,
        isNavRoute: true,
        element: <HomeView />,
    }, {
        path: '/image',
        label: LABELS.image,
        isNavRoute: true,
        element: <GalleryView />,
    }, {
        path: '/sheets',
        label: LABELS.sheets,
        isNavRoute: true,
        element: <SheetsView />,
    },
    {
        path: '*',
        element: <Navigate to="/home" replace />,
    },
];

function Router() {
    return useRoutes(routes);
}

export default Router;
