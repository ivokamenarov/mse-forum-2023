import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = [
    {
        "title": "strfffing",
        "userId": null,
        "createdAt": "2023-05-20T11:14:58.919+00:00",
        "updatedAt": "2023-05-20T11:15:18.956+00:00",
        "replies": [
            {
            "topicId": 0,
            "userId": 0,
            "text": "string"
            },
            {
            "topicId": 0,
            "userId": 0,
            "text": "string"
            }
        ]
    },
    {
        "title": "string",
        "userId": 1,
        "createdAt": "2023-05-20T11:31:31.253+00:00",
        "updatedAt": "2023-05-20T11:31:31.253+00:00",
        "replies": []
    },
    {
        "title": "string",
        "userId": 1,
        "createdAt": "2023-05-20T11:31:40.504+00:00",
        "updatedAt": "2023-05-20T11:31:40.504+00:00",
        "replies": []
    },
    {
        "title": "string",
        "userId": 1,
        "createdAt": "2023-05-20T11:32:35.730+00:00",
        "updatedAt": "2023-05-20T11:32:35.730+00:00",
        "replies": []
    },
    {
        "title": "string",
        "userId": 1,
        "createdAt": "2023-05-20T11:39:54.378+00:00",
        "updatedAt": "2023-05-20T11:39:54.378+00:00",
        "replies": []
    }
    ];

export default function AllTopicsPage() {
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