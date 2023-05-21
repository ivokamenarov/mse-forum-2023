import {useEffect, useState} from 'react';
import api from '../services/api'

export default (type, url, body = {}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true);
        api[type](url, body)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return(
        {data, loading, error}
    )
}