import React, { useEffect } from 'react';
import 'App.css';
import Router from 'Router';
import AppMenu from 'common/AppMenu';
import { useAppDispatch } from 'store/hooks';
import { fileActionCreators } from 'store/files/files.actions';

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
