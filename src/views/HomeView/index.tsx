import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import LABELS from 'labels';
import { Event } from 'types';
import { fileActionCreators } from 'store/files/files.actions';
import { useAppDispatch } from 'store/hooks';
import { FileReaderContext } from 'index';
import FileTable from './FileTable';

const HomeView = (): JSX.Element => {
    const Input = styled('input')({
        display: 'none',
    });
    const fileReader = useContext(FileReaderContext);
    const dispatch = useAppDispatch();
    
    const onFileUpload = async(event: Event<HTMLInputElement>) => {
        const files = Array.from(event?.target.files || []);
        
        while(files.length) {
            const file = files.shift()!;
            const result = await fileReader.readFile(file);
            dispatch(fileActionCreators.saveFileToStorage(result));
        }
    };
    
    return (
        <div className="container">
            <label htmlFor="contained-button-file">
                <Input accept="text/csv,image/png" id="contained-button-file" multiple type="file" onChange={onFileUpload}/>
                <Button variant="contained" component="span">
                    {LABELS.upload}
                </Button>
            </label>
            <FileTable/>
        </div>
    );
};

export default HomeView;
