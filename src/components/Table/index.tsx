import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { HeaderProps } from './types';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';


export const StickyHeadTable: React.FC<HeaderProps> = ({ headers,rows }): JSX.Element => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#ededed',
            // color: 'white',
        },
        [`&.${tableCellClasses.body}`]: {
            // fontSize: 14,
        },
    }));
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 460 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <StyledTableCell
                                    key={header.id}
                                    align={header.align}
                                    style={{ minWidth: header.minWidth, fontWeight: 'bold' }}
                                    variant='head'
                                >
                                    {header.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row:any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                        {headers.map((header) => {
                                            const value = row[header.id];
                                            return (
                                                <TableCell key={header.id} align={header.align}>
                                                    {header.format && typeof value === 'number'
                                                        ? header.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
