import {Card, CardContent, Typography} from '@mui/material';

const Reply = ({data}) => {

    return <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                User: {data.userId}
            </Typography>
            <Typography variant="body2">
                {data.text}
            </Typography>
        </CardContent>
    </Card>
}

export default Reply;