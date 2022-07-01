import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmptyList from 'common/EmptyList';
import { useAppSelector } from 'store/hooks';
import filesSelectors from 'store/files/files.selectors';
import LABELS from 'labels';

const FileTable = (): JSX.Element => {
    const files = useAppSelector(filesSelectors.getRecent);
    if(!files.length) {
        return <EmptyList/>;
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{LABELS.fileName}</TableCell>
                        <TableCell align="right">{LABELS.extension}</TableCell>
                        <TableCell align="right">{LABELS.timestamp}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {files.map((file) => (
                        <TableRow
                            key={file.id}
                            data-testid={file.fileName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {file.fileName}
                            </TableCell>
                            <TableCell align="right">{file.type}</TableCell>
                            <TableCell align="right">{file.relativeTimestamp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FileTable;