import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import React from 'react';
import GalleryView from 'views/GalleryView';

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