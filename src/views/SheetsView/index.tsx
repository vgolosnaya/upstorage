import React from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from '@mui/material';
import LABELS from '../../labels';
import filesSelectors from '../../app/files/files.selectors';
import { useAppSelector } from '../../app/hooks';

const SheetsView = (): JSX.Element => {
    const csvFiles = useAppSelector(filesSelectors.getCsv);
    
    return (
        <div className="container">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>FileName</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Datetime</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {csvFiles.map((file) => (
                            <TableRow
                                key={file.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {file.fileName}
                                </TableCell>
                                <TableCell align="right">{file.total}</TableCell>
                                <TableCell align="right">{file.relativeDateTime}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default SheetsView;
