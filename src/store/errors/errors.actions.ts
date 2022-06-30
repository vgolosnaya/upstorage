export enum ErrorsActions {
    SHOW_ERROR = 'SHOW_ERROR',
    HIDE_ERROR = 'HIDE_ERROR',
}

export const errorActionCreators = {
    showError: (payload: string) => ({
        type: ErrorsActions.SHOW_ERROR,
        payload,
    }),
    hideError: (payload: string) => ({
        type: ErrorsActions.HIDE_ERROR,
        payload
    }),
};

export default ErrorsActions;