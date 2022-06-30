import { RootState } from 'store';

const errorsSelectors = {
    getErrors: (state: RootState) => state.errors,
    getVisibleErrors: (state: RootState) => state.errors
        .filter(({ isVisible }) => isVisible)
};

export default errorsSelectors;