import { useParams } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import Reply from "./Reply";
import React, { useEffect, useState } from "react";

import api from '../services/api'
import ModalReply from './ModalReply'


export default () => {

    const {topicId} = useParams();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [fetch, setFetch] = useState(new Date())

    useEffect(() => {
        setLoading(true);
        api.get(`/topics/${topicId}`)
            .then((response) => {
                setData(response.data)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [fetch])

    const handleAddReply = (payload) => {
        api.post(`/topics/${topicId}/replies`, {...payload, userId: 1})
            .then(() => {
                setFetch(new Date())
            })
    }

    const handleEdit = (replyId, payload) => {
        api.put(`/topics/${topicId}/replies/${replyId}`, payload)
            .then(() => {
                setFetch(new Date())
            })
    }

    const deleteReply = (replyId) => {
        api.delete(`/topics/${topicId}/replies/${replyId}`)
            .then(() => setFetch(new Date()))
    }

    if (loading) {
        return <CircularProgress />
    }

    return <>
        <h1>{data.title}</h1>
        <p>replies: {data.replies.length}</p>
        {data.replies.map((reply) => <Reply key={reply.id} 
            data={reply} 
            handleDelete={() => deleteReply(reply.id)}
            handleEdit={(payload) => handleEdit(reply.id, payload)} />)}
        <Button variant="contained" onClick={() => setOpen(true)}>Add Reply</Button>
        <ModalReply
            title="Add reply"
            open={open}
            setOpen={setOpen}
            handleSubmit={handleAddReply}/>
    </>;
}