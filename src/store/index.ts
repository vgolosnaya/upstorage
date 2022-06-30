import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filesReducer from 'store/files/files.reducer';
import { IFile } from 'services/FileReader.service';
import filesMiddleware from 'store/files/files.middleware';
import StorageService from 'services/Storage.service';
import errorsReducer, { ErrorState } from 'store/errors/errors.reducer';

const storageService = new StorageService<IFile>('files');

export const store = configureStore({
    reducer: combineReducers({
        files: filesReducer,
        errors: errorsReducer,
    }),
    middleware: [ filesMiddleware(storageService) ]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
    files: IFile[],
    errors: ErrorState[],
};
