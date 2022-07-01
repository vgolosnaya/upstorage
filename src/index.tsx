import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'App';
import ErrorBoundary from './common/ErrorBoundary';
import { store } from './store';
import FileReaderContext, { fileReader } from './FileReaderContext';
import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <FileReaderContext.Provider value={fileReader}>
                    <App/>
                </FileReaderContext.Provider>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);
