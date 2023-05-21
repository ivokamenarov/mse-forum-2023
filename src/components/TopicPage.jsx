import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { CircularProgress } from "@mui/material";
import Reply from "./Reply";


export default () => {

    const {topicId} = useParams();

    const {data, loading} = useFetch(`/topics/${topicId}`)

    if (loading) {
        return <CircularProgress />
    }

    return <>
        <h1>{data.title}</h1>
        <p>replies: {data.replies.length}</p>
        {data.replies.map(reply => <Reply data={reply}/>)}
    </>;
}