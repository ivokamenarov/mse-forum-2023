import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

export default function AllTopicsPage() {
    
    const {data, loading} = useFetch('/topics')

    if (loading) {
        return <CircularProgress />
    }

    return <>
        <h1>All Topics</h1>
        <Button variant="contained" component={Link} to='/topics/add'>Add Topic</Button>
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
                {data.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        <Link to={'/topics/' + row.id}>{row.title}</Link>
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