import {useEffect, useState} from 'react';
import api from '../services/api'

export default (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true);
        api.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return(
        {data, loading, error}
    )
}