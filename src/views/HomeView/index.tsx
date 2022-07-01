import React from 'react';
import FileTable from './FileTable';
import FileTableToolbar from './FileTableToolbar';

const HomeView = (): JSX.Element => {
    return (
        <div className="container" data-testid="homepage">
            <FileTableToolbar/>
            <FileTable/>
        </div>
    );
};

export default HomeView;
