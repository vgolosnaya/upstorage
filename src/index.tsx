import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from 'App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import FileReaderService from 'services/FileReader.service';
import { config } from 'config';
import ErrorBoundary from 'common/ErrorBoundary';

const container = document.getElementById('root')!;
const root = createRoot(container);
const fileReader = new FileReaderService(config.csvAllowedHeader);
export const FileReaderContext = React.createContext(fileReader);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <FileReaderContext.Provider value={fileReader}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </FileReaderContext.Provider>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);
