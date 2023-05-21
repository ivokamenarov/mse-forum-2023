import { Button, TextField } from "@mui/material";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import api from '../services/api'

export default () => {

    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        api.post('/topics', {title, userId: 1})
            .then(() => {
                navigate('/topics');
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Topic</h1>
            <TextField 
                id="title" 
                label="Title" 
                variant="filled"
                onChange={e => setTitle(e.target.value)}
                required
                type="input"
                sx={{mb: 3}}
                fullWidth
                value={title}/>
            <Button variant="contained" type="submit">Submit</Button>
            <Button variant="contained" component={Link} to="/topics">Cancel</Button>
        </form>
    )
}