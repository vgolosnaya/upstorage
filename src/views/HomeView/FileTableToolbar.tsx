import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import LABELS from 'labels';
import { Event } from 'types';
import { fileActionCreators } from 'store/files/files.actions';
import { useAppDispatch } from 'store/hooks';
import { FileReaderContext } from 'index';
import { Grid } from '@mui/material';

const FileTableToolbar = (): JSX.Element => {
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
        <Grid container rowSpacing={1}>
            <Grid item xs={6}>
                <Typography variant="h4" component="div" gutterBottom>
                    {LABELS.recently_loaded}
                </Typography>
            </Grid>
            <Grid item xs={6} justifyContent="end" display="flex">
                <label htmlFor="contained-button-file">
                    <Input accept="text/csv,image/png" id="contained-button-file" multiple type="file" onChange={onFileUpload}/>
                    <Button variant="contained" component="span">
                        {LABELS.upload}
                    </Button>
                </label>
            </Grid>
        </Grid>
    
    );
};

export default FileTableToolbar;
