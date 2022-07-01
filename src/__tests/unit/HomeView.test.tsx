import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import React from 'react';
import HomeView from 'views/HomeView';

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