import { render, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import App from 'App';
import { store } from 'store';

describe('[INTEGRATION] Home page:', () => {
    let component: RenderResult;
    beforeEach(() => {
        component = render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    });
    
    test('Should render home page', () => {
        expect(component.getByTestId('homepage')).toBeInTheDocument();
    });
    
    test('Should load file onclick upload', async() => {
        expect(component.getByTestId('upload')).toBeInTheDocument();
        const input = component.getByTestId('upload');
        const testFile = {
            data: [ 'test' ],
            name: 'test.png',
            type: 'image/png',
        };
        await userEvent.upload(input, new File(testFile.data, testFile.name, { type: testFile.type }));
        await waitFor(() => expect(component.getByTestId(testFile.name)).toBeInTheDocument());
    });
});

