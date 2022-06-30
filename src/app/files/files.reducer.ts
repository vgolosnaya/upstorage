import FilesActions from './files.actions';
import { IFile } from '../../services/FileReader.service';
import { PayloadAction } from '../../types';

const filesReducer = (state = [], action: PayloadAction): IFile[] => {
    switch (action.type) {
    case FilesActions.LOAD_FILES_SUCCESS:
        return [...action.payload];
    default:
        return state;
    }
};

export default filesReducer;