import React, { useEffect } from 'react';
import Router from 'Router';
import AppMenu from 'common/AppMenu';
import { useAppDispatch } from 'store/hooks';
import { fileActionCreators } from 'store/files/files.actions';
import ErrorsAlert from './common/ErrorsAlert';
import { BrowserRouter } from 'react-router-dom';


function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fileActionCreators.loadFiles());
    }, []);
    
    return (
        <BrowserRouter>
            <AppMenu/>
            <ErrorsAlert/>
            <Router/>
        </BrowserRouter>
    );
}

export default App;
