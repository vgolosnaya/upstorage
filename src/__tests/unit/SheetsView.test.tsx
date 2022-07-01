import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import React from 'react';
import SheetsView from 'views/SheetsView';

describe('[SNAPSHOT] Sheets page:', ()=>{
    test('Should match snapshot', () => {
        const component = render(
            <Provider store={store}>
                <SheetsView/>
            </Provider>
        );
        
        expect(component.baseElement).toMatchSnapshot();
    });
});