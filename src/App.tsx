import React, { useEffect } from 'react';
import Router from 'Router';
import AppMenu from 'common/AppMenu';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fileActionCreators } from 'store/files/files.actions';
import ErrorsAlert from './common/ErrorsAlert';


function App() {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(fileActionCreators.loadFiles());
    }, []);
    
    return (
        <>
            <AppMenu/>
            <ErrorsAlert/>
            <Router/>
        </>
    );
}

export default App;
