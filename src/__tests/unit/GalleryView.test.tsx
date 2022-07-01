import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import GalleryView from 'views/GalleryView';
import { store } from 'store';

describe('[SNAPSHOT] Gallery page:', ()=>{
    test('Should match snapshot', () => {
        const component = render(
            <Provider store={store}>
                <GalleryView/>
            </Provider>
        );
        
        expect(component.baseElement).toMatchSnapshot();
    });
});