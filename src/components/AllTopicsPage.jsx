import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useFetch from './useFetch';

export default function AllTopicsPage() {
    
    const {data, loading} = useFetch('get', '/topics')

    if (loading) {
        return <CircularProgress />
    }

    return <>
        <h1>All Topics</h1>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Topic</TableCell>
                <TableCell align="right">User</TableCell>
                <TableCell align="right">Replies</TableCell>
                <TableCell align="right">Create Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {row.title}
                        </TableCell>
                        <TableCell align="right">{row.userId}</TableCell>
                        <TableCell align="right">{row.replies.length}</TableCell>
                        <TableCell align="right">{row.createdAt}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </>;
  }