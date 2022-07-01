import React from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import LABELS from 'labels';
import filesSelectors from 'store/files/files.selectors';
import { useAppSelector } from 'store/hooks';
import EmptyList from 'common/EmptyList';

const SheetsView = (): JSX.Element => {
    const csvFiles = useAppSelector(filesSelectors.getCsv);
    const renderTable = () => {
        if(!csvFiles.length) {
            return <EmptyList/>;
        }
        return <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{LABELS.fileName}</TableCell>
                        <TableCell align="right">{LABELS.total}</TableCell>
                        <TableCell align="right">{LABELS.timestamp}</TableCell>
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
                            <TableCell align="right">{file.relativeTimestamp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>;
    };
    
    return (
        <div className="container">
            {renderTable()}
        </div>
    );
};

export default SheetsView;
