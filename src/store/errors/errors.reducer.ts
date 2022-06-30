import ErrorsActions from './errors.actions';
import { PayloadAction } from 'types';
import { v4 } from 'uuid';

export type ErrorState = {
    message: string;
    id: string;
    isVisible: boolean;
}
const createVisibleError = (message: string) => ({ message, id: v4(), isVisible: true });
const errorsReducer = (state = [], action: PayloadAction): ErrorState[] => {
    switch(action.type) {
    case ErrorsActions.SHOW_ERROR:
        return [ ...state, createVisibleError(action.payload) ];
    case ErrorsActions.HIDE_ERROR:
        return state.map((item: ErrorState) => {
            if(item.id === action.payload) {
                return {
                    message: item.message,
                    id: item.id,
                    isVisible: false,
                };
            }
            return item;
        });
    default:
        return state;
    }
};

export default errorsReducer;