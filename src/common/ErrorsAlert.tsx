import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import errorsSelectors from 'store/errors/errors.selectors';
import { errorActionCreators } from 'store/errors/errors.actions';


export const ErrorsAlert = () => {
    const visibleErrors = useAppSelector(errorsSelectors.getVisibleErrors);
    const dispatch = useAppDispatch();
    
    const handleClose = (id: string) => (event: React.SyntheticEvent, reason?: string) => {
        if(reason === 'clickaway') {
            return;
        }
        dispatch(errorActionCreators.hideError(id));
    };
    
    return (
        <div>
            {visibleErrors.map(({ id, message }) => (
                <Snackbar open key={id}>
                    <Alert onClose={handleClose(id)} data-id={id} severity="error" sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            ))}
        </div>
    );
};

export default ErrorsAlert;