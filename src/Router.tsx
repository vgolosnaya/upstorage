import React from 'react';
import './App.css';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';

const HomeView = function HomeView() {
    return <div>Home</div>;
};
const GalleryView = function HomeView() {
    return <div>Gallery</div>;
};
const SheetsView = function HomeView() {
    return <div>Sheets</div>;
};

const routes = [
    {
        path: '/home',
        element: <HomeView/>,
    }, {
        path: 'image',
        element: <GalleryView/>,
    }, {
        path: 'sheets',
        element: <SheetsView/>,
    },
    {
        path: '*',
        element: <Navigate to="/home" replace={true}/>
    }
];

function Router() {
    return useRoutes(routes);
}

export default Router;
