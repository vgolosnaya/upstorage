import { FilesActions } from './file.actions';

const filesReducer = (state = [], action: any) => {
    switch (action.type) {
    case FilesActions.READ_FILE_SUCCESS:
        console.log(action.payload);
        return state;
    default:
        return state;
    }
};

export default filesReducer;