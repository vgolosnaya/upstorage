import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import LABELS from 'labels';
import { Event } from 'types';
import { fileActionCreators } from 'store/files/files.actions';
import { useAppDispatch } from 'store/hooks';
import { Grid } from '@mui/material';
import { FileException } from 'config';
import { errorActionCreators } from 'store/errors/errors.actions';
import FileReaderContext from 'FileReaderContext';

const FileTableToolbar = (): JSX.Element => {
    const Input = styled('input')({
        display: 'none',
    });
    const fileReader = useContext(FileReaderContext);
    const dispatch = useAppDispatch();
    
    const onFileUpload = async(event: Event) => {
        const target = event?.target as HTMLInputElement;
        const files = Array.from( target.files || []);
        
        while(files.length) {
            const file = files.shift()!;
            try {
                const result = await fileReader.readFile(file);
                dispatch(fileActionCreators.saveFileToStorage(result));
            } catch(error) {
                console.log(error);
                if(error instanceof FileException){
                    dispatch(errorActionCreators.showError(error.message));
                }
            }
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
                    <Input accept="text/csv,image/png" id="contained-button-file" multiple type="file" onInput={onFileUpload}/>
                    <Button variant="contained" component="span">
                        {LABELS.upload}
                    </Button>
                </label>
            </Grid>
        </Grid>
    );
};

export default FileTableToolbar;
