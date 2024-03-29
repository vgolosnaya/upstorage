import FilesActions, { fileActionCreators } from './files.actions';
import { PayloadAction } from 'types';
import StorageService from 'services/Storage.service';
import { IFile } from 'services/FileReader.service';
import { errorActionCreators } from 'store/errors/errors.actions';
import { config } from 'config';

const filesMiddleware = (storageService: StorageService<IFile>) => (store: any) => (next: any) => (action: PayloadAction) => {
    switch(action.type) {
    case FilesActions.LOAD_FILES: {
        store.dispatch(fileActionCreators.loadFilesSuccess(storageService.data));
        break;
    }
    case FilesActions.SAVE_FILE_TO_STORAGE:
        try {
            storageService.addItem(action.payload);
        } catch(error) {
            store.dispatch(errorActionCreators.showError(config.errors.largeFileSize.message));
        }
        store.dispatch(fileActionCreators.loadFilesSuccess(storageService.data));
        break;
    }
    next(action);
};

export default filesMiddleware;