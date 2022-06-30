import { configureStore } from '@reduxjs/toolkit';
import filesReducer from './file/files.reducer';

export const store = configureStore({
    reducer: {
        files: filesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
