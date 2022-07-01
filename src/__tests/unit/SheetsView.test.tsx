import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import SheetsView from 'views/SheetsView';
import { store } from 'store';

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