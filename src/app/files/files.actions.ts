import { IFile } from '../../services/FileReader.service';

export enum FilesActions {
    LOAD_FILES = 'LOAD_FILES',
    LOAD_FILES_SUCCESS = 'LOAD_FILES_SUCCESS',
    SAVE_FILE_TO_STORAGE = 'SAVE_FILE_TO_STORAGE',
}

export const fileActionCreators = {
    loadFiles: () => ({
        type: FilesActions.LOAD_FILES
    }),
    loadFilesSuccess: (payload: IFile[]) => ({
        type: FilesActions.LOAD_FILES_SUCCESS,
        payload
    }),
    saveFileToStorage: (payload: IFile) => ({
        type: FilesActions.SAVE_FILE_TO_STORAGE,
        payload
    }),
};

export default FilesActions;