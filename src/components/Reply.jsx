import {Button, Card, CardContent, Typography} from '@mui/material';
import { useState } from 'react';
import ModalReply from './ModalReply';

const Reply = (props) => {

    const {data, handleDelete, handleEdit} = props

    const [edit, setEdit] = useState(false)

    return (<>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    User: {data.userId}
                </Typography>
                <Typography variant="body2">
                    {data.text}
                </Typography>
                <Typography>
                <Button variant="text" onClick={() => setEdit(true)}>Edit</Button>
                <Button variant="text" onClick={handleDelete}>Delete</Button>
                </Typography>
            </CardContent>
        </Card>
        <ModalReply 
            title="Edit reply"
            data={data}
            open={edit}
            setOpen={setEdit}
            handleSubmit={handleEdit} />
    </>)
}

export default Reply;