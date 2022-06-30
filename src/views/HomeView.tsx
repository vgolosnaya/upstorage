import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from '@mui/material';
import LABELS from '../labels';
import Papa from 'papaparse';
import { Event } from '../types';


function createData(
    fileName: string,
    fileExtension: 'png' | 'svg',
    dateTime: string,
) {
    return { fileName, fileExtension, dateTime };
}

const rows = [
    createData('test_png1', 'png', 'test'),
    createData('test_svg1', 'svg', 'test'),
    createData('test_svg2', 'svg', 'test'),
    createData('test_png2', 'png', 'test')
];

const HomeView = (): JSX.Element => {
    const Input = styled('input')({
        display: 'none',
    });
    const allowedTypes = {
        csv: 'text/csv',
        png: 'image/png',
    };
    
    const readPngFile = (file: any) => {
        const fileReader = new FileReader();
        
        fileReader.onload = (event: ProgressEvent<FileReader>) => {
            console.log(event.target?.result);
        };
        
        fileReader.readAsDataURL(file);
    };
    
    const readCsvFile = (file: any) => {
        Papa.parse(file, {
            header: true,
            complete: function(results: any) {
                console.log(results.data, results.meta);
            },
        });
    };
    
    const onFileUpload = (event: Event<HTMLInputElement>) => {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const files = Array.from(event?.target.files || []);
        console.log(files);
        files.forEach((file: any) => {
            switch(file.type) {
            case allowedTypes.csv:
                readCsvFile(file);
                return;
            case allowedTypes.png:
                readPngFile(file);
                return;
            default:
                throw new Error('allowed types');
            }
        });
        
    };
    
    return (
        <Container maxWidth="xl">
            <label htmlFor="contained-button-file">
                <Input id="contained-button-file" multiple type="file" onChange={onFileUpload}/>
                <Button variant="contained" component="span">
                    {LABELS.upload}
                </Button>
            </label>
            <TableContainer component={Paper}>
                <Typography variant="overline" component="div" gutterBottom>
                    {LABELS.recently_loaded}
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>FileName</TableCell>
                            <TableCell align="right">Extension</TableCell>
                            <TableCell align="right">Datetime</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.fileName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.fileName}
                                </TableCell>
                                <TableCell align="right">{row.fileExtension}</TableCell>
                                <TableCell align="right">{row.dateTime}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default HomeView;
