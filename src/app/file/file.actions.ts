import { IFile } from '../../services/FileReader.service';

export enum FilesActions {
    READ_FILE_SUCCESS = 'READ_FILE_SUCCESS',
}

const actions = {
    readFileSuccess: (payload: IFile) => ({
        type: FilesActions.READ_FILE_SUCCESS,
        payload
    })
};

export default actions;