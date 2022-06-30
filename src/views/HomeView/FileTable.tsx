import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import LABELS from 'labels';
import React from 'react';
import { useAppSelector } from 'store/hooks';
import filesSelectors from 'store/files/files.selectors';

const FileTable = ():JSX.Element => {
    const files = useAppSelector(filesSelectors.getRecent);
    return (
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
                    {files.map((file) => (
                        <TableRow
                            key={file.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {file.fileName}
                            </TableCell>
                            <TableCell align="right">{file.type}</TableCell>
                            <TableCell align="right">{file.relativeDateTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FileTable;