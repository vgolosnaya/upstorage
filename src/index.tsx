import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'App';
import './index.scss';
import { store } from './store';
import FileReaderContext, { fileReader } from './FileReaderContext';
import { Provider } from 'react-redux';
import ErrorBoundary from './common/ErrorBoundary';

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
