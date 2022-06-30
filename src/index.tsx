import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import FileReaderService from './services/FileReader.service';

const container = document.getElementById('root')!;
const root = createRoot(container);
const fileReader = new FileReaderService();
export const FileReaderContext = React.createContext(fileReader);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <FileReaderContext.Provider value={fileReader}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </FileReaderContext.Provider>
        </Provider>
    </React.StrictMode>
);
