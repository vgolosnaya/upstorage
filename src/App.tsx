import React, { useEffect } from 'react';
import './App.css';
import Router from './Router';
import AppMenu from './common/AppMenu';
import { useAppDispatch } from './app/hooks';
import { fileActionCreators } from './app/files/files.actions';

function App() {
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        dispatch(fileActionCreators.loadFiles());
    }, []);
    
    return (
        <>
            <AppMenu/>
            <Router/>
        </>
    );
}

export default App;
