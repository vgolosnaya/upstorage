import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import HomeView from 'views/HomeView';
import { store } from 'store';

describe('[SNAPSHOT] Home page:', ()=>{
    test('Should match snapshot', () => {
        const component = render(
            <Provider store={store}>
                <HomeView/>
            </Provider>
        );
        
        expect(component.baseElement).toMatchSnapshot();
    });
});