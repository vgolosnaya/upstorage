import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filesReducer from './files/files.reducer';
import { IFile } from '../services/FileReader.service';
import filesMiddleware from './files/files.middleware';
import StorageService from '../services/StorageService';

const storageService = new StorageService<IFile>('files');

export const store = configureStore({
    reducer: combineReducers({
        files: filesReducer,
    }),
    middleware: [filesMiddleware(storageService)]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
    files: IFile[]
};
