import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from 'store';

describe('[INTEGRATION] Home page:', ()=>{
    test('Should render home page', () => {
        const component = render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
        
        expect(component.getByTestId('homepage')).toBeInTheDocument();
    });
});

