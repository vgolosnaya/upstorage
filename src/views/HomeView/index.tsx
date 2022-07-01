import React from 'react';
import FileTable from './FileTable';
import FileTableToolbar from './FileTableToolbar';

const HomeView = (): JSX.Element => {
    return (
        <div className="container">
            <FileTableToolbar/>
            <FileTable/>
        </div>
    );
};

export default HomeView;
