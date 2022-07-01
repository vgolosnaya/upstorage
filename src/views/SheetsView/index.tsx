import React from 'react';
import EmptyList from 'common/EmptyList';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { useAppSelector } from 'store/hooks';
import filesSelectors from 'store/files/files.selectors';
import LABELS from 'labels';

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
