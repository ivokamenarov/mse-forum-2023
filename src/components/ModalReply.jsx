import { Box, Button, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalReply = (props) => {

    const {title, data, open, setOpen} = props;
    
    const [text, setText] = useState('');

    useEffect(() => {
        if (data && data.text) {
            setText(data.text)
        }
    }, [data])

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(false);
        props.handleSubmit({text})
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            >
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <h2>{title}</h2>
                    <TextField 
                        id="text" 
                        label="Text" 
                        variant="filled"
                        onChange={e => setText(e.target.value)}
                        required
                        type="input"
                        sx={{mb: 3}}
                        fullWidth
                        value={text}/>
                    <Button variant="contained" type="submit">Submit</Button>
                    <Button variant="contained" onClick={() => setOpen(false)}>Cancel</Button>
                </form>
            </Box>
        </Modal>
    )
}

export default ModalReply